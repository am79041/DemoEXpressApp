import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({ msg: "success" });
});

app.listen(port, () => console.log(`Server is running at PORT: ${port}`));
