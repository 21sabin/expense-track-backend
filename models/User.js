const sequelize = require('../dbConnection/connection');
const Sequelize = require('sequelize')

const User = sequelize.define('User',{
  firstName : Sequelize.STRING,
  lastName : Sequelize.STRING,
  phoneNumber: Sequelize.STRING,
  email : Sequelize.STRING,
  imageUri : Sequelize.STRING,
  password: Sequelize.STRING
});

module.exports = {
  User
};
