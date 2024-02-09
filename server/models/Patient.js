//This file will contain the schema for the patients model. The schema should contain the following fields:
/**
 * firstName: String {required: true}
 * lastName: String {required: true}
 * dateOfBirth: Date {required: true}
 * address: String {required: true}
 * phone: String {required: true}
 * email: String
 * medicalHistory: String
 */



const mongoose = require('mongoose'); // Import Mongoose

// Create a schema for the patients model with the fields seen in the snippet above

const patientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
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
        type: String
    },
    medicalHistory: {
        type: String
    }
});

// Create a model for the patients schema
const Patient = mongoose.model('Patient', patientSchema);

// Export the patients model
module.exports = Patient; // Export the patients model




