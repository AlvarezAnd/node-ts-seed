import { Request, Response } from 'express';
import TodoService from './todo.service';
import {
  controller,
  httpDelete,
  httpGet,
  httpPatch,
  httpPost,
} from 'inversify-express-utils';
import { inject } from 'inversify';
import TYPES from '../config/ioc/types';

@controller('/todos')
export default class TodoController {
  constructor(@inject(TYPES.TodoService) private todoService: TodoService) {}

  @httpGet('/')
  getAll(request: Request, response: Response): Array<any> {
    const todos = this.todoService.getAll();
    return todos;
  }

  @httpGet('/')
  getOne(request: Request, response: Response): any {
    return '';
  }

  @httpPost('/')
  create(request: Request, response: Response) {
    return '';
  }

  @httpPatch('/')
  update(request: Request, response: Response) {
    return '';
  }

  @httpDelete('/')
  delete(request: Request, response: Response) {
    return '';
  }
}
