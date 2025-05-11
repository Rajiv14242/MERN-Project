const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  brand: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  picture: {
    type: Buffer,
    default: null,
  },
  size: {
    type: [String],
    default: null,
  },
  rating: {
    type: Number,
    default: null,
  },
  color: {
    type: [String],
    default: null,
  },
});
module.exports = mongoose.model("product", productSchema);
