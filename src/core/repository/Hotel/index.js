const models = require('../../model');

const { Hotel } = models;

const create = (params) => {
	return Hotel.create(params);
};

const get = (params) => {
	return Hotel.findOne({ where: params });
};

const getAll = (params) => {
	return Hotel.findAll({ where: params });
};

module.exports = {
	create,
	get,
};
