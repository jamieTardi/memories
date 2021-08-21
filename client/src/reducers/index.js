import { combineReducers } from 'redux';
import { posts } from './posts';
import { counterReducer } from './counter';
import { currentId } from './currentId';

const rootReducer = combineReducers({
	posts,
	counterReducer,
	currentId,
});

export default rootReducer;
