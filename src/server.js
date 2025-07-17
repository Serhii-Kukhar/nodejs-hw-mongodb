import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import dotenv from 'dotenv';

import { getEnvVar } from './utils/getEnvVar.js';
import router from './routers/index.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';
import { UPLOAD_DIR } from './constants/index.js';
import { swaggerDocs } from './middlewares/swaggerDocs.js';

dotenv.config();
const PORT = Number(getEnvVar('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(pino());
  app.use(cookieParser());

  app.get('/', (req, res) => {
    res.json({
      status: 200,
      message: 'Hello! This is contacts.',
      data: null,
    });
  });
  app.use('/api-docs', swaggerDocs());
  app.use(router);

  app.use(notFoundHandler);

  app.use(errorHandler);
  app.use('/uploads', express.static(UPLOAD_DIR));

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  return app;
};
