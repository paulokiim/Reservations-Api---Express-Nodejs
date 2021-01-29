const User = require('./User');
const Hotel = require('./Hotel');
const Reservation = require('./Reservation');

module.exports = {
	userController: User,
	hotelController: Hotel,
	reservationController: Reservation,
};
