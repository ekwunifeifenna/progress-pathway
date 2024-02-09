const mongoose = require('mongoose'); // Import Mongoose
const express = require('express'); // Import Express
const cors = require('cors'); // Import Cors

//import routes
const userRoutes = require('./routes/users');
const patientRoutes = require('./routes/patients');
const appointmentRoutes = require('./routes/appointments');
const billingRoutes = require('./routes/billings');
const payrollRoutes = require('./routes/payrolls');
const emrsRoutes = require('./routes/emrs');
const practiceManagementRoutes = require('./routes/practiceManagements');
const businessInsightsRoutes = require('./routes/businessInsights');

// Create an instance of Express
const app = express();

// Use middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS




// Connect to MongoDB
mongoose.connect(
    'mongodb+srv://ekwunifeifenna:BxHHezqzisya8KWd@progress-pathway.lvryuy2.mongodb.net/?retryWrites=true&w=majority', 
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});


// Use routes
app.use(userRoutes);
app.use(patientRoutes);
app.use(appointmentRoutes);
app.use(billingRoutes); 
app.use(payrollRoutes);
app.use(emrsRoutes);
app.use(practiceManagementRoutes);
app.use(businessInsightsRoutes);

// Start the server
app.listen(3001, () => {
    console.log('Server is running on port 3001');
}); // Start the server on port 3001

module.exports = app; // Export the app

