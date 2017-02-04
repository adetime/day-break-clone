import {
  SET_INITIAL_REACTION_STATE,
  ON_PRESS_LIKE_REACTION,
  COUNT_CARD_LIKED_REACTION,
  SET_USER_LIKED_CARDS
} from './../actions/types';

const INITIAL_STATE = [{
  cardId: {
    numberOfLikes: 0,
    currentUserLiked: false,
  },
}];

// think about the difference beteew fetch and mudate reaction data

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_INITIAL_REACTION_STATE:
      return state;

    case ON_PRESS_LIKE_REACTION:
    //  return { ...state, cardId: action.payload};
    case COUNT_CARD_LIKED_REACTION:
    //  return { ...state, numberOfLikes: action.payload};
    case SET_USER_LIKED_CARDS:
      //return { ...state, currentUserLiked: action.payload};

    default:
    return state;
  }
};
