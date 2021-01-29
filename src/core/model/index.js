const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

const { dbConfigs } = require('../../config');

const sequelize = new Sequelize(
	dbConfigs.database,
	dbConfigs.username,
	dbConfigs.password,
	dbConfigs
);

const db = {};

fs.readdirSync(__dirname)
	.filter((file) => file.indexOf('.') !== 0 && file !== 'index.js')
	.forEach((file) => {
		const model = require(path.join(__dirname, file))(sequelize, Sequelize);
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if ('associate' in db[modelName]) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
