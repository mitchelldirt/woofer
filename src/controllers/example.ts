import { Request, Response } from 'express';

function postExample(Req: Request, res: Response) {
    res.send({ message: 'Hello World' });
}

export { postExample };
