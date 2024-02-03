#Basic Quora Post Website
This is not a project, It's a basic implementation of a Quora-like platform where users can perform CRUD (Create, Read, Update, Delete) operations on posts. Unlike traditional implementations, this version operates entirely in-memory using an array as the data store.

Features
Create: Users can create new posts by sending a POST request to the /posts endpoint with the necessary data.
Read: Posts can be retrieved either individually by their ID or collectively by sending a GET request to the /posts endpoint.
Update: Existing posts can be updated by sending a PUT request to the /posts/{postId} endpoint with the updated data.
Delete: Users can delete posts by sending a DELETE request to the /posts/{postId} endpoint.
Technologies Used
Node.js: The backend server is built using Node.js, providing a scalable and efficient runtime environment for JavaScript code.
Express.js: Express.js is used to create the RESTful API endpoints and handle HTTP requests.
Getting Started
To get started with the project, follow these steps:

Clone this repository to your local machine.
Install Node.js if not already installed.
Navigate to the project directory in your terminal.
Install dependencies by running npm install.
Start the server by running npm start.
You can now interact with the API endpoints using a tool like Postman or by integrating them into your front-end application.
API Endpoints
POST /posts: Create a new post.
GET /posts: Retrieve all posts.
GET /posts/{postId}: Retrieve a specific post by ID.
PUT /posts/{postId}: Update an existing post.
DELETE /posts/{postId}: Delete a post.
