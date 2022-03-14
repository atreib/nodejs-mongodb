/* eslint-disable no-unused-expressions */
import { Express, Router } from 'express';
import { readdirSync } from 'fs';
import { join } from 'path';

export default async (app: Express) => {
  const router = Router();
  app.use('/api', router);

  const files = readdirSync(__dirname);
  for (const file of files) {
    // eslint-disable-next-line no-continue
    if (file === 'index.ts') continue;

    const controller = join(__dirname, file);
    (await import(controller)).default(router);
  }
};
