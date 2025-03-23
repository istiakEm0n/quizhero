const { Question } = require("../models"); 

// Service to fetch all questions from the database
exports.getQuestions = async () => {
  try {
    const questions = await Question.findAll(); 
    return questions; 
  } catch (error) {
    console.error("Error fetching questions:", error.message);
    throw new Error(error.message);
  }
};

exports.getQuestionById = async (question_id) => {
  try {
    const question = await Question.findByPk(question_id); 
    if (!question) {
      throw new Error("Question not found");
    }
    return question;
  } catch (error) {
    console.error("Error fetching question by ID:", error.message);
    throw new Error(error.message);
  }
};
