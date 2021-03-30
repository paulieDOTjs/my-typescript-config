/* eslint-disable no-console */
import express from "express";
import dotenv from "dotenv";

import { hello } from "./hello";

dotenv.config();

// Boot express
const app = express();
const port = process.env.PORT || 5000;

// Application routing
app.use("/", (_req, res) => {
  res.status(200).send({ data: "Hello, World" });
});

//say hello
console.log(hello);

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
