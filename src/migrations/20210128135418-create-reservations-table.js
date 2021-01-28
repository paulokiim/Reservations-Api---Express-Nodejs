'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('reservations', {
			reservation_uid: {
				type: Sequelize.UUID,
				primaryKey: true,
				allowNull: false,
			},
			hotel_uid: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'hotels',
					key: 'hotel_uid',
				},
			},
			user_uid: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'users',
					key: 'user_uid',
				},
			},
			from_date: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			to_date: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			active: {
				type: Sequelize.BOOLEAN,
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
		return queryInterface.dropTable('reservations');
	},
};
