//This file will contain the routes related to the payroll model. The routes will be used to create, read, update, and delete payrolls from the database.

const express = require('express'); // Import express
const Payroll = require('../models/Payroll'); // Import the payroll model
const router = express.Router(); // Create a router

// Create a route to create a new payroll
/**
 * This route will be used to create a new payroll. 
 * The user will be able to create a new payroll using the employeeId, amount, date, hoursWorked, status, hourlyRate, and totalPay
 */

router.post('/payrolls', async (req, res) => {
    const payroll = new Payroll(req.body); // Create a new payroll
    try {
        await payroll.save(); // Save the payroll
        res.status(201).send(payroll); // Send the payroll in the response
    } catch (error) {
        res.status(400).send(error); // Send the error in the response
    }});

// Create a route to get all payrolls
/**
 * This route will be used to get all payrolls. 
 * The user will be able to get all payrolls from the database
 */
router.get('/payrolls', async (req, res) => {
    try {
        const payrolls = await Payroll.find(); // Find all payrolls
        res.send(payrolls); // Send the payrolls in the response
    } catch (error) {
        res.status(500).send(error); // Send the error in the response
    }});

// Create a route to get a single payroll
/**
 * This route will be used to get a single payroll. 
 * The user will be able to get a single payroll using the payroll's id
 */
router.get('/payrolls/:id', async (req, res) => {
    const _id = req.params.id; // Get the id
    try {
        const payroll = await Payroll.findById(_id); // Find the payroll by id
        if(!payroll) {
            return res.status(404).send(); // Send a 404 error if the payroll is not found
        }
        res.send(payroll); // Send the payroll in the response
    } catch (error) {
        res.status(500).send(error); // Send the error in the response
    }});

// Create a route to update a single payroll
/**
 * This route will be used to update a single payroll. 
 * The user will be able to update a single payroll using the payroll's id
 */
router.patch('/payrolls/:id', async (req, res) => {
    const updates = Object.keys(req.body); // Get the updates
    const allowedUpdates = ['employeeId', 'amount', 'date', 'hoursWorked', 'status', 'hourlyRate', 'totalPay']; // Define the allowed updates
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update)); // Check if the updates are valid
    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates'}); // Send an error if the updates are not valid
    }
    try {
        const payroll = await Payroll.findById(req.params.id); // Find the payroll by id
        if(!payroll) {
            return res.status(404).send(); // Send a 404 error if the payroll is not found
        }
        updates.forEach((update) => payroll[update] = req.body[update]); // Update the payroll
        await payroll.save(); // Save the payroll
        res.send(payroll); // Send the payroll in the response
    } catch (error) {
        res.status(400).send(error); // Send the error in the response
    }});

// Create a route to delete a single payroll
/**
 * This route will be used to delete a single payroll. 
 * The user will be able to delete a single payroll using the payroll's id
 */
router.delete('/payrolls/:id', async (req, res) => {
    try {
        const payroll = await Payroll.findByIdAndDelete(req.params.id); // Find the payroll by id and delete it
        if(!payroll) {
            return res.status(404).send(); // Send a 404 error if the payroll is not found
        }
        res.send(payroll); // Send the payroll in the response
    } catch (error) {
        res.status(500).send(error); // Send the error in the response
    }});

module.exports = router; // Export the router
