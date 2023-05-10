// Airplanes.js

const Sequelize = require('sequelize');
const sequelize = require('./db');
const Flights = require('./Flights');

const Airplanes = sequelize.define('airplanes', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  manufacturer: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  model: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
});

Airplanes.belongsTo(Flights);

module.exports = Airplanes;
