/*
Use mongoose to create a schema and model for the user. 
The schema should contain the following fields:
username: String
password: String
email: String
role: String
*/

const mongoose = require('mongoose'); // Import Mongoose
const bcrypt = require('bcrypt'); // Import bcrypt
const jwt = require('jsonwebtoken'); // Import jsonwebtoken

// Create a schema for the user model with the fields seen in the snippet above
const userSchema = new mongoose.Schema({    
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    role: {
        type: String,
        required: [true, 'Role is required']
    }
});

// Create a pre-save hook to hash the password before saving the user to the database
//This makes sure that the password is hashed before it is saved to the database to ensure that the password is not stored in plain text

userSchema.pre('save', async function(next) {
    const user = this;
    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

// Create a method to generate a token for the user
//This method generates a token for the user using the user's id and a secret key. The token is used to authenticate the user when they make requests to the server

userSchema.methods.generateAuthToken = async function() {    
    const user = this; // Get the user
    const token = jwt.sign({_id: user._id.toString()}, 'secretkey');    // Generate a token for the user
    user.tokens = user.tokens.concat({ token });
    await user.save();

    return token;
}

// Create a method to find a user by their email and password
//This method finds a user by their email and password. It is used to authenticate the user when they log in

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email}); // Find the user by their email 
    if(!user) {
        throw new Error('Invalid login credentials');
    } 
    const isPasswordMatch = await bcrypt.compare(password, user.password); // Compare the password
    if(!isPasswordMatch) {
        throw new Error('Invalid login credentials');
    } 
    return user; // Return the user
}

// Create a model for the user using the schema
const User = mongoose.model('User', userSchema); 

module.exports = User; // Export the user model
