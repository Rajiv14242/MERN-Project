const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug")("development:mongoose");
mongoose
  .connect(`${config.get("MONGODB_URI")}/MensFashion`)
  .then(() => {
    debug("Mongoose connection is established");
  })
  .catch((err) => {
    debug("Failed to establish the connection");
  });
module.exports = mongoose.connection;
