const express = require("express");
const router = express.Router();
const { registerUser } = require("../controller/userController");
router.get("/signup", registerUser);
module.exports = router;
