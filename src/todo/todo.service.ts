import TodoRepository from './todo.repository';

export class TodoService {
  constructor(private todoRepository: TodoRepository) {}
  getAll() {
    return this.todoRepository.findAll();
  }
}
