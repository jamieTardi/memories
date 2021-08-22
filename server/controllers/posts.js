import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
	try {
		const postMessages = await PostMessage.find();

		res.status(200).json(postMessages);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

export const createPosts = async (req, res) => {
	const post = req.body;

	const newPost = new PostMessage(post);
	try {
		await newPost.save();

		res.status(201).json(post);
	} catch (err) {
		res.status(409).json({ message: err.message });
	}
};

export const updatePost = async (req, res) => {
	const { id: _id } = req.params;
	const post = req.body;

	if (!mongoose.Types.ObjectId.isValid(_id)) {
		return res.status(404).send('No Post with that id');
	}

	const updatedPost = await PostMessage.findByIdAndUpdate(
		_id,
		{ ...post, _id },
		{
			new: true,
		},
	);

	res.json(updatedPost);
};

export const deletePost = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send('No Post with that id');
	}

	await PostMessage.findByIdAndRemove(id);
	console.log('DELETE');
	return res.json({ message: 'Post deleted successfully' });
};
