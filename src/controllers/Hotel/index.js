const { hotelBO } = require('../../core/business-operation');

const create = async (req, res) => {
	const body = req.body;

	try {
		const response = await hotelBO.create(body);

		return res.status(response.status).send(response);
	} catch (error) {
		return res.status(500).send('Erro Interno');
	}
};

const getAll = async (req, res) => {
	const body = req.body;

	try {
		const response = await hotelBO.getAll(body);

		return res.status(response.status).send(response);
	} catch (error) {
		return res.status(500).send('Erro Interno');
	}
};

module.exports = {
	create,
	getAll,
};
