// Boarding.js

const Sequelize = require('sequelize');
const sequelize = require('./db');
const Flights = require('./Flights');

const Boarding = sequelize.define('boarding', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  boarding_time: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

Boarding.belongsTo(Flights);

module.exports = Boarding;
