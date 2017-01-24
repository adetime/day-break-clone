import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  CREATE_CARD,
  SUPPORT_CARD,
  COMMENT_CARD
} from './types';

export const createCard = ({ moodType, message }) => {
  // Get current user

  // Persist data on firebase

  // Set Router

};


export const supportCard = ({ cardId }) => {
  // Get current user

  // Persist data on firebase

};


export const commentCard = ({ cardId, message }) => {
  // Get current user

  // Persist data on firebase

  // Set Router

};
