import firebase from 'firebase';

import { getCurrentUserId } from './../server/api'; // Fake api

import {
  SET_INITIAL_REACTION_STATE,
  ON_PRESS_LIKE_REACTION,
  COUNT_CARD_LIKED_REACTION,
  SET_USER_LIKED_CARDS,
} from './../actions/types';

export const setInitialReactionState = ({cardId, numberOfLikes, likedUsersId}) => {
//console.log('cardId initial =', cardId)
//console.log('numberOfLikes initial =', numberOfLikes)
//console.log('likedUsersId initial =', likedUsersId)

const userId = getCurrentUserId();
//console.log('userId', userId)

let test = likedUsersId.find(user => user === userId);

console.log(userId, 'liked', cardId, '= ', test)

const currentUserLiked = test ? true : false;

console.log('currentUserLiked', currentUserLiked)


  return (
    {
      type: SET_INITIAL_REACTION_STATE,
     payload: {cardId, numberOfLikes, currentUserLiked},
    }
  );
};

export const onPressSupport = (cardId) => {

console.log('clicaram em = ', cardId)
  // Dispatch action to reducer sets this piece of state
  return (dispatch) => {
    dispatch(
      {
        type: ON_PRESS_LIKE_REACTION,
        payload: cardId,
      }
    );

    countCardLikedReaction(dispatch);

    setUserLikedReaction(dispatch);

    // Attention ---------------- Needs update firebase

  };
};


const countCardLikedReaction = (dispatch) => {

  // Dispatch action to reducer sets this piece of state
  dispatch(
    {
      type: COUNT_CARD_LIKED_REACTION,
      payload: 10,
    }
  );
};


const setUserLikedReaction = (dispatch) => {

  // Dispatch action to reducer sets this piece of state
  dispatch(
    {
      type: SET_USER_LIKED_CARDS,
      payload: true,
    }
  );
};
