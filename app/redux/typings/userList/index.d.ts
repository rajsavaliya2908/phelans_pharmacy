import {
  USER_LIST_FAILURE,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
} from '../../types';
import {storeList} from '../storeList';

declare namespace userList {
  interface UserListResponse {
    status: string;
    result: string;
  }
  interface UserListErrorResponse {
    status: string;
    result: string;
  }

  interface UserListRequestPayload {
    user_id: string;
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
    status?: string;
    login_token: string;
    accept_promotion_emails: string;
    store: storeList.storeDetail;
  };

  interface UserListSuccessPayload {
    userListResponse: userDetail[];
  }

  interface UserListFailurePayload {
    error: string;
  }

  interface UserListProps {
    loading: boolean;
    userListResponse: userDetail[];
    error: string;
  }

  // Action type
  interface UserListRequest {
    type: typeof USER_LIST_REQUEST;
    payload: UserListRequestPayload;
  }

  type UserListSuccess = {
    type: typeof USER_LIST_SUCCESS;
    payload: userDetail[];
  };

  type UserListFailure = {
    type: typeof USER_LIST_FAILURE;
    payload: UserListFailurePayload;
  };

  type ActionsUserList = UserListRequest | UserListSuccess | UserListFailure;
}
