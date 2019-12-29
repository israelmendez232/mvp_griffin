const config = require('../../../config.json');

module.exports = {
    dialect: 'postgres',
    host: config.db.host,
    username: config.db.user,
    password: config.db.pass,
    database: config.db.db,
    define: {
        timestamp: true,
        underscore: true
    },
};
