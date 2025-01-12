const express = require('express');
const questionController = require('../controllers/questionController');

const router = express.Router();

// Route to fetch all questions
router.get('/', questionController.getAllQuestions);
router.get('/:id', questionController.getQuestionById);

module.exports = router;
