'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('hotels', {
			hotel_uid: {
				type: Sequelize.UUID,
				primaryKey: true,
				allowNull: false,
			},
			hotel_name: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			description: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			country: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			city: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			address: {
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
		return queryInterface.dropTable('hotels');
	},
};
