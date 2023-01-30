"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.status(200).json({ msg: "success" });
});
app.listen(port, () => console.log(`Server is running at PORT: ${port}`));