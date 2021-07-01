import express from 'express';
import { healthCheckApi } from '@/domain/common/common.api';

export const commonRouter = express.Router();

/**
 * Health check
 */
commonRouter.get('/health', healthCheckApi);
