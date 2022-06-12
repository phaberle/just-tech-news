const Sequalize = require('sequelize');
require('dotenv').config();

//create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequalize('just_tech_news_db', 'techUser', '{tzC]h}!]3_8)f"q',{
    host:'localhost',
    dialect: 'mysql',
    port: '3306'
});

module.exports= sequelize;