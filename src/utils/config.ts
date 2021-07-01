import * as dotenv from 'dotenv';
import * as path from 'path';
import { NodeEnv } from '@/utils/constants';

const { NODE_ENV } = process.env;

/**
 * NODE_ENV 변수에 따라서 환경변수 파일을 읽는다.
 */
const configPath = process.cwd() + '/config';
let envFileName = '';

if (NODE_ENV === NodeEnv.Dev) {
  envFileName = '.env.dev';
} else if (NODE_ENV === NodeEnv.Test) {
  envFileName = '.env.test';
} else if (NODE_ENV === NodeEnv.Stg) {
  envFileName = '.env.stg';
} else if (NODE_ENV === NodeEnv.Prod) {
  envFileName = '.env.prod';
}

let env = dotenv.config({
  path: path.resolve(configPath, envFileName),
}).parsed!;

interface Config {
  readonly nodeEnv: NodeEnv;
  readonly port: number;
  readonly logLevel: string;
  readonly mongo: {
    readonly url: string;
  };
  readonly jwtSecret: string;
}

const config: Config = {
  nodeEnv: process.env.NODE_ENV as NodeEnv,
  port: Number(env.PORT),
  logLevel: env.LOG_LEVEL,
  mongo: {
    url: env.MONGO_URL,
  },
  jwtSecret: env.JWT_SECRET,
};

export default config;
