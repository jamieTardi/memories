import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

const Form = () => {
	const dispatch = useDispatch();
	const currentId = useSelector((state) => state.currentId);
	const post = useSelector((state) =>
		state.currentId ? state.posts.find((p) => p.id === currentId) : null,
	);
	console.log(currentId);
	const [postData, setPostData] = useState({
		creator: '',
		title: '',
		message: '',
		tags: '',
		selectedFile: '',
	});
	const classes = useStyles();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (currentId) {
			dispatch(updatePost(currentId, postData));
		} else {
			dispatch(createPost(postData));
		}
		clear();
	};

	const clear = () => {
		dispatch({ type: 'CLEAR_ID', payload: null });
		setPostData({
			creator: '',
			title: '',
			message: '',
			tags: '',
			selectedFile: '',
		});
	};

	useEffect(() => {
		if (post) {
			setPostData(post);
		}
	}, [post]);

	return (
		<Paper>
			<form
				autoComplete='off'
				noValidate
				className={`${classes.root} ${classes.form}`}
				onSubmit={(e) => {
					handleSubmit(e);
				}}>
				<Typography variant='h6'>
					{!currentId ? 'Create a Memory' : 'Editing a memory'}
				</Typography>
				<TextField
					name='creator'
					variant='outlined'
					label='Creator'
					fullWidth
					value={postData.creator}
					onChange={(e) => {
						setPostData({ ...postData, creator: e.target.value });
					}}
				/>
				<TextField
					name='title'
					variant='outlined'
					label='Title'
					fullWidth
					value={postData.title}
					onChange={(e) => {
						setPostData({ ...postData, title: e.target.value });
					}}
				/>
				<TextField
					name='message'
					variant='outlined'
					label='Message'
					fullWidth
					value={postData.message}
					onChange={(e) => {
						setPostData({ ...postData, message: e.target.value });
					}}
				/>
				<TextField
					name='tags'
					variant='outlined'
					label='Tags'
					fullWidth
					value={postData.tags}
					onChange={(e) => {
						setPostData({ ...postData, tags: e.target.value });
					}}
				/>
				<div className={classes.fileInput}>
					<FileBase
						type='file'
						multiple={false}
						onDone={({ base64 }) =>
							setPostData({ ...postData, selectedFile: base64 })
						}
					/>
					<Button
						className={classes.buttonSubmit}
						variant='contained'
						color='primary'
						size='large'
						type='submit'
						fullWidth>
						Submit
					</Button>
					<Button
						variant='contained'
						color='secondary'
						size='large'
						type='submit'
						onClick={clear}
						fullWidth>
						Clear
					</Button>
				</div>
			</form>
		</Paper>
	);
};

export default Form;
