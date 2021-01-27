const express = require('express');
const { reservationController } = require('../controllers');
const { checkAuthentication } = require('../auth');

const routes = express.Router();

routes.post(
  '/new',
  checkAuthentication,
  reservationController.createReservation
);

module.exports = routes;