import {
  USER_AUTH_STATE,
  LOGIN_WITH_FACEBOOK,
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
    case USER_AUTH_STATE:
      return { ...state, user: action.payload };

    default:
      return state;

  }
};
