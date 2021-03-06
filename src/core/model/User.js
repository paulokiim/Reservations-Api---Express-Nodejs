module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			userUid: {
				type: DataTypes.UUID,
				primaryKey: true,
				field: 'user_uid',
			},
			username: {
				type: DataTypes.TEXT,
				field: 'username',
			},
			password: {
				type: DataTypes.TEXT,
				field: 'password',
			},
			email: {
				type: DataTypes.TEXT,
				field: 'email',
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
			tableName: 'users',
			schema: 'public',
		}
	);

	User.associate = (models) => {
		User.belongsTo(models.Reservation, {
			foreignKey: 'userUid',
		});
	};

	return User;
};
