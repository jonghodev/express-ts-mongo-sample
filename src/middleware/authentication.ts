import { Request, Response, NextFunction } from 'express';
import { ErrorCode, CustomError } from '@/error';
import { verifyJwtToken } from '@/utils/jwt';
import { User } from '@/domain/user/user.entity';

export async function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new CustomError(ErrorCode.AuthorizationMissing);
    const token = authHeader && authHeader.split(' ')[1];

    const payload = await verifyJwtToken(token);
    const user = await User.findById(payload.sub);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}
