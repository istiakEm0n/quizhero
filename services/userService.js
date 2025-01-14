const db = require('../db/db')

exports.registerUser= async(userId, userName) =>{
    try{
        const existingUserQuery = 'SELECT * FROM users WHERE user_id = $1';
    const existingUserResult = await db.query(existingUserQuery, [userId]);
    if(existingUserResult.rows.length > 0){
        throw new Error('User aready exists');
        
    }
    const insertUserQuery = 'INSERT INTO users (user_id, username) VALUES ($1, $2) RETURNING *';
        const newUserResult = await db.query(insertUserQuery, [userId, userName]);

        return newUserResult.rows[0];
    }
    catch (error) {
        throw new Error(`Error registering user: ${error.message}`);
    }
}