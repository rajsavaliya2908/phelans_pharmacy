import {SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS} from '../../types';

declare namespace signIn {
  interface SignInResponse {
    status: string;
    result: string;
  }
  interface SignInErrorResponse {
    status: string;
    result: string;
  }

  interface UserSignInRequestPayload {
    email: string;
    password: string;
    device_type: string;
    device_token: string;
  }

  type userDetail = {
    id: string;
    customer_id: string;
    name: string;
    email: string;
    phone: string;
    usertype: string;
    username: string;
    password: string;
    address: string;
    city_id: string;
    date_of_birth: string;
    store_id: string;
    user_id: string;
    created_on: string;
    device_id: string;
    device_type: string;
    device_token: string;
    fcm_token: string;
    status: string;
    login_token: string;
    accept_promotion_emails: string;
  };

  interface UserSignInSuccessPayload {
    signInResponse: userDetail[];
  }

  interface UserSignInFailurePayload {
    error: string;
  }

  interface SignInProps {
    loading: boolean;
    signInResponse: userDetail[];
    error: string;
  }

  // Action type
  interface UserSignInRequest {
    type: typeof SIGNIN_REQUEST;
    payload: UserSignInRequestPayload;
  }

  type UserSignInSuccess = {
    type: typeof SIGNIN_SUCCESS;
    payload: UserSignInSuccessPayload;
  };

  type UserSignInFailure = {
    type: typeof SIGNIN_FAILURE;
    payload: UserSignInFailurePayload;
  };

  type ActionsSignIn =
    | UserSignInRequest
    | UserSignInSuccess
    | UserSignInFailure;
}
