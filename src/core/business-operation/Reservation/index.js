const uuid = require('uuid').v4;
const momentTz = require('moment-timezone');
const { reservationRepository } = require('../../repository');
const responseTransformer = require('../../../utils/responseTransformer');

/* createReservation
1- Check if there are any reservation overlap
2- If not, create a new reservation
3- If so, return error
*/
const createReservation = async (input) => {
  const checkReservation = {
    hotelUid: input.hotelUid,
    fromDate: momentTz(input.fromDate).utc(),
    toDate: momentTz(input.toDate).utc(),
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
      createdAt: momentTz().utc(),
      updatedAt: momentTz().utc(),
    };

    const response = await reservationRepository.createReservation(params);
    return responseTransformer.onSuccess(response);
  }
  return responseTransformer.onError('Reservas conflitantes');
};

/* cancelReservation
1- Get the reservation it self
2- Modify attribute "active" to false
*/
const cancelReservation = async (input) => {
  const params = {
    userUid: input.userUid,
    hotelUid: input.hotelUid,
    fromDate: momentTz(input.fromDate).utc(),
    toDate: momentTz(input.toDate).utc(),
  };

  const reservation = await reservationRepository.getReservation(params);

  if (!reservation)
    return responseTransformer.onError('Essa reserva nao existe');
};

module.exports = {
  createReservation,
  cancelReservation,
};
