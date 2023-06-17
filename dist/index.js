"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const swagger_ui_express_1 = require("swagger-ui-express");
const swagger_1 = require("./src/services/swagger");
const example_1 = __importDefault(require("./src/routes/example"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use('/api', example_1.default);
app.use('/api-docs', swagger_ui_express_1.serve, (0, swagger_ui_express_1.setup)(swagger_1.swaggerDocument));
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server, heck yeah!');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
