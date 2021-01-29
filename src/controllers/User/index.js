const { userBO } = require('../../core/business-operation');

const create = async (req, res) => {
	const body = req.body;

	try {
		const response = await userBO.create(body);

		return res.status(response.status).send(response);
	} catch (error) {
		return res.status(500).send('Erro Interno');
	}
};

const login = async (req, res) => {
	const body = req.body;

	try {
		const response = await userBO.login(body);

		return res.status(response.status).send(response);
	} catch (error) {
		return res.status(500).send('Erro Interno');
	}
};

module.exports = {
	create,
	login,
};
