//This file contains the business insight schema and model. The schema should contain the following fields:
/**
 * name: String {required: true}
 * description: String {required: true}
 * date: Date {required: true}
 * amount: Number {required: true}
 * type: String {required: true}
 * 
 */

const mongoose = require('mongoose'); // Import Mongoose

// Create a schema for the business insight model with the fields seen in the snippet above
const businessInsightSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

// Create a model for the business insight schema
const BusinessInsight = mongoose.model('BusinessInsight', businessInsightSchema);

// Export the business insight model
module.exports = BusinessInsight; // Export the business insight model
