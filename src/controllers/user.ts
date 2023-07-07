import type { Request, Response } from 'express';
import { db, users } from '../services/db.ts';
import type { User } from '../services/db.ts';

export async function getAllUsers(req: Request, res: Response): Promise<void> {
    console.log('Is this thing on?');
    try {
        const dbUsers: User[] = await db.select().from(users);
        console.log(dbUsers);
        res.send(dbUsers);
        console.log("Should've sent");
    } catch (e) {
        res.send({ error: `The error is ${e}` });
    }
}
