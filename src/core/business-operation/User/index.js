const md5 = require('md5');
const uuid = require('uuid').v4;
const { userRepository } = require('../../repository');
const responseTransformer = require('../../../utils/responseTransformer');
const { createJWTToken } = require('../../../auth');

/* createUser
1- Check if user exists on database
2- If not, create a new
3- If so, return error
*/
const createUser = async (input) => {
  const checkUser = { username: input.username };

  const userExists = await userRepository.getUser(checkUser);

  if (!userExists) {
    const params = {
      userUid: uuid(),
      username: input.username,
      password: md5(input.password),
      email: input.email,
    };

    const response = await userRepository.createUser(params);
    return responseTransformer.onSuccess(response);
  }
  return responseTransformer.onError('Usuario existente');
};

/* loginUser
1- Check if user exists on database
2- If not, return error
3- If so, create a token for this userUid
3.1 - Return response with token
*/
const loginUser = async (input) => {
  const checkUser = { username: input.username };

  const userExists = await userRepository.getUser(checkUser);

  if (userExists) {
    const params = {
      username: input.username,
      password: md5(input.password),
    };

    const user = await userRepository.getUser(params);
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
  createUser,
  loginUser,
};
