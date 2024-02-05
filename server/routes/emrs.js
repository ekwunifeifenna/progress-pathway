//This file will contain the routes for the electronic medical record model. The routes should include the following:
/**
 * A route to add a new electronic medical record
 * A route to get all electronic medical records
 * A route to get a single electronic medical record
 * A route to update a single electronic medical record
 * A route to delete a single electronic medical record
 * 
 */

const express = require('express'); // Import express
const Emr = require('../models/Emr'); // Import the electronic medical record model
const router = express.Router(); // Create a router

// Create a route to create a new electronic medical record
/**
 * This route will be used to create a new electronic medical record. 
 * The user will be able to create a new electronic medical record using the patientId, date, time, type, notes, progress, and prescription
 */
router.post('/emrs', async (req, res) => {
    const emr = new Emr(req.body); // Create a new electronic medical record
    try {
        await emr.save(); // Save the electronic medical record
        res.status(201).send(emr); // Send the electronic medical record in the response
    } catch (error) {
        res.status(400).send(error); // Send the error in the response
    }});

// Create a route to get all electronic medical records
/**
 * This route will be used to get all electronic medical records. 
 * The user will be able to get all electronic medical records from the database
 */
router.get('/emrs', async (req, res) => {
    try {
        const emrs = await Emr.find(); // Find all electronic medical records
        res.send(emrs); // Send the electronic medical records in the response
    } catch (error) {
        res.status(500).send(error); // Send the error in the response
    }});

// Create a route to get a single electronic medical record
/**
 * This route will be used to get a single electronic medical record. 
 * The user will be able to get a single electronic medical record using the electronic medical record's id
 */
router.get('/emrs/:id', async (req, res) => {
    const _id = req.params.id; // Get the id
    try {
        const emr = await Emr.findById(_id); // Find the electronic medical record by id
        if(!emr) {
            return res.status(404).send(); // Send a 404 error if the electronic medical record is not found
        }
        res.send(emr); // Send the electronic medical record in the response
    } catch (error) {
        res.status(500).send(error); // Send the error in the response
    }});

// Create a route to update a single electronic medical record
/**
 * This route will be used to update a single electronic medical record. 
 * The user will be able to update a single electronic medical record using the electronic medical record's id
 */
router.patch('/emrs/:id', async (req, res) => {
    const updates = Object.keys(req.body); // Get the updates
    const allowedUpdates = ['patientId', 'date', 'time', 'type', 'notes', 'progress', 'prescription']; // Define the allowed updates
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update)); // Check if the updates are valid
    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates'}); // Send an error if the updates are not valid
    }
    try {
        const emr = await Emr.findById(req.params.id); // Find the electronic medical record by id
        updates.forEach((update) => emr[update] = req.body[update]); // Update the electronic medical record
        await emr.save(); // Save the electronic medical record
        res.send(emr); // Send the electronic medical record in the response
    } catch (error) {
        res.status(400).send(error); // Send the error in the response
    }});

// Create a route to delete a single electronic medical record
/**
 * This route will be used to delete a single electronic medical record. 
 * The user will be able to delete a single electronic medical record using the electronic medical record's id
 */
router.delete('/emrs/:id', async (req, res) => {
    try {
        const emr = await Emr.findByIdAndDelete(req.params.id); // Find and delete the electronic medical record by id
        if(!emr) {
            return res.status(404).send(); // Send a 404 error if the electronic medical record is not found
        }
        res.send(emr); // Send the electronic medical record in the response
    } catch (error) {
        res.status(500).send(error); // Send the error in the response
    }});

module.exports = router; // Export the router
