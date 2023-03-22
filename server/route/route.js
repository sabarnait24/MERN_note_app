const express = require("express");
const router = express.Router();
const Auth = require("../middleware/Auth");
const {
  deleteNote,
  updateNote,
  getNote,
  addNote,
} = require("../controller/Notecontroller");
const {
  updateDetails,
  registerUser,
  loginUser,
  getDetails,
  logoutUser,
} = require("../controller/Logincontroller");

router.get("/api/:id", getDetails);

router.post("/api/login", loginUser);

router.post("/api/register", registerUser);

router.put("/api/update", Auth, updateDetails);

router.post("/api/addnote", Auth, addNote);

router.get("/api/v1/getnote", Auth, getNote);

router.put("/api/updatenote/:id", Auth, updateNote);

router.delete("/api/deletenote/:id", Auth, deleteNote);


module.exports = router;
