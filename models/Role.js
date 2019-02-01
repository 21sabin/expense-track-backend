const sequelize = require('../dbConnection/connection');
const Sequelize = require('sequelize')

const Role = sequelize.define('Role',{
  RoleId:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
  },
  RoleName:Sequelize.STRING
},{
    timestamps:false
});

module.exports = Role;
