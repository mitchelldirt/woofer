"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../controllers/user");
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
userRouter.get('/', user_1.getAllUsers);
exports.default = userRouter;
