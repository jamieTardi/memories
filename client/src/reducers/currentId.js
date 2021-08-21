export const currentId = (state = null, action) => {
	switch (action.type) {
		case 'ADD_ID':
			return action.payload;
		case 'CLEAR_ID':
			return action.payload;
		default:
			return state;
	}
};
