import { postExample } from '../controllers/example';
import { Router } from 'express';

const router = Router();

router.post('/example', postExample);

export default router;
