const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ChrisBotUserSquema = new Schema(
  {
    firstName: String,
    lastName: String,
    facebookId: String,
    profilePic: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("chrisBotUser", ChrisBotUserSquema);
