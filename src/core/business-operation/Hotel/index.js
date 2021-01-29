const uuid = require('uuid').v4;
const momentTz = require('moment-timezone');
const { hotelRepository, reservationRepository } = require('../../repository');
const responseTransformer = require('../../../utils/responseTransformer');

/* createHotel
1- Check if hotel exists on database
2- If not, create a new
3- If so, return error
*/
const create = async (input) => {
	const checkHotel = { hotelName: input.hotelName };

	const hotelExists = await hotelRepository.get(checkHotel);

	if (!hotelExists) {
		const params = {
			hotelUid: uuid(),
			hotelName: input.hotelName,
			description: input.description,
			country: input.country,
			city: input.city,
			address: input.address,
		};

		const response = await hotelRepository.create(params);
		return responseTransformer.onSuccess(response);
	}
	return responseTransformer.onError('Hotel existente');
};

/* getAvailables
1- Get all hotels from a country and city
2- Get all theirs Uids
3- Check if exist overlapping
4- Reduce hotels array according to overlap 
5- Return available hotels
*/
const getAvailables = async (input) => {
	const params = {
		country: input.country,
		city: input.city,
	};

	const hotels = await hotelRepository.getAll(params);

	const hotelUids = hotels.map((hotel) => hotel.hotelUid);

	const overlapParams = {
		hotelUids,
		fromDate: momentTz(input.fromDate).utc(),
		toDate: momentTz(input.toDate).utc(),
		active: true,
	};

	const overlapped = await reservationRepository.checkOverlap(overlapParams);

	const availables = hotels.reduce((prev, cur) => {
		if (!overlapped.find((hotel) => hotel.hotelUid === cur.hotelUid)) {
			prev.push(cur);
		}
		return prev;
	}, []);

	return responseTransformer.onSuccess(availables);
};

module.exports = {
	create,
	getAvailables,
};
