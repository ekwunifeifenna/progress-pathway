const mongoose = require('mongoose');

const TherapistSchema = new mongoose.Schema({
  firstName: { 
    type: String, 
    required: true 
},
  lastName: { 
    type: String, 
    required: true 
},
  phoneNumber: { 
    type: String, 
    required: true 
},
  email: { 
    type: String, 
    required: true 
},
  hoursWorked: { 
    type: Number, 
    required: true 
}
});

module.exports = mongoose.model('Therapist', TherapistSchema);