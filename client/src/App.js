import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import fetchPosts from './api/index';
import { useSelector } from 'react-redux';

const App = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const currentId = useSelector((state) => state.currentId);

	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, dispatch]);
	return (
		<Container maxidth='lg'>
			<AppBar className={classes.appBar} position='static' color='inherit'>
				<Typography className={classes.heading} variant='h2' align='center'>
					Memories
				</Typography>
				<img
					className={classes.image}
					src={memories}
					alt='memories'
					height='60'
				/>
			</AppBar>
			<Grow in>
				<Container>
					<Grid
						container
						justify='space-between'
						alignItems='stretch'
						spacing='3'>
						<Grid item xs={12} sm={6}>
							<Posts />
						</Grid>

						<Grid item xs={12} sm={6}>
							<Form />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default App;
