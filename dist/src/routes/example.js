"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const example_1 = require("../controllers/example");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/example', example_1.postExample);
exports.default = router;
