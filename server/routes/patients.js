//This file will contain the routes for the patients model. The routes will be used to create, read, update, and delete patients from the database.

const express = require('express'); // Import express
const Patient = require('../models/Patient'); // Import the patient model
const router = express.Router(); // Create a router

// Create a route to create a new patient
/**
 * This route will be used to create a new patient. 
 * The user will be able to create a new patient using the firstName, lastName, dateOfBirth, address, phone, email, and medicalHistory
 */
router.post('/patients', async (req, res) => {
    const patient = new Patient(req.body); // Create a new patient
    try {
        await patient.save(); // Save the patient
        res.status(201).send(patient); // Send the patient in the response
    } catch (error) {
        res.status(400).send(error); // Send the error in the response
    }});

// Create a route to get all patients
/**
 * This route will be used to get all patients. 
 * The user will be able to get all patients from the database
 */
router.get('/patients', async (req, res) => {
    try {
        const patients = await Patient.find(); // Find all patients
        res.send(patients); // Send the patients in the response
    } catch (error) {
        res.status(500).send(error); // Send the error in the response
    }});

// Create a route to get a single patient
/**
 * This route will be used to get a single patient. 
 * The user will be able to get a single patient using the patient's id
 */
router.get('/patients/:id', async (req, res) => {
    const _id = req.params.id; // Get the id
    try {
        const patient = await Patient.findById(_id); // Find the patient by id
        if(!patient) {
            return res.status(404).send(); // Send a 404 error if the patient is not found
        } 
        res.send(patient); // Send the patient in the response
    } catch (error) { 
        res .status(500 ).send(error ); // Send the error in the response 
    } }); 

// Create a route to update a single patient
/**
 * This route will be used to update a single patient. 
 * The user will be able to update a single patient using the patient's id
 */
router.patch('/patients/:id', async (req, res) => {
    const updates = Object.keys(req.body); // Get the updates
    const allowedUpdates = ['firstName', 'lastName', 'dateOfBirth', 'address', 'phone', 'email', 'medicalHistory']; // Define the allowed updates
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update)); // Check if the updates are valid
    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates!'}); // Send a 400 error if the updates are invalid
    }
    const _id = req.params.id; // Get the id
    try {
        const patient = await Patient.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true}); // Find and update the patient
        if(!patient) {
            return res.status(404).send(); // Send a 404 error if the patient is not found
        }
        res.send(patient); // Send the patient in the response
    } catch (error) {
        res.status(400).send(error); // Send the error in the response
    }});

// Create a route to delete a single patient
/**
 * This route will be used to delete a single patient. 
 * The user will be able to delete a single patient using the patient's id
 */
router.delete('/patients/:id', async (req, res) => {
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id); // Find and delete the patient
        if(!patient) {
            return res.status(404).send(); // Send a 404 error if the patient is not found
        }
        res.send(patient); // Send the patient in the response
    } catch (error) {
        res.status(500).send(error); // Send the error in the response
    }});

module.exports = router; // Export the router

