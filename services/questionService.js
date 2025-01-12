const db = require('../db/db');

// Service to fetch all questions from the database
exports.getQuestions = async () => {
    const query = 'SELECT * FROM question';
    const result = await db.query(query);
    return result.rows; // Return rows to the controller
};

exports.getQuestionById = async (id) => {
    const query = 'SELECT * FROM question WHERE question_id = $1';
    const values = [id];
    const result = await db.query(query, values);
    return result.rows[0];
};