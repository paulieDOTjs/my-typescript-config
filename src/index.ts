import express from "express";
import dotenv from "dotenv";

dotenv.config();

// Boot express
const app = express();
const port = process.env.PORT || 5000;

// Application routing
app.use("/", (_req, res) => {
  res.status(200).send({ data: "Hello, World" });
});

// Start server
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
