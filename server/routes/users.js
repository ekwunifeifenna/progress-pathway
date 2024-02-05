// This file will create routes relaed to the user model.

// The routes will be used to create, read, update, and delete users from the database.
const express = require('express'); // Import express
const User = require('../models/User'); // Import the user model
const router = express.Router(); // Create a router

// Create a route to create a new user
router.post('/users', async (req, res) => {
    const user = new User(req.body); // Create a new user
    try {
        await user.save(); // Save the user
        const token = await user.generateAuthToken(); // Generate a token for the user
        res.status(201).send({user, token}); // Send the user and token in the response
    } catch (error) {
        res.status(400).send(error); // Send the error in the response
    }
});

// Create a route to login a user
//This route will be used to login a user. The user will be able to login using their email and password
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password); // Find the user by their email and password
        const token = await user.generateAuthToken(); // Generate a token for the user
        res.send({user, token}); // Send the user and token in the response
    } catch (error) {
        res.status(400).send(error); // Send the error in the response
    }
});

// Create a route to get the current user
//This route will be used to get the current user. The user will be able to get their own user information
router.get('/users/me', async (req, res) => {
    res.send(req.user); // Send the user in the response
});

// Create a route to update the current user
//This route will be used to update the current user. The user will be able to update their username, password, email, and role
router.patch('/users/me', async (req, res) => {
    const updates = Object.keys(req.body); // Get the updates
    const allowedUpdates = ['username', 'password', 'email', 'role']; // Define the allowed updates
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update)); // Check if the updates are valid
    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates'}); // Send an error if the updates are not valid
    }
    try {
        updates.forEach((update) => req.user[update] = req.body[update]); // Update the user
        await req.user.save(); // Save the user
        res.send(req.user); // Send the user in the response
    } catch (error) {
        res.status(400).send(error); // Send the error in the response
    }
});

// Create a route to delete the current user
//This route will be used to delete the current user. The user will be able to delete their account
router.delete('/users/me', async (req, res) => {
    try {
        await req.user.remove(); // Remove the user
        res.send(req.user); // Send the user in the response
    } catch (error) {
        res.status(500).send(error); // Send the error in the response
    }
});

// Export the router
module.exports = router;
