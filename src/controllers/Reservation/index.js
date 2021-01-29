const { reservationBO } = require('../../core/business-operation');

const create = async (req, res) => {
	const body = req.body;

	try {
		const response = await reservationBO.create(body);

		return res.status(response.status).send(response);
	} catch (error) {
		return res.status(500).send('Erro Interno');
	}
};

const cancel = async (req, res) => {
	const body = req.body;

	try {
		const response = await reservationBO.cancel(body);

		return res.status(response.status).send(response);
	} catch (error) {
		return res.status(500).send('Erro Interno');
	}
};

module.exports = {
	create,
	cancel,
};
