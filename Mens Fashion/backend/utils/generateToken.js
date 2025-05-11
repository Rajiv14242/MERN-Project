const jwt = require("jsonwebtoken");
const generateToken = ({ email, _id }) => {
  var token = jwt.sign({ useremail: email, userid: _id }, process.env.secret);
  return token;
};
module.exports = { generateToken };
