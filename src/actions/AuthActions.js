import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  USER_AUTH_STATE,
  LOGIN_WITH_FACEBOOK,
  LOGIN_WITH_FACEBOOK_SUCCESS,
  LOGIN_WITH_FACEBOOK_FAIL,
} from './types';

export const userAuthState = () => {
  return (dispatch) => {
    // Listen for authentication state to change.
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log("You are authenticated now!");

        Actions.main();

      } else {
        // Do other things
        console.log("You have to be authenticated!");

        Actions.login();
      }
    });
  };
};

export const loginUserWithFacebook = () => {
  return (dispatch) => { dispatch( { type: LOGIN_WITH_FACEBOOK} ) };

};
