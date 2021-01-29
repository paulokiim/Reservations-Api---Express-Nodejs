const { userBO } = require('../../core/business-operation');

const createUser = async (req, res) => {
	const body = req.body;

	try {
		const response = await userBO.createUser(body);

		return res.status(response.status).send(response.data);
	} catch (error) {
		return res.status(500).send('Erro Interno');
	}
};

const loginUser = async (req, res) => {
	const body = req.body;

	try {
		const response = await userBO.loginUser(body);

		return res.status(response.status).send(response.data);
	} catch (error) {
		return res.status(500).send('Erro Interno');
	}
};

module.exports = {
	createUser,
	loginUser,
};
