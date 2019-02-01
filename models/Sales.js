const sequelize = require('../dbConnection/connection');
const Sequelize = require('sequelize');
const User = require('./User');

const Sales = sequelize.define('Sales',{
    salesId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    particular:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    rate:{
        type:Sequelize.STRING,
        allowNull:false
    },
    remarks:{ type: Sequelize.STRING }
});

User.hasMany(Sales);
Sales.belongsTo( User );


module.exports = Sales;