const e = require('express');
const Sequalize = require('sequelize');
require('dotenv').config();


//Heroku
// let sequelize;
// if (process.env.JAWSDB_URL) {
//     sequalize = new Sequalize(process.env.JAWSDB_URL);
// } else {
//     sequelize = new Sequalize(process.env.DB_NAME, process.env.DB_USER.process.env.DB_Password, {
//         host: 'localhost',
//         dialect: 'mysql',
//         port: 3306
//     });
// }



 //local
//create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequalize('just_tech_news_db', 'techUser', '{tzC]h}!]3_8)f"q',{
    host:'localhost',
    dialect: 'mysql',
    port: '3306',
    logging:false //<-- TURN OFF VERBOSE SQL LOGGING!!!
});


module.exports = sequelize;