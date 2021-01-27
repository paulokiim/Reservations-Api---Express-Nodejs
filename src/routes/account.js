const express = require('express');
const { userController } = require('../controllers');

const routes = express.Router();

routes.post('/register', userController.createUser);
routes.get('/login', userController.loginUser);

module.exports = routes;
