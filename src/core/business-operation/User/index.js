const md5 = require('md5');
const uuid = require('uuid').v4;
const { userRepository } = require('../../repository');
const responseTransformer = require('../../../utils/responseTransformer');
const { createJWTToken } = require('../../../auth');

/* create
1- Check if user exists on database
2- If not, create a new
3- If so, return error
*/
const create = async (input) => {
	const checkUser = { username: input.username };

	const userExists = await userRepository.get(checkUser);

	if (!userExists) {
		const params = {
			userUid: uuid(),
			username: input.username,
			password: md5(input.password),
			email: input.email,
		};

		const response = await userRepository.create(params);
		return responseTransformer.onSuccess(response);
	}
	return responseTransformer.onError('Usuario existente');
};

/* login
1- Check if user exists on database
2- If not, return error
3- If so, create a token for this userUid
3.1 - Return response with token
*/
const login = async (input) => {
	const checkUser = { username: input.username };

	const userExists = await userRepository.get(checkUser);

	if (userExists) {
		const params = {
			username: input.username,
			password: md5(input.password),
		};

		const user = await userRepository.get(params);
		if (!user) {
			return responseTransformer.onError('Usuario ou Senha incorreta');
		}

		const token = createJWTToken(user.userUid);
		if (token) {
			const response = {
				token,
				user,
			};
			return responseTransformer.onSuccess(response);
		}
	}
	return responseTransformer.onError('Usuario nao encontrado');
};

module.exports = {
	create,
	login,
};
