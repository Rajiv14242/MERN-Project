const express = require("express");
const isloggedin = require("../middleware/isloggedin");
const router = express.Router();
const {
  createUser,
  deleteUser,
  login,
  logout,
  userDetails,
  userUpdate,
} = require("../controller/usercontroller");

router.post("/create", createUser);
router.post("/login", login);
router.put("/update", isloggedin, userUpdate);
router.delete("/delete", isloggedin, deleteUser);
router.get("/logout", isloggedin, logout);
router.get("/detail", isloggedin, userDetails);
module.exports = router;
