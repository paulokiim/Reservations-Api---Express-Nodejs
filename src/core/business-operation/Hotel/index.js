const uuid = require('uuid').v4;
const { hotelRepository } = require('../../repository');
const responseTransformer = require('../../../utils/responseTransformer');

/* createHotel
1- Check if hotel exists on database
2- If not, create a new
3- If so, return error
*/
const createHotel = async (input) => {
  const checkHotel = { hotelName: input.hotelName };

  const hotelExists = await hotelRepository.getHotel(checkHotel);

  if (!hotelExists) {
    const params = {
      hotelUid: uuid(),
      hotelName: input.hotelName,
      description: input.description,
      country: input.country,
      city: input.city,
      address: input.address,
    };

    const response = await hotelRepository.createHotel(params);
    return responseTransformer.onSuccess(response);
  }
  return responseTransformer.onError('Hotel existente');
};

module.exports = {
  createHotel,
};
