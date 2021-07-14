import { Request, Response } from 'express';
import { login, signup } from './user.service';

/**
 * Signup
 */
export async function signupApi(req: Request, res: Response) {
  const { email, password, name } = req.body;
  const user = await signup(email, password, name);
  res.status(201).json(user);
}

/**
 * Login
 */
export async function loginApi(req: Request, res: Response) {
  const { email, password } = req.body;
  const { user, token } = await login(email, password);

  res.send({
    token,
    user,
  });
}

/**
 * Get user
 */
export async function getUserApi(req: Request, res: Response) {
  const user = req.user;
  res.status(200).json(user);
}
