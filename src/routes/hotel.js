const express = require('express');
const { hotelController } = require('../controllers');

const routes = express.Router();

routes.post('/new', hotelController.createHotel);

module.exports = routes;
