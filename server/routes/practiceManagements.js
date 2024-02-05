//This file will contain the routes for the practice management model. The routes should contain the following:
/**
 * A route to get all practice management details
 * A route to update practice management details
 * 
 */

const express = require('express'); // Import express
const PracticeManagement = require('../models/PracticeManagement'); // Import the practice management model
const router = express.Router(); // Create a router

// Create a route to get all practice management details
/**
 * This route will be used to get all practice management details. 
 * The user will be able to get all practice management details from the database
 */
router.get('/practiceManagements', async (req, res) => {
    try {
        const practiceManagements = await PracticeManagement.find(); // Find all practice management details
        res.send(practiceManagements); // Send the practice management details in the response
    } catch (error) {
        res.status(500).send(error); // Send the error in the response
    }});

// Create a route to update practice management details
/**
 * This route will be used to update practice management details. 
 * The user will be able to update practice management details using the practice management's id
 */
router.patch('/practiceManagements/:id', async (req, res) => {
    const updates = Object.keys(req.body); // Get the updates
    const allowedUpdates = ['practiceName', 'address', 'city', 'state', 'zipCode', 'phone', 'fax', 'email', 'website']; // Define the allowed updates
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update)); // Check if the updates are valid
    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates!'}); // Send a 400 error if the updates are invalid
    }
    const _id = req.params.id; // Get the id
    try {
        const practiceManagement = await PracticeManagement.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true}); // Find and update the practice management details
        if(!practiceManagement) {
            return res.status(404).send(); // Send a 404 error if the practice management details are not found
        }
        res.send(practiceManagement); // Send the practice management details in the response
    } catch (error) {
        res.status(400).send(error); // Send the error in the response
    }});

module.exports = router; // Export the router
