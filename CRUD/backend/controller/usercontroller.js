const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");

const generateToken = require("../utils/generateToken");
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.json({
      success: false,
      message: "Fill all the fields",
    });
  }
  const user = await userModel.findOne({ email: email });
  if (user) {
    return res.json({
      success: false,
      message: "User already exists..",
    });
  }
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      if (err) {
        return res.json({
          success: false,
          message: err,
        });
      }
      try {
        const created_user = await userModel.create({
          name,
          email,
          password: hash,
        });
        const token = generateToken(created_user);
        res.cookie("token", token);
        res.json({
          success: true,
          message: "User created successfully",
        });
      } catch (err) {
        res.json({
          success: false,
          message: "Error occured while hashing",
        });
      }
    });
  });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    console.log("hello");
    return res.json({
      success: false,
      message: "Invalid email or password",
    });
  }
  bcrypt.compare(password, user.password, (err, result) => {
    if (err) {
      return res.json({
        success: false,
        message: "Invalid email or password",
      });
    }
    if (result) {
      const token = generateToken(user);
      res.cookie("token", token, { httpOnly: true, secure: false });
      return res.json({
        success: true,
        message: "Successfully logged in ",
      });
    } else {
      console.log("hello from bottom");
      res.json({
        success: false,
        message: "Invalid email or password",
      });
    }
  });
};
const userUpdate = async (req, res) => {
  const { _id } = req.user;
  if (!req.body) {
    return res.json({
      success: false,
      messgage: "Fill properly",
    });
  }
  const { name, email, password } = req.body;
  if (password) {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) {
          return res.json({
            success: false,
            message: err,
          });
        }
        try {
          const user = await userModel.findByIdAndUpdate(
            _id,
            { name, email, password: hash }, // fields to update
            { new: true, runValidators: true } // return updated doc, validate input
          );
          if (!user) {
            return res.json({
              success: false,
              message: "Cant find your profile in the database to login",
            });
          }
          const token = generateToken(user);
          res.cookie("token", token);
          res.json({
            success: true,
            message: "User Updated successfully",
          });
        } catch (err) {
          res.json({
            success: false,
            message: "Error occured",
          });
        }
      });
    });
  } else {
    try {
      const user = await userModel.findByIdAndUpdate(
        _id,
        { name, email }, // fields to update
        { new: true, runValidators: true } // return updated doc, validate input
      );
      if (!user) {
        return res.json({
          success: false,
          message: "Cant find your profile in the database to login",
        });
      }
      const token = generateToken(user);
      res.cookie("token", token);
      res.json({
        success: true,
        message: "User Updated successfully",
      });
    } catch (err) {
      res.json({
        success: false,
        message: "Error occured",
      });
    }
  }
};
const deleteUser = async (req, res) => {
  const { email } = req.user;
  try {
    const deleted_user = await userModel.findOneAndDelete({
      email,
    });

    if (!deleted_user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }
    return res.json({
      success: true,
      data: deleted_user,
      message: "User deleted successfully",
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Something went worng",
    });
  }
};
const logout = (req, res) => {
  res.cookie("token", "");
  res.json({
    success: "true",
    message: "Logged our successfully",
  });
};
const userDetails = (req, res) => {
  console.log(req.user);
  if (!req.user) {
    res.json({
      success: false,
      message: "Cant get the use data",
    });
  } else {
    res.json({
      success: true,
      data: req.user,
    });
  }
};
module.exports = {
  createUser,
  login,
  userUpdate,
  deleteUser,
  logout,
  userDetails,
};
