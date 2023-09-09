import {signIn} from '../typings/signIn';
import {SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS} from '../types';

const initialState = {
  loading: false,
  signInResponse: [],
  error: null,
};

const signInReducer = (state = initialState, action: signIn.ActionsSignIn) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SIGNIN_SUCCESS:
      return {
        ...state,
        signInResponse: action.payload,
        loading: false,
        error: null,
      };

    case SIGNIN_FAILURE:
      return {
        ...state,
        signInResponse: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default signInReducer;
