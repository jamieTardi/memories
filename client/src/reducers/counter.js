export const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case 'COUNT_ADD':
			return state + 1;
		default:
			return state;
	}
};
