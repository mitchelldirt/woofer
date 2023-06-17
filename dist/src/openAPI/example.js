"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleSwagger = void 0;
exports.exampleSwagger = {
    tags: ['Example API Endpoints'],
    description: 'Used to show off how swagger works',
    operationId: 'postExample',
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
