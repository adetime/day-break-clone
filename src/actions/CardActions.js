import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  MOOD_CHOICE,
  ON_CHANGE_CARD_BODY_MESSAGE,
  TEXT_SIZE,
  ON_CHANGE_COMMENTS_AUTHORIZATION,
  CREATE_CARD,
  SUPPORT_CARD,  
} from './types';

export const moodChoice = ({ type }) => {

  // Set Router
  Actions.cardCreate();

  // Dispatch action to reducer sets this piece of state
  return {
    type: MOOD_CHOICE,
    payload: type,
  };
};

export const onChangeCardBodyMessage = (text) => {
  return (dispatch) => {
    textSize(dispatch, text);

    // Dispatch action to reducer sets this piece of state
    dispatch(
      {
        type: ON_CHANGE_CARD_BODY_MESSAGE,
        payload: text,
      }
    );

  };

};

const textSize = (dispatch, text) => {

  // Dispatch action to reducer sets this piece of state
  dispatch( {
    type: TEXT_SIZE,
    payload: text.length,
  });
};

export const onChangeCommentsAutorization = (value) => {

  // Dispatch action to reducer sets this piece of state
  return ({
    type: ON_CHANGE_COMMENTS_AUTHORIZATION,
    payload: value,
  });
};

export const createCard = ({ type, message }) => {
  // Get current user

  // Persist data on firebase

  // Set Router

};


export const supportCard = ({ cardId }) => {
  // Get current user

  // Persist data on firebase

};
