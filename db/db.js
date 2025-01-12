const { Pool } = require('pg');

// PostgreSQL connection pool
const pool = new Pool({
    user: 'quizhero_owner',
    host: 'ep-super-silence-a1qlrjwf.ap-southeast-1.aws.neon.tech',
    database: 'quizhero',
    password: '9B2NzPQMOJAk',
    port: 5432,
    ssl: {
        rejectUnauthorized: false // Disable SSL certificate validation (for development)
    }
});

// Export the query method for database interactions
module.exports = {
    query: (text, params) => pool.query(text, params),
};
