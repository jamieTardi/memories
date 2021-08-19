import axios from 'axios';
import * as api from '../api';
import { fetchPosts } from '../api/index';

export const getPosts = () => async (dispatch) => {
	try {
		const getData = await axios.get(fetchPosts());
		dispatch({ type: 'FETCH_ALL', payload: getData.data });
	} catch (err) {
		console.log(err.message);
	}
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);
		dispatch({ type: 'CREATE', payload: data });
	} catch (err) {
		(err) => console.log(err);
	}
};
