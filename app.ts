import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 5000;
let interval: string | number | NodeJS.Timeout | undefined;

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
