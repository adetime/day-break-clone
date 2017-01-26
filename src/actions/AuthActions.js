import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import Exponent from 'exponent';

import {
  OPENING_APP,
  INITIALIZE_APP_SERVER,
  CHECK_USER_AUTH_STATE,
  USER_AUTHENTICATED,
  USER_NOT_AUTHENTICATED,
  EMAIL_GIVEN,
  PASSWORD_GIVEN,
  LOGIN_WITH_EMAIL,
  LOGIN_WITH_EMAIL_SUCCESS,
  LOGIN_WITH_EMAIL_FAIL,
  ON_PRESS_LOGIN_WITH_FACEBOOK,
  LOGIN_WITH_FACEBOOK_SUCCESS,
  LOGIN_WITH_FACEBOOK_FAIL,
} from './types';


export const openingApp = () => {
  // Invoke other action creator to start server
  initializeAppServer();

  // Send an action creator to update the state
  return { type: OPENING_APP };
};


export const initializeAppServer = () => {
  return (dispatch) => {
    // Send an action creator to update the state
    dispatch({ type: INITIALIZE_APP_SERVER });

    // Config data needed to firabase
    const config = {
      apiKey: "AIzaSyCiHNJ_dKZXsqYDHVWtrsfLE0KMu31vP1w",
      authDomain: "daybreak-clone.firebaseapp.com",
      databaseURL: "https://daybreak-clone.firebaseio.com",
      storageBucket: "daybreak-clone.appspot.com",
      messagingSenderId: "725321853348"
    };

    // Start firabase
    firebase.initializeApp(config);
  };
};

export const checkUserAuthState = () => {
  return (dispatch) => {
    // Send an action creator to update the state
    // and tell that authentication state is being verified
    dispatch({ type: CHECK_USER_AUTH_STATE });

    // Listen for authentication state to change.
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log("You are authenticated now!");
        // Show user content
        userAuthenticated(dispatch, user);


      } else {
        console.log("You have to be authenticated!");
        // Ask for user log in
        userNotAuthenticated(dispatch);
      }
    });
  };
};


export const userAuthenticated = (dispatch, user) => {
  // Send an action creator to update the state with current user
  dispatch({
    type: USER_AUTHENTICATED,
    payload: user,
  });

  // Tell router to show main content to the user without a backbutton
  Actions.main({ type: 'reset' });
 };


 export const userNotAuthenticated = (dispatch) => {
   // Send an action to update state
   dispatch({
     type: USER_NOT_AUTHENTICATED,
   });

   // Tell router to show login screen to the user without a backbutton
   Actions.login({ type: 'reset' });
  };


export const onPressLoginWithFacebook = () => {
  console.log('action called')

  return (dispatch) => {
    dispatch( { type: ON_PRESS_LOGIN_WITH_FACEBOOK } );
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
    firebase.auth().signInWithCredential(credential)
      .then((result) => {

        let user = firebase.auth().currentUser;
        console.log('result =', result)

        if (user != null) {
          user.providerData.forEach(function (profile) {
            console.log("Sign-in provider: "+profile.providerId);
            console.log("  Provider-specific UID: "+profile.uid);
            console.log("  Name: "+profile.displayName);
            console.log("  Email: "+profile.email);
            console.log("  Photo URL: "+profile.photoURL);
          });
        }
      })
      .catch((error) => {
        // Handle Errors here.
        loginWithFacebookFail(dispatch, error);
      });
  }
};

export const loginWithFacebookSuccess = (dispatch) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_WITH_FACEBOOK_FAIL,
      payload: error,
    });
  };
};


export const loginWithFacebookFail = (dispatch, error) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_WITH_FACEBOOK_FAIL,
      payload: error,
    });
  };
};
