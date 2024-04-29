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
      res.status(500).json({
        message: `An error occured in getting all notes! ${error.message}`,
      });
    });
});

// add a new note
router.post("/", (req, res) => {
  const note = new Note({
    title: req.body.title,
    content: req.body.content
  });

  note
    .save()
    .then((response) => {
      res.status(201).json({ response });
    })
    .catch((error) => {
      res
        .status(400)
        .json({
          message: `An error occured in adding a new note ${error.message}`,
        });
    });
});

//delete a specific note using its ID
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Note.findByIdAndDelete(id)
    .then(() => {
      res.json({ message: "note deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ message: "an error occured!" });
    });
});

//update a specific note using its ID
router.put("/:id", (req, res) => {
  const id = req.params.id;

  let updatedNote = {
    title: req.body.title,
    content: req.body.content,
    creationDate: req.body.creationDate,
  };

  Note.findByIdAndUpdate(id, updatedNote)
    .then((response) => {
      res.json({ message: "note updated successfully" });
      res.send(response);
    })
    .catch((error) => {
      res.status(400).json({ message: "an error occured!" });
    });
});


//function to get a node by it id
async function getNote(req, res, next) {
  let note
  try {
    note = await Subscriber.findById(req.params.id)
    if (subscriber == null) {
      return res.status(404).json({ message: 'Cannot find subscriber' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.subscriber = subscriber
  next()
}

module.exports = router;

/*
- **`GET /notes`**: Retrieve all notes.
- **`POST /notes`**: Add a new note.
- **`DELETE /notes/:id`**: Delete a specific note using its ID.
- **`PUT /notes/:id`**: Update a specific note using its ID.
*/
