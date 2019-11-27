import express from 'express';
import cors from 'cors';
import { join } from 'path';

import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();

    require('dotenv').config({
      path: join(__dirname, '/.env')
    })
  };

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  };

  routes() {
    this.server.use(routes);
  };
};

export default new App().server;