import { Request, Response, Router } from 'express';
import HttpCode from '../config/httpCode';

const router = Router();

router.get('/health', (request: Request, response: Response) => {
  response.status(HttpCode.OK).json({
    status: 'OK',
  });
});

export default router;
