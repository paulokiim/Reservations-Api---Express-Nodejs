const express = require('express');
const { userController } = require('../controllers');

const routes = express.Router();

routes.post('/register', userController.create);
routes.get('/login', userController.login);

module.exports = routes;
