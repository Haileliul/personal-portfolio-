require("dotenv").config({ path: `${process.cwd()}/.env` });
const express = require("express");
const authRouter = require("./src/routers/authRoutes");
const educationRouter = require("./src/routers/educationRoutes");
const app = express();

// this is the place for middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the API!",
  });
});

// all routes will be here
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/education", educationRouter);

app.use("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: "Route not found",
  });
});

const PORT = process.env.APP_PORT || 4000;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
