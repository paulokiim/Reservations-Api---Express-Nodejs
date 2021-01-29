const onSuccess = (data) => {
	return {
		status: 200,
		data,
	};
};

const onError = (data) => {
	return {
		status: 400,
		data: {
			msg: data,
		},
	};
};

module.exports = {
	onSuccess,
	onError,
};
