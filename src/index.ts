import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { serve, setup } from 'swagger-ui-express';
import { swaggerDocument } from './services/swagger.js';
import userRouter from './routes/user.js';
import exampleRouter from './routes/example.js';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/api', exampleRouter);
app.use('/api-docs', serve, setup(swaggerDocument));
app.use('/users', userRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server, heck yeah!');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
