"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
let interval;
app.get("/", (req, res) => {
    interval = setInterval(() => {
        console.log("Interval running");
    }, 5000);
    res.status(200).json({ msg: "success" });
});
app.get("/stop", (req, res) => {
    clearInterval(interval);
    res.status(200).json({ msg: "job stopped" });
});
app.listen(port, () => console.log(`Server is running at PORT: ${port}`));
