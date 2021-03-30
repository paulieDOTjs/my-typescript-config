import express from "express";

// Boot express
const app = express();
const port = 5000;

// Application routing
app.use("/", (_req, res) => {
  res.status(200).send({ data: "Hello, World" });
});

// Start server
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
