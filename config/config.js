require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DB_USER || 'vishal',
        password: process.env.DB_PASS || null,
        database: process.env.DB_NAME || 'healthcare_db',
        host: process.env.DB_HOST || '127.0.0.1',
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres'
    },

};
