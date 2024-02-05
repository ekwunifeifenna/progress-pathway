//This file will contain the practice management schema and model. The schema should contain the following fields:
/**
 * name: String {required: true}
 * address: String {required: true}
 * phone: String {required: true}
 * email: String {required: true}
 * website: String {required: true}
 * 
 */

const mongoose = require('mongoose'); // Import Mongoose

// Create a schema for the practice management model with the fields seen in the snippet above
const practiceManagementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    }
});

// Create a model for the practice management schema
const PracticeManagement = mongoose.model('PracticeManagement', practiceManagementSchema);

// Export the practice management model
module.exports = PracticeManagement; // Export the practice management model
