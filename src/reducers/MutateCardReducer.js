import {
  MOOD_CHOICE,
  ON_CHANGE_CARD_BODY_MESSAGE,
  TEXT_SIZE,
  ON_CHANGE_COMMENTS_AUTHORIZATION,
  CREATE_CARD,
  SUPPORT_CARD,
  COMMENT_CARD
} from './../actions/types';

const INITIAL_STATE = {
  type: '',
  bodyMessage: '',
  textSize: 0,
  maxTextSize: 700,
  enabledComments: true,

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOOD_CHOICE:
      return { ...state, type: action.payload};
    case ON_CHANGE_CARD_BODY_MESSAGE:
      return { ...state, bodyMessage: action.payload};
    case TEXT_SIZE:
      return { ...state, textSize: action.payload};
    case ON_CHANGE_COMMENTS_AUTHORIZATION:
      return { ...state, enabledComments: action.payload};
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
