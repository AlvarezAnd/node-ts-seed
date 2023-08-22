import { config } from 'dotenv';
config();

const env = {
  APP_ENV: process.env.APP_ENV,
  APP_PORT: process.env.APP_PORT,
  APP_BASE_HOST: process.env.APP_BASE_HOST,
};

export default env;
