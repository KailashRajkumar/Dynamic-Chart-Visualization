// Importing the AuthController
const AuthController = require('../controller/AuthController');
const express = require('express');

// Creating an instance of the Express Router
const router = express.Router();

// Defining the routes
router.post("/register", AuthController.register); // POST request for user registration
router.post('/login', AuthController.login); // POST request for user login

// Exporting the router
module.exports = router;
