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
} from './../actions/types';

const INITIAL_STATE = {
  user: null,
  email: '',
  password: '',
  error: '',
  loading: false,

};


export default ( state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPENING_APP:
      return {...state, loading: true };

    case INITIALIZE_APP_SERVER:
      return state;

    case CHECK_USER_AUTH_STATE:
      return state;

    case USER_AUTHENTICATED:
      return { ...state, user: action.payload, loading: false };

    case USER_NOT_AUTHENTICATED:
      return { ...state, user: null, loading: false };

    case EMAIL_GIVEN:
      return { ...state, email: action.payload };

    case PASSWORD_GIVEN:
      return { ...state, password: action.payload };

    case LOGIN_WITH_EMAIL:
      return { ...state, loading: true, error: '' };

    case LOGIN_WITH_EMAIL_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };

    case LOGIN_WITH_EMAIL_FAIL:
      return { ...state, ...INITIAL_STATE, error: 'Authentication failed: email or password don\'t match' };

    case ON_PRESS_LOGIN_WITH_FACEBOOK:
      return { ...state, error: '' };

    case LOGIN_WITH_FACEBOOK_SUCCESS:
      // Do not need to mutate state because firebase will automatically
      // trigger the observer firebase.auth().onAuthStateChanged().
      // So, the userAuthenticated() actions will be triggered.
      return state;

    case LOGIN_WITH_FACEBOOK_FAIL:
      return { ...state, ...INITIAL_STATE, error: 'Unable to authencticate with Facebook' };


    default:
      return state;

  }
};
