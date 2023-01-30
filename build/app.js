"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    interval = setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield fetch("https://api.twitter.com/1.1/trends/place.json?id=1", {
            headers: {
                Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
            },
        });
        const json = yield data.json();
        console.log(json);
    }), 5000);
    console.log(`Amit is here`);
    res.status(200).json({ msg: "success" });
});
app.get("/stop", (req, res) => {
    clearInterval(interval);
    res.status(200).json({ msg: "job stopped" });
});
app.listen(port, () => console.log(`Server is running at PORT: ${port}`));
