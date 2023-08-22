import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import container from './ioc/inversify';

export default class App {
  public port?: number;
  private server: InversifyExpressServer;
  private app: Application;

  constructor() {
    this.port = 4000;
    this.server = new InversifyExpressServer(container);
    this.app = express();
  }

  public setConfig() {
    this.server.setConfig((app: Application) => {
      app.use(express.json());
      app.use(cors());
      app.use(
        morgan(':method :url :status :res[content-length] - :response-time ms'),
      );
    });
  }

  public build() {
    this.app = this.server.build();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`[Server]: running on port ${this.port}`);
    });
  }
}
