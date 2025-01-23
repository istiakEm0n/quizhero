const { Pool } = require('pg');
require('dotenv').config(); 
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED === 'true', 
    },
});
const close = async () => {
    try {
        await pool.end();
        console.log('Database connection pool closed.');
    } catch (error) {
        console.error('Error closing database connection pool:', error.message);
        throw error;
    }
};
module.exports = {
    query: (text, params) => pool.query(text, params),
};
