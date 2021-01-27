const { reservationBO } = require('../../core/business-operation');

const createReservation = async (req, res) => {
  const body = req.body;

  try {
    const response = await reservationBO.createReservation(body);

    return res.status(response.status).send(response.data);
  } catch (error) {
    return res.status(500).send('Erro Interno');
  }
};

const cancelReservation = async (req, res) => {
  const body = req.body;

  try {
    const response = await reservationBO.cancelReservation(body);

    return res.status(response.status).send(response.data);
  } catch (error) {
    return res.status(500).send('Erro Interno');
  }
};

module.exports = {
  createReservation,
  cancelReservation,
};
