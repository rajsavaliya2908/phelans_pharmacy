import {
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
} from '../types';
import {forgotPassword} from '../typings/forgotPassword';

const initialState = {
  loading: false,
  forgotPasswordResponse: {status: ''},
  error: '',
};

const forgotPasswordReducer = (
  state = initialState as unknown as forgotPassword.forgotPasswordProps,
  action: forgotPassword.ActionsForgotPassword,
) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPasswordResponse: action.payload,
        loading: false,
        error: null,
      };

    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        forgotPasswordResponse: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default forgotPasswordReducer;
