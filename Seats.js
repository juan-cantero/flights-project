// Seats.js

const Sequelize = require('sequelize');
const sequelize = require('./db');
const Flights = require('./Flights');

const Seats = sequelize.define('seats', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  seat_number: {
    type: Sequelize.STRING(5),
    allowNull: false,
  },
});

Seats.belongsTo(Flights);

module.exports = Seats;
