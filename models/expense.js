const Sequelize = require('sequelize');

const sequelize = require('../utils/database');
const Expense=sequelize.define('expense',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    amount:Sequelize.NUMERIC,
    description:Sequelize.STRING,
    category:Sequelize.STRING
});

module.exports=Expense;