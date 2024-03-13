const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser'); // Import body-parser module

// Parse JSON request bodies
app.use(express.json());

// Import the function for MongoDB connection from database.js
const { mongoDbConnection } = require('./database');

// Call the mongoDbConnection function to establish the connection
mongoDbConnection();

// Add your CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://user-registeration-git-main-ushas-projects-d69436a1.vercel.app');
    // Other CORS headers if needed
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // Allow cookies to be sent from the client
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    next();
  });

// Define your routes and middleware
app.use('/api', require('./Routers/createUser'));

// Start the Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
