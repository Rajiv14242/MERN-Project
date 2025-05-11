const userModel = require("../models/user.js");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken.js");
const registerUser = async (req, res) => {
  console.log(req.body);
  if (!req.body) {
    return res.json({
      success: false,
      message: "Fill the shown fields",
    });
  }
  const { name, email, password } = req.body;
  const user = await userModel.findOne({ email });

  if (user) {
    return res.json({
      success: false,
      message: "User already signed up , Kindly Login",
    });
  }
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      try {
        if (err) {
          return res.json({
            success: false,
            message: "Some error occured while hashing",
          });
        }
        const createdUser = await userModel.create({
          name,
          email,
          password: hash,
        });
        const token = generateToken(createdUser);
        console.log(token);
        res.cookie("token", token);

        res.json({
          success: true,
          message: "User registerd successfully",
        });
      } catch (e) {
        res.json({
          success: false,
          message: "Error occured",
        });
      }
    });
  });
};
module.exports = { registerUser };
