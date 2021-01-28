'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('users', {
			user_uid: {
				type: Sequelize.UUID,
				primaryKey: true,
				allowNull: false,
			},
			username: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			password: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			email: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.dropTable('users');
	},
};
