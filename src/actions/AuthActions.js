import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import Exponent from 'exponent';

import {
  CHECK_USER_AUTH_STATE,
  USER_AUTHENTICATED,
  USER_NOT_AUTHENTICATED,
  EMAIL_GIVEN,
  PASSWORD_GIVEN,
  LOGIN_WITH_EMAIL,
  LOGIN_WITH_EMAIL_SUCCESS,
  LOGIN_WITH_EMAIL_FAIL,
  LOGIN_WITH_FACEBOOK,
  LOGIN_WITH_FACEBOOK_SUCCESS,
  LOGIN_WITH_FACEBOOK_FAIL,
} from './types';

export const checkUserAuthState = () => {
  return (dispatch) => {
    // Tell the that authentication state is being verified
    dispatch({ type: CHECK_USER_AUTH_STATE });

    // Listen for authentication state to change.
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log("You are authenticated now!");

        // Show user content
        userAuthenticated(dispatch, user);


      } else {
        // Do other things
        console.log("You have to be authenticated!");

        // Ask for user log in
        userNotAuthenticated(dispatch);
        //Actions.login();
      }
    });
  };
};


export const userAuthenticated = (dispatch, user) => {
  // Send an action to update state
  dispatch({
    type: USER_AUTHENTICATED,
    payload: user,
  });

  // Tell router to show main content to the user
  Actions.main();
 };


 export const userNotAuthenticated = (dispatch) => {
   // Send an action to update state
   dispatch({
     type: USER_NOT_AUTHENTICATED,
   });

   // Tell router to show login screen to the user
   Actions.login();
  };


export const loginWithFacebook = () => {
  console.log('action called')

  return (dispatch) => {
    dispatch( { type: LOGIN_WITH_FACEBOOK} );
    tryToLoginWithFacebook(dispatch);
  };
};



tryToLoginWithFacebook = async (dispatch) => {
  const { type, token } = await Exponent.Facebook.logInWithReadPermissionsAsync(
    '931912633610252',
    { permissions: ['public_profile', 'email'] }
  );

  console.log('type', type)
  console.log('token', token)

  if (type === 'success') {
    // Build Firebase credential with the Facebook access token.
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`);

    const {
      name,
      id,
      picture,  // not working
      age_range, // not working
      user_birthday // not working
    } = await response.json();

    // Sign in with credential from the Facebook user.
    firebase.auth().signInWithCredential(credential).catch((error) => {

    // Handle Errors here.
    loginWithFacebookFail(dispatch, error);
    });
  }
};


export const loginWithFacebookFail = (dispatch, error) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_WITH_FACEBOOK_FAIL,
      payload: error,
    });
  };
};
