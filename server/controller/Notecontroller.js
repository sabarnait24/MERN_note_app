const { Note } = require("../db/notemodel");

const addNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newNote = new Note({
      userid: req.userId,
      title,
      description,
    });
    const savenote = await newNote.save();
    return res.status(201).send(savenote);
  } catch (error) {
    return res.status(500).send(error);
  }
};
const getNote = async (req, res) => {
  try {
    const data = await Note.find({ userid: req.userId });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const updateNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newNote = {
      userid: req.userId,
      title,
      description,
    };
    const existnote = await Note.findByIdAndUpdate(req.params.id, newNote, {
      new: true,
    });
    console.log(existnote);

    return res.status(201).send({ msg: "note updated successfully" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const deleteNote = async (req, res) => {
  try {
    const existnote = await Note.findByIdAndDelete(req.params.id);

    return res.status(201).send({ msg: "deleted sucessfully" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  addNote,
  updateNote,
  getNote,
  deleteNote,
};
