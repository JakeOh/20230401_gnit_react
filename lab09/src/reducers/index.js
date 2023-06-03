import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  // TODO
});

export default rootReducer;
