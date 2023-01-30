import express from "express";
import { CronJob } from "cron";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 5000;

const job = new CronJob("*/5 * * * * *", () => {
  console.log("Give me Blowjob");
});

app.get("/", (req, res) => {
  job.start();
  res.status(200).json({ msg: "success" });
});

app.listen(port, () => console.log(`Server is running at PORT: ${port}`));
