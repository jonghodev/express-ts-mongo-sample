import mongo from '@/utils/mongo';
import { createServer } from '@/utils/express';
import logger from '@/utils/logger';
import config from '@/utils/config';

mongo
  .open()
  .then(() => createServer())
  .then((server) =>
    server.listen(config.port, () => {
      logger.info(`Server listen on port: ${config.port}`);
    }),
  );
