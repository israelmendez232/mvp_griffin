const config = require('../../../config.json');

module.exports = {
    dialect: 'postgres',
    host: config.db_dev.host,
    username: config.db_dev.user,
    password: config.db_dev.pass,
    database: config.db_dev.db,
    define: {
        timestamp: true,
        underscore: true
    },
};
