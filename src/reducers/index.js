import { combineReducers } from 'redux';
import MutateCardReducer from './MutateCardReducer';

export default combineReducers({
  mutateCard: MutateCardReducer,
});
