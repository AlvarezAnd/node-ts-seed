import { Request, Response } from 'express';
import { TodoService } from './todo.service';

export class TodoController {
  constructor(private todoService: TodoService) {}
  getAll(request: Request, response: Response): Array<any> {
    const todos = this.todoService.getAll();
    return [];
  }
  getOne(request: Request, response: Response): any {
    return '';
  }
  create(request: Request, response: Response) {
    return '';
  }
  update(request: Request, response: Response) {
    return '';
  }
  delete(request: Request, response: Response) {
    return '';
  }
}
