const sequelize = require('../dbConnection/connection');
const Sequelize = require('sequelize');
const Role = require('./Role');

const User = sequelize.define('User',{
  firstName : Sequelize.STRING,
  lastName : Sequelize.STRING,
  phoneNumber: Sequelize.STRING,
  email : Sequelize.STRING,
  imageName : Sequelize.STRING,
  password: Sequelize.STRING,
  // RoleId:{
  //   type:Sequelize.INTEGER,
  //   defaultValue:2,
  // }
});

User.belongsTo(Role,{ foreignKey:'RoleId' });//belongsto inserts foreignkey in source model;

module.exports = User;
