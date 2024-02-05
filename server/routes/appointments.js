/**
 * This file will contain the routes related to the appointment model.
 * The routes will be used to create, read, update, and delete appointments from the database.
 */

const express = require('express'); // Import express
const Appointment = require('../models/Appointment'); // Import the appointment model
const router = express.Router(); // Create a router

// Create a route to create a new appointment
/**
 * This route will be used to create a new appointment. 
 * The user will be able to create a new appointment using the patientId, therapistId, date, time, duration, location, and status
 */
router.post('/appointments', async (req, res) => {
    const appointment = new Appointment(req.body); // Create a new appointment
    try {
        await appointment.save(); // Save the appointment
        res.status(201).send(appointment); // Send the appointment in the response
    } catch (error) {
        res.status(400).send(error); // Send the error in the response
    }
});

// Create a route to get all appointments
/**
 * This route will be used to get all appointments. 
 * The user will be able to get all appointments from the database
 */
router.get('/appointments', async (req, res) => {
    try {
        const appointments = await Appointment.find(); // Find all appointments
        res.send(appointments); // Send the appointments in the response
    } catch (error) {
        res.status(500).send(error); // Send the error in the response
    }});

// Create a route to get a single appointment
/**
 * This route will be used to get a single appointment. 
 * The user will be able to get a single appointment using the appointment's id
 */

router.get('/appointments/:id', async (req, res) => {
    const _id = req.params.id; // Get the id
    try {
        const appointment = await Appointment.findById(_id); // Find the appointment by id
        if(!appointment) {
            return res.status(404).send(); // Send a 404 error if the appointment is not found
        }
        res.send(appointment); // Send the appointment in the response
    } catch (error) {
        res.status(500).send(error); // Send the error in the response
    }});

// Create a route to update a single appointment
/**
 * This route will be used to update a single appointment. 
 * The user will be able to update a single appointment using the appointment's id
 */

router.patch('/appointments/:id', async (req, res) => {
    const updates = Object.keys(req.body); // Get the updates
    const allowedUpdates = ['patientId', 'therapistId', 'date', 'time', 'duration', 'location', 'status']; // Define the allowed updates
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update)); // Check if the updates are valid
    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates'}); // Send an error if the updates are not valid
    }
    try {
        const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true}); // Find the appointment by id and update it
        if(!appointment) {
            return res.status(404).send(); // Send a 404 error if the appointment is not found
        }
        res.send(appointment); // Send the appointment in the response
    } catch (error) {
        res.status(400).send(error); // Send the error in the response
    }});

// Create a route to delete a single appointment
/**
 * This route will be used to delete a single appointment. 
 * The user will be able to delete a single appointment using the appointment's id
 */

router.delete('/appointments/:id', async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(req.params.id); // Find the appointment by id and delete it
        if(!appointment) {
            return res.status(404).send(); // Send a 404 error if the appointment is not found
        }
        res.send(appointment); // Send the appointment in the response
    } catch (error) {
        res.status(500).send(error); // Send the error in the response
    }});

// Export the router
module.exports = router; // Export the router
