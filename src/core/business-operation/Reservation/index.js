const uuid = require('uuid').v4;
const momentTz = require('moment-timezone');
const { reservationRepository } = require('../../repository');
const responseTransformer = require('../../../utils/responseTransformer');

/* create
1- Check if there are any reservation overlap
2- If not, create a new reservation
3- If so, return error
*/
const create = async (input) => {
	const checkReservation = {
		hotelUids: [input.hotelUid],
		fromDate: momentTz(input.fromDate).utc(),
		toDate: momentTz(input.toDate).utc(),
		active: true,
	};

	const overlapped = await reservationRepository.checkOverlap(checkReservation);

	if (overlapped.length === 0) {
		const params = {
			reservationUid: uuid(),
			userUid: input.userUid,
			hotelUid: input.hotelUid,
			fromDate: momentTz(input.fromDate).utc(),
			toDate: momentTz(input.toDate).utc(),
			active: true,
		};

		const response = await reservationRepository.create(params);
		return responseTransformer.onSuccess(response);
	}
	return responseTransformer.onError('Reservas conflitantes');
};

/* cancel
1- Get the reservation it self
2- Modify attribute "active" to false
3- Check how many rows were affected
4- Return new object
*/
const cancel = async (input) => {
	const whereParams = {
		userUid: input.userUid,
		hotelUid: input.hotelUid,
		fromDate: momentTz(input.fromDate).utc(),
		toDate: momentTz(input.toDate).utc(),
		active: true,
	};

	const reservation = await reservationRepository.get(whereParams);

	if (!reservation)
		return responseTransformer.onError('Essa reserva nao foi encontrada');

	const cancelParams = {
		active: false,
	};

	const response = await reservationRepository.cancel(
		cancelParams,
		whereParams
	);

	const [rowsUpdated, [updatedReservation]] = response;
	if (rowsUpdated > 0) return responseTransformer.onSuccess(updatedReservation);
	return responseTransformer.onError(
		'Ocorreu algum erro ao cancelar a reserva'
	);
};

module.exports = {
	create,
	cancel,
};
