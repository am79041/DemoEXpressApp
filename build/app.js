import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import { fetchTrends } from "./lib/functions/fetchTrends.js";
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.post("/", async (req, res) => {
    const places = req.body;
    try {
        const trendsResult = await fetchTrends(places);
        res.status(200).json(trendsResult);
    }
    catch (err) {
        res.status(400).json({ error: "Bad request" });
    }
});
app.all("*", (req, res) => {
    res.status(400).json({ msg: "method now allowed" });
});
app.listen(port, () => console.log(`Server started at ${port}`));
