const { hotelBO } = require('../../core/business-operation');

const createHotel = async (req, res) => {
  const body = req.body;

  try {
    const response = await hotelBO.createHotel(body);

    return res.status(response.status).send(response.data);
  } catch (error) {
    return res.status(500).send('Erro Interno');
  }
};

module.exports = {
  createHotel,
};
