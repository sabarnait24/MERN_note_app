const db = require("../db/db");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
// const validator = require("validator");

const user = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("user", user);
module.exports = {
  User,
};
