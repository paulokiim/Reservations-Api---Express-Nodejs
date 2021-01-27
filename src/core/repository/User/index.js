const models = require('../../model');

const { User } = models;

const createUser = (params) => {
  return User.create(params);
};

const getUser = (params) => {
  return User.findOne({ where: params });
};

module.exports = {
  createUser,
  getUser,
};
