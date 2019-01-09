const Sequelize = require('sequelize');
const config = require('../config');
const sequelize = new Sequelize(config.mysql.database, config.mysql.username,config.mysql.password, {
  host: config.mysql.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  operatorsAliases: false
});

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created! if table exist in db it deletes and creates new table if force property is enabled`)
  })

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
