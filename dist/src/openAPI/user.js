"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
exports.user = {
    tags: [''],
    description: 'An example of grabbing all users from the database, probably not going to use, but want to make sure drizzl is working',
    operationId: 'user',
    security: [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        '200': {
            description: 'A simple example response',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Hello World',
                            },
                        },
                    },
                },
            },
        },
    },
};
