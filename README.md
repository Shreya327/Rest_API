# RESTful API with Node.js and MongoDB

This is a simple RESTful API built using **Node.js**, **Express.js**, and **MongoDB**. It allows users to perform CRUD (Create, Read, Update, Delete) operations on subscribers.

## Features
- Create a new subscriber
- Retrieve all subscribers
- Retrieve a specific subscriber by ID
- Update a subscriber
- Delete a subscriber

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose ORM)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/node-rest-api.git
   cd node-rest-api
   ```
2. Install dependencies
```
npm install express mongoose 
```
3. Start MongoDB (Ensure MongoDB is installed and running on port 27017 by default):
```
mongod
```
4. Create a .env file and add your MongoDB connection string:
```
DATABASE_URL=mongodb://localhost/subscribers
```
5. Start the server:
```
npm start
```
The API will run on http://localhost:3000/.

## API Endpoints

+--------+------------------+---------------------------+
| Method | Endpoint         | Description               |
+--------+------------------+---------------------------+
| GET    | /subscribers     | Get all subscribers       |
| GET    | /subscribers/:id | Get a subscriber by ID   |
| POST   | /subscribers     | Create a new subscriber  |
| PATCH  | /subscribers/:id | Update subscriber by ID  |
| DELETE | /subscribers/:id | Delete subscriber by ID  |
+--------+------------------+---------------------------+

