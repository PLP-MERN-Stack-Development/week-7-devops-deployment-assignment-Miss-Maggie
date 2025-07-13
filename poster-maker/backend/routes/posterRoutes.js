const express = require('express');
const router = express.Router();

// Dummy POST route
router.post('/', (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  // Simulate successful creation
  res.status(201).json({ title, description });
});

module.exports = router;
