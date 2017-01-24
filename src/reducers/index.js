import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MutateCardReducer from './MutateCardReducer';

export default combineReducers({
  auth: AuthReducer,
  mutateCard: MutateCardReducer,

});
