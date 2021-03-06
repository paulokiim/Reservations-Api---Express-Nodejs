module.exports = (sequelize, DataTypes) => {
	const Hotel = sequelize.define(
		'Hotel',
		{
			hotelUid: {
				type: DataTypes.UUID,
				primaryKey: true,
				field: 'hotel_uid',
			},
			hotelName: {
				type: DataTypes.TEXT,
				field: 'hotel_name',
			},
			description: {
				type: DataTypes.TEXT,
				field: 'description',
			},
			country: {
				type: DataTypes.TEXT,
				field: 'country',
			},
			city: {
				type: DataTypes.TEXT,
				field: 'city',
			},
			address: {
				type: DataTypes.TEXT,
				field: 'address',
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
			tableName: 'hotels',
			schema: 'public',
		}
	);

	Hotel.associate = (models) => {
		Hotel.belongsTo(models.Reservation, {
			foreignKey: 'hotelUid',
		});
	};

	return Hotel;
};
