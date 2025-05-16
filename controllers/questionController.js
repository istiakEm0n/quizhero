const questionService = require('../services/questionService');

exports.getAllQuestions = async (req, res) => {
    try {       
        const questions = await questionService.getQuestions();
        res.json(questions); 
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
            message: "Resource not founds",
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};


