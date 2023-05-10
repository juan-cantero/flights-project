// Flights.js

const Sequelize = require('sequelize');
const sequelize = require('./db');

const Flights = sequelize.define('flights', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  flight_number: {
    type: Sequelize.STRING(10),
    allowNull: false,
  },
  from_location: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  to_location: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
});

module.exports = Flights;
