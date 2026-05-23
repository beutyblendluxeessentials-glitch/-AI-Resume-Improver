const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');

router.post('/improve', resumeController.improveResume);

module.exports = router;
