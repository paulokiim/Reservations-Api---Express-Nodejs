const models = require('../../model');

const { Hotel } = models;

const createHotel = (params) => {
  return Hotel.create(params);
};

const getHotel = (params) => {
  return Hotel.findOne({ where: params });
};

module.exports = {
  createHotel,
  getHotel,
};
