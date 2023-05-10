// sync.js

const sequelize = require('./db');
const Flights = require('./Flights');
const Seats = require('./Seats');
const Boarding = require('./Boarding');
const Airplanes = require('./Airplanes');

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log('Tables created successfully!');
  } catch (error) {
    console.error('Error creating tables: ', error);
  }
})();
