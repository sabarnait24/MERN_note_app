const db = require("../db/db");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
// const validator = require("validator");

const note = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
 
});
const Note = mongoose.model("note", note);
module.exports = {
  Note,
};
