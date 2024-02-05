//This file contains the routes for the business insights. The routes should include the following:
/**
 * A route to add a new business insight
 * A route to get all business insights
 * A route to get a single business insight
 * A route to update a single business insight
 * A route to delete a single business insight
 * 
 */

const express = require('express'); // Import express
const BusinessInsight = require('../models/BusinessInsight'); // Import the business insight model
const router = express.Router(); // Create a router

// Create a route to create a new business insight
/**
 * This route will be used to create a new business insight. 
 * The user will be able to create a new business insight using the name, description, date, amount, and type
 */
router.post('/businessInsights', async (req, res) => {
    const businessInsight = new BusinessInsight(req.body); // Create a new business insight
    try {
        await businessInsight.save(); // Save the business insight
        res.status(201).send(businessInsight); // Send the business insight in the response
    } catch (error) {
        res.status(400).send(error); // Send the error in the response
    }});

// Create a route to get all business insights
/**
 * This route will be used to get all business insights. 
 * The user will be able to get all business insights from the database
 */
router.get('/businessInsights', async (req, res) => {
    try {
        const businessInsights = await BusinessInsight.find(); // Find all business insights
        res.send(businessInsights); // Send the business insights in the response
    } catch (error) {
        res.status(500).send(error); // Send the error in the response
    }});

// Create a route to get a single business insight
/**
 * This route will be used to get a single business insight. 
 * The user will be able to get a single business insight using the business insight's id
 */

router.get('/businessInsights/:id', async (req, res) => {
    const _id = req.params.id; // Get the id
    try {
        const businessInsight = await BusinessInsight.findById(_id); // Find the business insight by id
        if(!businessInsight) {
            return res.status(404).send(); // Send a 404 error if the business insight is not found
        } 
        res.send(businessInsight); // Send the business insight in the response
    } catch (error) {
        res.status(500).send(error ); // Send the error in the response 
    }});

// Create a route to update a single business insight
/**
 * This route will be used to update a single business insight. 
 * The user will be able to update a single business insight using the business insight's id
 */
router.patch('/businessInsights/:id', async (req, res) => {
    const updates = Object.keys(req.body); // Get the updates
    const allowedUpdates = ['name', 'description', 'date', 'amount', 'type']; // Define the allowed updates
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update)); // Check if the updates are valid
    if(!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' }); // Send a 400 error if the updates are invalid
    }
    try {
        const businessInsight = await BusinessInsight.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }); // Find and update the business insight
        if(!businessInsight) {
            return res.status(404).send(); // Send a 404 error if the business insight is not found
        }
        res.send(businessInsight); // Send the business insight in the response
    } catch (error) {
        res.status(400).send(error); // Send the error in the response
    }});

// Create a route to delete a single business insight
/**
 * This route will be used to delete a single business insight. 
 * The user will be able to delete a single business insight using the business insight's id
 */
router.delete('/businessInsights/:id', async (req, res) => {
    try {
        const businessInsight = await BusinessInsight.findByIdAndDelete(req.params.id); // Find and delete the business insight
        if(!businessInsight) {
            return res.status(404).send(); // Send a 404 error if the business insight is not found
        }
        res.send(businessInsight); // Send the business insight in the response
    } catch (error) {
        res.status(400).send(error); // Send the error in the response
    }});

module.exports = router; // Export the router
