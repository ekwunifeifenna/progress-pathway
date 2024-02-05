const mongoose = require('mongoose'); // Import Mongoose
const express = require('express'); // Import Express

mongoose.connect(
    'mongodb+srv://ekwunifeifenna:BxHHezqzisya8KWd@progress-pathway.lvryuy2.mongodb.net/?retryWrites=true&w=majority', 
    { useNewUrlParser: true, useUnifiedTopology: true }); // Connect to MongoDB
