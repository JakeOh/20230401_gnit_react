import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import postDetailsReducer from './postDetailsReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  postDetails: postDetailsReducer,
});

export default rootReducer;
