//This file will contain the appointment schema and model. The schema should contain the following fields:
/**
 * patientId: String {type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true}
 * therapistId: String {type: mongoose.Schema.Types.ObjectId, ref: 'Therapist', required: true}
 * date: Date {required: true}
 * time: String {required: true}
 * duration: Number {required: true}
 * location: String {required: true}
 * status: String {required: true}
 * 
 */

const mongoose = require('mongoose'); // Import Mongoose

// Create a schema for the appointment model with the fields seen in the snippet above
const appointmentSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    therapistId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Therapist',
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
    duration: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

// Create a model for the appointment schema
const Appointment = mongoose.model('Appointment', appointmentSchema);

// Export the appointment model
module.exports = Appointment; // Export the appointment model
