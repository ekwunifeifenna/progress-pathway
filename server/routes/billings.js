//This file will contain the routes related to the billing model.
//The routes will be used to create, read, update, and delete billings from the database.

const express = require('express'); // Import express
const Billing = require('../models/Billing'); // Import the billing model
const router = express.Router(); // Create a router

// Create a route to create a new billing
/**
 * This route will be used to create a new billing. 
 * The user will be able to create a new billing using the appointmentId, amount, status, and date
 */
router.post('/billings', async (req, res) => {
    const billing = new Billing(req.body); // Create a new billing
    try {
        await billing.save(); // Save the billing
        res.status(201).send(billing); // Send the billing in the response
    } catch (error) {
        res.status(400).send(error); // Send the error in the response
    }});

// Create a route to get all billings
/**
 * This route will be used to get all billings. 
 * The user will be able to get all billings from the database
 */
router.get('/billings', async (req, res) => {
    try {
        const billings = await Billing.find(); // Find all billings
        res.send(billings); // Send the billings in the response
    } catch (error) {
        res.status(500).send(error); // Send the error in the response
    }});

// Create a route to get a single billing
/**
 * This route will be used to get a single billing. 
 * The user will be able to get a single billing using the billing's id
 */
router.get('/billings/:id', async (req, res) => {
    const _id = req.params.id; // Get the id
    try {
        const billing = await Billing.findById(_id); // Find the billing by id
        if(!billing) {
            return res.status(404).send(); // Send a 404 error if the billing is not found
        }
        res.send(billing); // Send the billing in the response
    } catch (error) {
        res.status(500).send(error); // Send the error in the response
    }});

// Create a route to update a single billing
/**
 * This route will be used to update a single billing. 
 * The user will be able to update a single billing using the billing's id
 */

router.patch('/billings/:id', async (req, res) => {
    const updates = Object.keys(req.body); // Get the updates
    const allowedUpdates = ['appointmentId', 'amount', 'status', 'date']; // Define the allowed updates
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update)); // Check if the updates are valid
    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates'}); // Send an error if the updates are not valid
    }
    try {
        const billing = await Billing.findById(req.params.id); // Find the billing by id
        if(!billing) {
            return res.status(404).send(); // Send a 404 error if the billing is not found
        }
        updates.forEach((update) => billing[update] = req.body[update]); // Update the billing
        await billing.save(); // Save the billing
        res.send(billing); // Send the billing in the response
    } catch (error) {
        res.status(400).send(error); // Send the error in the response
    }});

// Create a route to delete a single billing
/**
 * This route will be used to delete a single billing. 
 * The user will be able to delete a single billing using the billing's id
 */
router.delete('/billings/:id', async (req, res) => {
    try {
        const billing = await Billing.findByIdAndDelete(req.params.id); // Find and delete the billing by id
        if(!billing) {
            return res.status(404).send(); // Send a 404 error if the billing is not found
        }
        res.send(billing); // Send the billing in the response
    } catch (error) {
        res.status(500).send(error); // Send the error in the response
    }});


// Export the router
module.exports = router; // Export the router
