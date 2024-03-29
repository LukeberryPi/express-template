import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("howdy");
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
