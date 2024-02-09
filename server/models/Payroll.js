//This file will contain the payroll schema and model. The schema should contain the following fields:
/**
 * employeeId: String {type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true}
 * amount: Number {required: true}
 * date: Date {required: true}
 * hoursWorked: Number {required: true}
 * status: String {required: true}
 * hourlyRate: Number {required: true}
 * totalPay: Number {required: true}
 */

const mongoose = require('mongoose'); // Import Mongoose

// Create a schema for the payroll model with the fields seen in the snippet above
const payrollSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    amount: {
        type: Number, 
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    hoursWorked: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    hourlyRate: {
        type: Number,
        required: true
    },
    totalPay: {
        type: Number,
        required: true
    }
});

// Create a model for the payroll schema
const Payroll = mongoose.model('Payroll', payrollSchema);

// Export the payroll model
module.exports = Payroll; // Export the payroll model
