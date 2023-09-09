import {
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
} from '../../types';

declare namespace forgotPassword {
  interface forgotPasswordResponse {
    status: string;
    result: string;
  }
  interface forgotPasswordErrorResponse {
    status: string;
    result: string;
  }

  interface ForgotPasswordRequestPayload {
    email: string;
  }

  type userDetail = {
    email: string;
  };

  interface ForgotPasswordSuccessPayload {
    ForgotPasswordResponse: userDetail[];
  }

  interface ForgotPasswordFailurePayload {
    error: string;
  }

  interface forgotPasswordProps {
    loading: boolean;
    forgotPasswordResponse: userDetail[];
    error: string;
  }

  // Action type
  interface UserForgotPasswordRequest {
    type: typeof FORGOT_PASSWORD_REQUEST;
    payload: ForgotPasswordRequestPayload;
  }

  type UserForgotPasswordSuccess = {
    type: typeof FORGOT_PASSWORD_SUCCESS;
    payload: ForgotPasswordSuccessPayload;
  };

  type UserForgotPasswordFailure = {
    type: typeof FORGOT_PASSWORD_FAILURE;
    payload: ForgotPasswordFailurePayload;
  };

  type ActionsForgotPassword =
    | UserForgotPasswordRequest
    | UserForgotPasswordSuccess
    | UserForgotPasswordFailure;
}
