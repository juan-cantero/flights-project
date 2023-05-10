// db.js

const Sequelize = require('sequelize');

const sequelize = new Sequelize('flights', 'user', 'P@ssW0rd', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false, // disable created_at and updated_at columns for all models
  },
});

module.exports = sequelize;
