import { combineReducers } from 'redux';
import { posts } from './posts';
import { counterReducer } from './counter';

const rootReducer = combineReducers({
	posts,
	counterReducer,
});

export default rootReducer;
