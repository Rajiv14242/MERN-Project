const express = require("express");
const app = express();
const db = require("./config/mongoose_connection");
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");
const session = require("express-session");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.secret,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser());
const userRouter = require("./routes/userRouter");

app.use("/user", userRouter);

app.listen(process.env.port, () => {
  console.log(`http://localhost:${process.env.port}`);
});
