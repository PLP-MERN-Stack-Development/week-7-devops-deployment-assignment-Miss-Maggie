const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/templates', require('./template'));
router.use('/payment', require('./payment'));

module.exports = router; 