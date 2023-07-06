import { postExample } from '../controllers/example.js';
import { Router } from 'express';

const exampleRouter = Router();

exampleRouter.post('/example', postExample);

export default exampleRouter;
