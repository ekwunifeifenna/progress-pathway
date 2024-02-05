//This file contains the electronic medical record schema and model. The schema should contain the following fields:
/**
 * patientId: String {type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true}
 * date: Date {required: true}
 * time: String {required: true}
 * type: String {required: true}
 * notes: String {required: true}
 * progress: String {required: true}
 * prescription: String {required: true}
 * 
 */

const mongoose = require('mongoose'); // Import Mongoose

// Create a schema for the electronic medical record model with the fields seen in the snippet above
const emrSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
    progress: {
        type: String,
        required: true
    },
    prescription: {
        type: String,
        required: true
    }
});

// Create a model for the electronic medical record schema
const Emr = mongoose.model('Emr', emrSchema);

// Export the electronic medical record model
module.exports = Emr; // Export the electronic medical record model
