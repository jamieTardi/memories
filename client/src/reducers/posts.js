export const posts = (state = [], action) => {
	switch (action.type) {
		case 'DELETE':
			return state.filter((post) => {
				return post._id !== action.payload;
			});
		case 'FETCH_ALL':
			return action.payload;
		case 'CREATE':
			return [...posts, action.payload];
		case 'UPDATE':
			return posts.map((post) => {
				posts._id === action.payload._id ? action.payload : post;
			});

		default:
			return state;
	}
};
