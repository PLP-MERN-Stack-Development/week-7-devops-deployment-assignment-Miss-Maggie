const mongoose = require('mongoose');
const Poster = require('../models/Poster');

const posterSchema = new mongoose.Schema({
  title: String,
  description: String,
});

router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }

    const poster = await Poster.create({ title, description });
    res.status(201).json(poster);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = mongoose.model('Poster', posterSchema);
