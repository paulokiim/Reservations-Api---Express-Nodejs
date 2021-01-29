const User = require('./User');
const Hotel = require('./Hotel');
const Reservation = require('./Reservation');

module.exports = {
	userRepository: User,
	hotelRepository: Hotel,
	reservationRepository: Reservation,
};
