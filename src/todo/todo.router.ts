import { Router } from 'express';
import { TodoController } from './todo.controller';

const router = Router();

const todoController = new TodoController();

router.get('/', todoController.getAll);

router.get('/:id', todoController.getOne);

router.post('/', todoController.create);

router.put('/:id', todoController.update);

router.delete('/:id', todoController.delete);

export default router;
