import { Request, Response } from 'express';

/**
 * Health check
 */
export async function healthCheckApi(req: Request, res: Response) {
  res.status(200).send('Server is healthy!');
}
