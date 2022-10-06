const Sequelize=require('sequelize');

const Company = (sequelize) => {
    sequelize.define('Company',{
        nombreConsola: Sequelize.STRING
    });
}

module.exports = Company;