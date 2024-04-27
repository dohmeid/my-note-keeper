# my-note-keeper :notebook::notebook:	

### FTS-TASK5 - building a Node.js &amp; MongoDB note keeping application

### :stars:	Overview
This repository creates a REST API using Node.js, Express.js, and MongoDB for a note-keeping application. The application allows users to perform CRUD operations on notes.

### :dart: Features
- Each note has: a title, Content, a creation date.
- The app implements the following endpoints:
    - **`GET /notes`**: Retrieve all notes.
    - **`POST /notes`**: Add a new note.
    - **`DELETE /notes/:id`**: Delete a specific note using its ID.
    - **`PUT /notes/:id`**: Update a specific note using its ID.
- The app conects to a MongoDB database and uses Mongoose for object modeling.
- The app handles the potential errors gracefully. If an error occurs, the API returns a suitable status code and a descriptive error message.

### :space_invader: Technologies Used

### :eye: Demo 
