import { Request, Response } from 'express';

function postExample(Req: Request, res: Response) {
    res.send({ message: 'Hello World' });
}

function testExample(x: number, y: number) {
    return x + y;
}

export { postExample, testExample };
