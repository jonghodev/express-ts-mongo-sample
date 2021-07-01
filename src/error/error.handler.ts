import { Response } from 'express';
import { ValidationError, Joi } from 'express-validation';
import { ErrorCode } from './error.code';
import config from '@/utils/config';
import { NodeEnv } from '@/utils/constants';
import { CustomError } from '@/error/error.type';

export function handleError(err: Error, res: Response) {
  /**
   * 1. Validation Error
   */
  if (err instanceof ValidationError || err instanceof Joi.ValidationError) {
    const error = new CustomError({
      statusCode: 400,
      message: 'Validation Failed',
      details: err.details,
    });
    return res.status(error.statusCode).json(error);
  }

  /**
   * 2. Custom Error
   */
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json(err);
  }

  /**
   * 3. Unexpected Error
   */

  const { message, statusCode } = ErrorCode.InternalError;
  const error = new CustomError({
    statusCode: statusCode,
    message: message,
  });

  /**
   * For stack tracing
   */
  if (config.nodeEnv === NodeEnv.Dev || config.nodeEnv === NodeEnv.Test) {
    console.error(err);
  }

  return res.status(error.statusCode).json(error);
}
