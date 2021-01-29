const express = require('express');
const { hotelController } = require('../controllers');

const routes = express.Router();

routes.post('/new', hotelController.create);
routes.get('/all', hotelController.getAll);

module.exports = routes;
