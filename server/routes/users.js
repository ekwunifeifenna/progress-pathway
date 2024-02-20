const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/auth'); // Import your authentication middleware

const {check, validationResult} = require('express-validator');

// Create a route to create a new user
router.post('/signup', async (req, res) => {
  // try {
  //   const user = new User(req.body);
  //   await user.save();
  //   const token = await user.generateAuthToken();
  //   res.status(201).send({ user, token });
  // } catch (error) {
  //   res.status(400).send(error);
  // }
  User.create(req.body)
  .then(User => res.json(User))
  .catch(err => res.status(400).json('Error: ' + err));
  
});



// Create a route to login a user
router.post('/login', async (req, res) => {
  // console.log(req.body);
  // try {
  //   console.log(req.body); // Log the request body
  //   const user = await User.findByCredentials(req.body.email, req.body.password);
  //   const token = await user.generateAuthToken();
  //   res.send({ user, token });
  // } catch (error) {
  //   res.status(400).send({message: 'Invalid email or password'});
  // }

  const {email, password} = req.body;
  User.findOne({email: email})
  .then(user => {
    if(user) {
      if(user.password === password) {
        res.json('success');
      } else {
        res.json('Invalid email or password');
      }
    } else {
      res.json('No record exists');
    }
    
  })
});

// Create a route to get the current user
router.get('/users/me', auth, async (req, res) => {
  res.send(req.user);
});

// Create a route to update the current user
router.patch('/users/me', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['username', 'password', 'email', 'role'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates' });
  }
  try {
    updates.forEach((update) => req.user[update] = req.body[update]);
    await req.user.save();
    res.send(req.user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Create a route to delete the current user
router.delete('/users/me', auth, async (req, res) => {
  try {
    await req.user.remove();
    res.send(req.user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
