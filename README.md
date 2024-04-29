# my-note-keeper :notebook::notebook:	

### FTS-TASK5 - building a Node.js &amp; MongoDB note keeping application

### :stars: Overview
This repository creates a REST API using Node.js, Express.js, and MongoDB for a note-keeping application. The application allows users to perform CRUD operations on notes.

-----
### :dart: Features
- Each note has: a title, Content, a creation date.
- The app implements the following endpoints:
    - **`GET /notes`**: Retrieve all notes.
    - **`POST /notes`**: Add a new note.
    - **`DELETE /notes/:id`**: Delete a specific note using its ID.
    - **`PUT /notes/:id`**: Update a specific note using its ID.
- The app conects to a MongoDB database and uses Mongoose for object modeling.
- The app handles the potential errors gracefully. If an error occurs, the API returns a suitable status code and a descriptive error message.
-----

### :space_invader: Technologies Used
<div align="left">
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" height="30" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" height="30" />
    <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" height="30" />
    <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" height="30" />
</div>

-----

### :file_folder: The Application Structure
1. models/noteModel.js
   
	This file creates a Mongoose model based on noteSchema that represents the structure of the note document within the MongoDB  collection.  note: (Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js)

2. routes/notes.js
   
    This file contains all the routes related to notes. 
	Express routers provide a way to group route handlers. They are instances of express.Router().

3. index.js
   
    This is the main file of the application and it represents the server itself. 
-----


### :joystick: Getting Started 
Follow the following steps to start the server
1. Clone the repository:
   ```
   git clone https://github.com/dohmeid/my-note-keeper.git
   ```

3. Install the required dependencies
   ```
   npm i express mongoose
   npm i --save-dev dotnet nodemon
   ```

4. Start the server using:
   ```
   npm run devStart
   ```
   or using:
   ```
   npm start
   ```
   

