import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import morganBody from 'morgan-body';
import { handleError } from '@/error';
import { rootRouter } from '../domain';
import { morganBodyOptions } from './logger';

/**
 * Express App 을 반환한다.
 */
export function createServer() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  morganBody(app, morganBodyOptions);

  app.use(rootRouter);

  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    handleError(error, res);
  });

  return app;
}
