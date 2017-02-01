import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {

  TEXT_SIZE,
  ON_PRESS_COMMENT,
  ON_CHANGE_COMMENT,
  ON_SUBMIT_COMMENT,
} from './types';


const textSize = (dispatch, text) => {

  // Dispatch action to reducer sets this piece of state
  dispatch( {
    type: TEXT_SIZE,
    payload: text.length,
  });
};


export const onPressComment = (cardId) => {

  // Set Router
  Actions.commentCreate();

  // Dispatch action to reducer sets this piece of state
  return {
    type: ON_PRESS_COMMENT,
    payload: cardId,
  };
};

export const onChangeComment = (text) => {
  return (dispatch) => {
    textSize(dispatch, text);

    // Dispatch action to reducer sets this piece of state
    dispatch(
      {
        type: ON_CHANGE_COMMENT,
        payload: text,
      }
    );

  };

};



export const onSubmitComment = ({ cardId, message }) => {
  // Get current user

  // Persist data on firebase
  console.log('cardId, message =', cardId, message )

  // Set Router
  Actions.pop();

  return { type: ON_SUBMIT_COMMENT };

};
