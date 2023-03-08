const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductsSquema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    descriptions: String,
    price: Number,
    img: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", ProductsSquema);
