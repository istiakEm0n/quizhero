const Question = require('../model/questionModel');

exports.getQuestions = async () => {
    try {
        const questions = await Question.findAll();
        return questions; 
      } catch (error) {
        console.error('Error fetching questions:', error.message);
        throw error; 
      }
};

exports.getQuestionById = async (id) => {
    try {
        const question = await Question.findByPk(id); 
        return question; 
      } catch (error) {
        console.error(`Error fetching question with ID ${id}:`, error.message);
        throw error; 
      }
};