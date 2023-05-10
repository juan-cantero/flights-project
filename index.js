// index.js

const express = require('express');
const Flights = require('./Flights');
const Seats = require('./Seats');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/flights', async (req, res) => {
  try {
    const flight = await Flights.create(req.body);
    res.status(201).json(flight);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/flights/:id', async (req, res) => {
  try {
    const flight = await Flights.findByPk(req.params.id, { include: Seats });
    res.json(flight);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/flights/:id/seats', async (req, res) => {
  try {
    const flight = await Flights.findByPk(req.params.id);
    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }
    const seat = await Seats.create({ ...req.body, flightId: flight.id });
    res.status(201).json(seat);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
