import React from 'react';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from '@material-ui/core';
import moment from 'moment';
import { deletePost } from '../../../actions/posts';

const Post = ({ post }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	return (
		<div>
			<Card className={classes.card}>
				<CardMedia
					className={classes.media}
					image={post.selectedFile}
					title={post.title}
				/>

				<div className={classes.overlay}>
					<Typography variant='h6'>{post.creator}</Typography>
					<Typography variant='body2'>
						{moment(post.createdAt).fromNow()}
					</Typography>
				</div>
				<div className={classes.overlay2}>
					<Button
						style={{ color: 'white' }}
						size='small'
						onClick={() => {
							dispatch({ type: 'ADD_ID', payload: post._id });
						}}>
						<ion-icon name='ellipsis-horizontal-outline'></ion-icon>
					</Button>
				</div>
				<div className={classes.details}>
					<Typography variant='body2' color='textSecondary'>
						{post.tags.map((tag) => `#${tag}`)}
					</Typography>
				</div>
				<Typography variant='h5' gutterBottom className={classes.title}>
					{post.title}
				</Typography>
				<CardContent>
					<Typography variant='h5' gutterBottom>
						{post.message}
					</Typography>
				</CardContent>
				<CardActions className={classes.cardActions}>
					<Button size='small' color='primary' onClick={() => {}}>
						<ion-icon name='thumbs-up-outline'></ion-icon>
						Like
						{post.likeCount}
					</Button>
					<Button
						size='small'
						color='primary'
						onClick={() => {
							dispatch(deletePost(post._id));
						}}>
						<ion-icon name='trash'></ion-icon>
						Delete
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};

export default Post;
