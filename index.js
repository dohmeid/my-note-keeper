require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const notesRoute = require("./routes/notes");

const app = express(); //set up the express app

//connect to MongoDB database
mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB"));

app.use(express.json()); //accept the data in JSON format
app.use("/notes", notesRoute); //set up the routes middleware

//start the server
app.listen(3000, () => console.log("Server started on port 3000"));
