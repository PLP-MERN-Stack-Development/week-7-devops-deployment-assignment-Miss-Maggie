const express = require('express');
const router = express.Router();
const templateController = require('../controllers/templateController');
const auth = require('../middleware/authMiddleware');

// Protect all template routes
router.post('/', auth, templateController.createTemplate);
router.get('/', templateController.getTemplates); // public, or add 'auth' if you want to protect
router.get('/:id', templateController.getTemplateById); // public, or add 'auth' if you want to protect
router.put('/:id', auth, templateController.updateTemplate);
router.delete('/:id', auth, templateController.deleteTemplate);

module.exports = router;