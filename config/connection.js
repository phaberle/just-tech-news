const Sequalize = require('sequelize');
require('dotenv').config();

//create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequalize('just_tech_news', 'techuser', 'techuser',{
    host:'localhost',
    dialect: 'mysql',
    port: '3306',
    logging:false //<-- TURN OFF VERBOSE SQL LOGGING!!!
});

module.exports= sequelize;