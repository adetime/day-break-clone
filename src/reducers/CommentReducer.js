import {
  ON_PRESS_COMMENT,
  ON_CHANGE_COMMENT,
  TEXT_SIZE,
  ON_SUBMIT_COMMENT,
} from './../actions/types';

const INITIAL_STATE = {
  cardId: '',
  message: '',
  textSize: 0,
  maxTextSize: 700,

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ON_PRESS_COMMENT:
      return { ...state, cardId: action.payload};
    case ON_CHANGE_COMMENT:
      return { ...state, message: action.payload};
    case TEXT_SIZE:
      return { ...state, textSize: action.payload};
    case ON_SUBMIT_COMMENT:
        return INITIAL_STATE;
    default:
    return state;
  }
};
