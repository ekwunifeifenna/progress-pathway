const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userRoutes = require('./routes/users');
const patientRoutes = require('./routes/patients');
const appointmentRoutes = require('./routes/appointments');
const billingRoutes = require('./routes/billings');
const payrollRoutes = require('./routes/payrolls');
const emrsRoutes = require('./routes/emrs');
const practiceManagementRoutes = require('./routes/practiceManagements');
const businessInsightsRoutes = require('./routes/businessInsights');
const therapistRoutes = require('./routes/therapists');

const app = express();

app.use(cors());
app.use(express.json());

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

app.use('/api/users', userRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/billings', billingRoutes);
app.use('/api/payrolls', payrollRoutes);
app.use('/api/emrs', emrsRoutes);
app.use('/api/practiceManagements', practiceManagementRoutes);
app.use('/api/businessInsights', businessInsightsRoutes);
app.use('/api/therapists', therapistRoutes);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

module.exports = app;
