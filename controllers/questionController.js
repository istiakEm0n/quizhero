const questionService = require('../services/questionService');

// Controller to fetch all questions
exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await questionService.getQuestions();
        res.json(questions); // Respond with the list of questions
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};
