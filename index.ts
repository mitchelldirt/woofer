import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { serve, setup } from 'swagger-ui-express';
import { swaggerDocument } from './src/services/swagger';

import router from './src/routes/example';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/api', router);
app.use('/api-docs', serve, setup(swaggerDocument));

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server, heck yeah!');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
