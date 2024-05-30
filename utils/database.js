const Sequelize = require('sequelize');

const sequelize = new Sequelize("expense","root","Prateek@my2000", {
  dialect: 'mysql',
  host:'localhost'
});

module.exports = sequelize;