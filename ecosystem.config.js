module.exports = {
  apps: [
    {
      name: 'express-ts-mongo-sample',
      script: 'ts-node',
      args: '-r tsconfig-paths/register src/index.ts',
      instances: 2,
      env_dev: {
        NODE_ENV: 'dev',
        TS_NODE_TRANSPILE_ONLY: true,
      },
      env_prod: {
        NODE_ENV: 'prod',
        TS_NODE_TRANSPILE_ONLY: true,
      },
    },
  ],
};
