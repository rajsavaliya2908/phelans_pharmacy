import {
  ADD_USER_FAILURE,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
} from '../../types';

declare namespace addUser {
  interface AddUserResponse {
    status: string;
    result: string;
  }
  interface AddUserErrorResponse {
    status: string;
    result: string;
  }

  interface AddUserRequestPayload {
    email: string;
    password: string;
    name: string;
    address: string;
    date_of_birth: string;
    store_id: string;
    user_id: string;
    phone: string;
  }

  interface AddUserSuccessPayload {
    status: string;
  }
  interface AddUserFailurePayload {
    error: string;
  }
  interface AddUserProps {
    loading: boolean;
    addUserResponse: {status: string};
    error: string;
  }

  // Action type
  interface AddUserRequest {
    type: typeof ADD_USER_REQUEST;
    payload: AddUserRequestPayload;
  }
  type AddUserSuccess = {
    type: typeof ADD_USER_SUCCESS;
    payload: AddUserSuccessPayload;
  };

  type AddUserFailure = {
    type: typeof ADD_USER_FAILURE;
    payload: AddUserFailurePayload;
  };

  type ActionsAddUser = AddUserRequest | AddUserSuccess | AddUserFailure;
}
