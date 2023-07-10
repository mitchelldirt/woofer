import { getAllUsers } from '../controllers/user.js';
import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', getAllUsers);

export default userRouter;
