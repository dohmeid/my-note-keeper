const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");

// retrieve all notes
router.get("/", (req, res) => {
  Note.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.status(500).json({
        message: `An error occured in getting all notes! ${error.message}`,
      });
    });
});

// add a new note
router.post("/notes", (req, res) => {
  const note = new Note({
    title: req.body.title,
    content: req.body.content,
    creationDate: req.body.creationDate,
  });

  note
    .save()
    .then((response) => {
      res.status(201).json({ message: "new note added successfully" });
    })
    .catch((error) => {
      res.status(400).json({ message: `An error occured in adding a new note ${error.message}` });
    });
});

//delete a specific note using its ID
router.delete("/notes/:id", (req, res) => {
  const noteID = req.body.noteID;
  Note.findByIdAndRemove(noteID)
    .then(() => {
      res.json({ message: "note deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ message: "an error occured!" });
    });
});

//update a specific note using its ID
router.put("/notes/:id", (req, res) => {
  const noteID = req.body.noteID;

  let updatedNote = {
    title: req.body.title,
    content: req.body.content,
    creationDate: req.body.creationDate,
  };

  Note.findByIdAndUpdate(noteID, { $set: updatedNote })
    .then((response) => {
      res.json({ message: "note updated successfully" });
    })
    .catch((error) => {
      res.status(400).json({ message: "an error occured!" });
    });
});

module.exports = router;

/*
- **`GET /notes`**: Retrieve all notes.
- **`POST /notes`**: Add a new note.
- **`DELETE /notes/:id`**: Delete a specific note using its ID.
- **`PUT /notes/:id`**: Update a specific note using its ID.
*/
