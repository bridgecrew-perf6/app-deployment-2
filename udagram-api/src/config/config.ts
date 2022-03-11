import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  // Database
  dialect: 'postgres',
  username: `${process.env.DB_USER}`,
  password: process.env.DB_PASS,
  db_host: process.env.DB_HOST,
  db_port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,

  // Application
  app_host: process.env.HOST,
  app_port: process.env.PORT,

  // AWS
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,

  // Secrets
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};