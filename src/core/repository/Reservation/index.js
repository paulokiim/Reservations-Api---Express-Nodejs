const models = require('../../model');

const { Reservation } = models;
const { Op } = models.Sequelize;

const createReservation = (params) => {
  return Reservation.create(params);
};

const checkOverlap = (params) => {
  return Reservation.findAll({
    where: {
      hotelUid: params.hotelUid,
      fromDate: {
        [Op.gte]: params.fromDate,
      },
      toDate: {
        [Op.lte]: params.toDate,
      },
    },
  });
};

const getReservation = (params) => {
  return Reservation.findOne({ where: params });
};

const cancelReservation = (params) => Reservation.update();

module.exports = {
  createReservation,
  checkOverlap,
  getReservation,
};
