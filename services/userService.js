
const db = require('../db/db');
const { v4: uuidv4 } = require('uuid'); // Generates unique UUID for user_id

exports.registerUser = async (userName) => {
    try {
        const userId = uuidv4();

        const checkUser = await db.query('SELECT * FROM users WHERE user_name = $1', [userName]);
        if (checkUser.rows.length > 0) {
            throw new Error('Username already taken');
        }

        const result = await db.query(
            'INSERT INTO users (user_id, user_name) VALUES ($1, $2) RETURNING *',
            [userId, userName]
        );

        return result.rows[0]; // Return the new user details
    } catch (error) {
        console.error('Error registering user:', error.message);
        throw new Error(error.message);
    }
};
