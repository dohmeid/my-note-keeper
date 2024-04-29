require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const notesRoute = require("./routes/notes");

const app = express(); // Set up the express app

//connect to MongoDB database
mongoose
  .connect(process.env.DATABASE_URL, {useNewUrlParser: true})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB"));

app.use(express.json()); // Allows us to accept the data in JSON format
app.use("/notes", notesRoute); // Set up the routes middleware

// Start the server
app.listen(3000, () => console.log("Server started on port 3000"));

/*const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
*/
