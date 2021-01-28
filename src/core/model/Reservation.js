module.exports = (sequelize, DataTypes) => {
	const Reservation = sequelize.define(
		'Reservation',
		{
			reservationUid: {
				type: DataTypes.UUID,
				primaryKey: true,
				field: 'reservation_uid',
			},
			hotelUid: {
				type: DataTypes.UUID,
				field: 'hotel_uid',
			},
			userUid: {
				type: DataTypes.UUID,
				field: 'user_uid',
			},
			fromDate: {
				type: DataTypes.DATE,
				field: 'from_date',
			},
			toDate: {
				type: DataTypes.DATE,
				field: 'to_date',
			},
			active: {
				type: DataTypes.BOOLEAN,
				field: 'active',
			},
			createdAt: {
				type: DataTypes.DATE,
				field: 'created_at',
			},
			updatedAt: {
				type: DataTypes.DATE,
				field: 'updated_at',
			},
		},
		{
			tableName: 'reservations',
			schema: 'teste',
		}
	);

	Reservation.associate = (models) => {
		Reservation.hasMany(models.User, {
			foreignKey: 'userUid',
			targetKey: 'userUid',
			as: 'user',
		});
		Reservation.hasMany(models.Hotel, {
			foreignKey: 'hotelUid',
			targetKey: 'hotelUid',
			as: 'hotel',
		});
	};

	return Reservation;
};
