//This file will contain the billing schema and model. The schema should contain the following fields:
/**
 * appointmentId: String {type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true}
 * amount: Number {required: true}
 * status: String {required: true}
 * date: Date {required: true}
 */

const mongoose = require('mongoose'); // Import Mongoose

// Create a schema for the billing model with the fields seen in the snippet above
const billingSchema = new mongoose.Schema({
    appointmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

// Create a model for the billing schema
const Billing = mongoose.model('Billing', billingSchema);

// Export the billing model
module.exports = Billing; // Export the billing model
