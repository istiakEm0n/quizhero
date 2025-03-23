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
exports.getQuestionById = async (req, res) => {
    try {
        const question = await questionService.getQuestionById(req.params.id);
        if(question){
            res.json(question);
            return;
        }
        
        res.status(404).json({
            success: false,
            message: "Resource not found",
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

