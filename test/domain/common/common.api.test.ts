import request from 'supertest';
import { Express } from 'express';
import mongo from '@/utils/mongo';
import { createServer } from '@/utils/express';

let server: Express;
beforeAll(async () => {
  await mongo.open();
  server = createServer();
});

afterAll(async () => {
  await mongo.close();
});

describe('GET /health', () => {
  it('should return 200', async () => {
    await request(server)
      .get(`/health`)
      .expect(200)
  });
});
