const express = require("express");
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const todoRouter = require("./routers/todo");

app.use("/todos", todoRouter);

module.exports = app;
