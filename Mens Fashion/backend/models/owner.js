const mongoose = require("mongoose");
const ownerSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  picture: {
    type: Buffer,
    default: null,
  },
});
module.exports = mongoose.model("owner", ownerSchema);
