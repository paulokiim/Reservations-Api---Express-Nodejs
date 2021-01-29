const express = require('express');
const { reservationController } = require('../controllers');
const { checkAuthentication } = require('../auth');

const routes = express.Router();

routes.post('/new', checkAuthentication, reservationController.create);

routes.put('/cancel', checkAuthentication, reservationController.cancel);

module.exports = routes;
