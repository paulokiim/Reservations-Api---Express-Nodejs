const dotenv = require('dotenv');
const dbConfigs = require('./database');

dotenv.config();

module.exports = {
	port: process.env.PORT,
	authTokenSecret: process.env.JWT_TOKEN_SECRET,
	dbConfigs,
};
