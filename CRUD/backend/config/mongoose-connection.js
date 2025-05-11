const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug")("development:mongoose");
mongoose
  .connect(`${config.get("MONGODB_URI")}/mernForm`)
  .then(() => {
    debug("Connected Successfully");
  })
  .catch((err) => {
    debug(err);
  });
module.exports = mongoose.connection;
