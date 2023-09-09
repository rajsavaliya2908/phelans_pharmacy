import {
  USER_PROFILE_FAILURE,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
} from '../../types';
import {storeList} from '../storeList';

declare namespace userProfile {
  interface UserProfileResponse {
    status: string;
    result: string;
  }
  interface UserProfileErrorResponse {
    status: string;
    result: string;
  }

  interface UserProfileRequestPayload {
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

  interface UserProfileSuccessPayload {
    userProfileResponse: userDetail;
  }

  interface UserProfileFailurePayload {
    error: string;
  }

  interface UserProfileProps {
    loading: boolean;
    userProfileResponse: userDetail;
    error: string;
  }

  // Action type
  interface UserProfileRequest {
    type: typeof USER_PROFILE_REQUEST;
    payload: UserProfileRequestPayload;
  }

  type UserProfileSuccess = {
    type: typeof USER_PROFILE_SUCCESS;
    payload: userDetail;
  };

  type UserProfileFailure = {
    type: typeof USER_PROFILE_FAILURE;
    payload: UserProfileFailurePayload;
  };

  type ActionsUserProfile =
    | UserProfileRequest
    | UserProfileSuccess
    | UserProfileFailure;
}
