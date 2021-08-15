import axios from 'axios';
import { fetchPosts } from '../api/index';

export const getPosts = () => async (dispatch) => {
	try {
		const getData = await axios.get(fetchPosts());
		dispatch({ type: 'FETCH_ALL', payload: getData.data });
	} catch (err) {
		console.log(err.message);
	}
};
