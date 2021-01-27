const express = require('express');
const { hotelController } = require('../controllers');

const routes = express.Router();

routes.post('/register', hotelController.createHotel);

module.exports = routes;
