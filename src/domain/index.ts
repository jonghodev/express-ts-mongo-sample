import express from 'express';
import { commonRouter } from '@/domain/common/common.router';
import { userRouter } from '@/domain/user/user.router';

export const rootRouter = express.Router();

rootRouter.use('/', commonRouter);
rootRouter.use('/user', userRouter);
