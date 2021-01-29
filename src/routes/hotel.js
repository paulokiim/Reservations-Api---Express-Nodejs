const express = require('express');
const { hotelController } = require('../controllers');

const routes = express.Router();

routes.post('/new', hotelController.create);
routes.get('/availables', hotelController.getAvailables);

module.exports = routes;
