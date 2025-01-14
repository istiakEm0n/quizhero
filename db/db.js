const { Pool } = require('pg');

// PostgreSQL connection pool
const pool = new Pool({
    user: 'quizhero_owner',
    host: 'ep-super-silence-a1qlrjwf.ap-southeast-1.aws.neon.tech',
    database: 'quizhero',
    password: '9B2NzPQMOJAk',
    port: 5432,
    ssl: {
        rejectUnauthorized: false 
    }
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
