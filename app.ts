import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 5000;
let interval: string | number | NodeJS.Timeout | undefined;

app.get("/", (req, res) => {
  interval = setInterval(async () => {
    const data = await fetch(
      "https://api.twitter.com/1.1/trends/place.json?id=1",
      {
        headers: {
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
      }
    );
    const json = await data.json();
    console.log(json);
  }, 5000);
  console.log(`Amit is here`);
  res.status(200).json({ msg: "success" });
});

app.get("/stop", (req, res) => {
  clearInterval(interval);
  res.status(200).json({ msg: "job stopped" });
});

app.listen(port, () => console.log(`Server is running at PORT: ${port}`));
