import {
  CREATE_CARD,
  SUPPORT_CARD,
  COMMENT_CARD
} from './../actions/types';

const INITIAL_STATE = {
  message: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_CARD:
      return state;
    case SUPPORT_CARD:
      return state;
    case COMMENT_CARD:
        return state;
    default:
    return state;
  }
};
