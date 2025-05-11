const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const expressSession = require("express-session");
app.use(
  expressSession({
    secret: process.env.key,
    resave: true,
    saveUninitialized: true,
  })
);
const db = require("./config/mongoose-connection");
const userRouter = require("./Router/userRouter.js");

app.use("/user", userRouter);

app.listen(process.env.port, () => {
  console.log(`http://localhost:${process.env.port}`);
});
