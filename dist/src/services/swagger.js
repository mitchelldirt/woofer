"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocument = void 0;
const example_1 = require("../openAPI/example");
exports.swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'APIs Document',
        description: 'This API is the backend of the Woofer social media app',
        termsOfService: '',
        contact: {
            name: 'Mitchell Mudd',
            email: 'developer@mitchellmudd.dev',
            url: 'https://mitchellmudd.dev',
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
        },
    },
    paths: {
        '/api/example': {
            post: example_1.exampleSwagger,
        },
    },
};
