const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.PORT,
  authTokenSecret: process.env.JWT_TOKEN_SECRET,
  dbConfigs: {
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
  },
};
