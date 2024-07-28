const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('campus_accreditation', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
