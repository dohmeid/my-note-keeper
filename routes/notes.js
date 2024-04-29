const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");

//retrieve all notes
router.get("/", (req, res) => {
  Note.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// add a new note
router.post("/", (req, res) => {
  const note = new Note({
    title: req.body.title,
    content: req.body.content,
  });

  note
    .save()
    .then((response) => {
      res.status(201).json({ response });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
});

//delete a specific note using its ID
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Note.findByIdAndDelete(id)
    .then((response) => {
      if (!response) {
        return res.status(404).json({ error: "Note not found" });
      }
      res.json({ message: "note deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

//update a specific note using its ID
router.put("/:id", (req, res) => {
  const id = req.params.id;

  let updatedNote = {
    title: req.body.title,
    content: req.body.content,
  };

  Note.findByIdAndUpdate(id, updatedNote, { new: true })
    .then((response) => {
      if (!response) {
        return res.status(404).json({ error: "Note not found" });
      }
      res.json({ message: "note updated successfully" });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
});

module.exports = router;
