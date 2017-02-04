import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CardReducer from './CardReducer';
import ReactionReducer from './ReactionReducer';
import CommentReducer from './CommentReducer';

export default combineReducers({
  auth: AuthReducer,
  card: CardReducer,
  reaction: ReactionReducer,
  comment: CommentReducer,

});
