import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CardReducer from './CardReducer';
import CommentReducer from './CommentReducer';

export default combineReducers({
  auth: AuthReducer,
  card: CardReducer,
  comment: CommentReducer,

});
