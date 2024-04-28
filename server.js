const express = require("express");
const mongoose = require("mongoose");
const NotesRoute = require("./routes/notes");

const app = express();
app.use(express.json());

//connect to MongoDB database
mongoose
  .connect("mongodb://localhost/notes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB"));

app.use("/notes", NotesRoute); // Set up the routes middleware

// Start the server
app.listen(3000, () => console.log("Server started on port 3000"));

/*const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
*/
