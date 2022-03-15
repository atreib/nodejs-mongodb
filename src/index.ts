import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import { json, urlencoded } from 'body-parser';
import mongoose from 'mongoose';
import setupRoutes from './routes';

const { API_PORT, MONGO_USERNAME, MONGO_PASSWORD, MONGODB_PORT, MONGODB_HOST } = process.env;
const MONGO_CONNSTRING = `
    mongodb
    ://${MONGO_USERNAME ?? 'atreib'}
    :${MONGO_PASSWORD ?? '123456'}
    @${MONGODB_HOST ?? 'localhost'}
    :${MONGODB_PORT ?? '27017'}
  `.replace(/\s/g, '');

const main = async () => {
  // Creating server
  const app = express();

  // Middlewares
  app.use(morgan('dev'));
  app.use(urlencoded({ extended: false }));
  app.use(json());

  // Connecting to database
  mongoose.connect(MONGO_CONNSTRING);

  // Creating routes
  await setupRoutes(app);

  const port = API_PORT ?? 3000;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on http://localhost:${port}`);
  });
};

main();
