import express from 'express';
import { validate } from 'express-validation';
import { verifyToken } from '@/middleware/authentication';
import { loginValidation, signupValidation } from '@/domain/user/user.dto';
import { getUserApi, loginApi, signupApi } from '@/domain/user/user.validator';
import { wrapAsync } from '@/utils/function';

export const userRouter = express.Router();

/**
 * Signup
 */
userRouter.post('/signup', validate(signupValidation), wrapAsync(signupApi));

/**
 * Login
 */
userRouter.post('/login', validate(loginValidation), wrapAsync(loginApi));

/**
 * Get user
 */
userRouter.get('/', verifyToken, wrapAsync(getUserApi));
