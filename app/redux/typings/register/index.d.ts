import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from '../../types';

declare namespace register {
  interface RegisterResponse {
    status: string;
    result: string;
  }
  interface RegisterErrorResponse {
    status: string;
    result: string;
  }

  interface RegisterDecryptResponse {
    email: string;
    id: string;
  }

  interface UserRegisterRequestPayload {
    email: string;
    password: string;
    name: string;
    address: string;
    date_of_birth: string;
    store_id: string;
    phone: string;
    accept_promo_mails: string;
    device_type: string;
    device_token: string;
  }

  interface UserRegisterProps {
    loading: boolean;
    userRegisterResponse: userDetail[];
    error: string;
  }

  interface UserRegisterSuccessPayload {
    registerResponse: RegisterResponse;
  }
  interface UserRegisterFailurePayload {
    error: string;
  }

  // Action type
  interface UserRegisterRequest {
    type: typeof REGISTER_REQUEST;
    payload: UserRegisterRequestPayload;
  }
  type UserRegisterSuccess = {
    type: typeof REGISTER_SUCCESS;
    payload: RegisterDecryptResponse;
  };

  type UserRegisterFailure = {
    type: typeof REGISTER_FAILURE;
    payload: UserRegisterFailurePayload;
  };

  type ActionsRegister =
    | UserRegisterRequest
    | UserRegisterSuccess
    | UserRegisterFailure;
}
