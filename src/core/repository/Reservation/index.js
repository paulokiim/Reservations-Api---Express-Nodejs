const models = require('../../model');

const { Reservation } = models;
const { Op } = models.Sequelize;

const create = (params) => {
	return Reservation.create(params);
};

const checkOverlap = (params) => {
	return Reservation.findAll({
		where: {
			...params,
			fromDate: {
				[Op.gte]: params.fromDate,
			},
			toDate: {
				[Op.lte]: params.toDate,
			},
		},
	});
};

const get = (params) => {
	return Reservation.findOne({ where: params });
};

const cancel = (params, whereParams) =>
	Reservation.update(params, { where: whereParams, returning: true });

module.exports = {
	create,
	checkOverlap,
	get,
	cancel,
};
