const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");
const isloggedin = async (req, res, next) => {
  if (!req.cookies.token) {
    return res.json({
      success: false,
      message: "Loggin First",
    });
  }
  try {
    const data = jwt.verify(req.cookies.token, process.env.key); //{email: , id: }
    const user = await userModel.findOne({ email: data.email });

    if (!user) {
      return res.json({
        success: false,
        message: "User Not Found",
      });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.json({
      success: false,
      message: "Error Occured in the middleware portion",
    });
  }
};
module.exports = isloggedin;
