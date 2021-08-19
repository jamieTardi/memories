import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () =>
	axios
		.get(url)
		.then((res) => console.log(res))
		.catch((err) => console.log(err));

export const createPost = (newPost) => axios.post(url, newPost);
