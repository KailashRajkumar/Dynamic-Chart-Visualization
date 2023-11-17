// Importing required packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Importing routes
const AuthRoute = require('./routes/AuthRoute');

mongoose.set('strictQuery', true);

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/login_app')
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  })
  
  // Creating an instance of Express
  const app = express();
  // Enabling Cross-Origin Resource Sharing (CORS)
  app.use(cors());
  // Parsing request bodies as JSON
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
  // adding headers to allow cross-origin requests
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
  
  // Defining the port on which the server will run
  const PORT = 5000;
  
  // Starting the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
  // Using the AuthRoute for handling authentication-related routes
  app.use(AuthRoute);


