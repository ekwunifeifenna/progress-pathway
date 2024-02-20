const express = require('express');
const router = express.Router();
const Therapist = require('../models/Therapist');

// Create a new therapist
router.post('/', async (req, res) => {
  try {
    const therapist = new Therapist(req.body);
    const result = await therapist.save();
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update a therapist
router.put('/:id', async (req, res) => {
  try {
    const therapist = await Therapist.findByIdAndUpdate(req.params.id, req.body);
    if (!therapist) res.status(404).send("No item found");
    else res.status(200).send(therapist);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a therapist
router.delete('/:id', async (req, res) => {
  try {
    const therapist = await Therapist.findByIdAndRemove(req.params.id);
    if (!therapist) res.status(404).send("No item found");
    else res.status(200).send(therapist);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;