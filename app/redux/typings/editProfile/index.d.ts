import {
  EDIT_PROFILE_FAILURE,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
} from '../../types';

declare namespace editProfile {
  interface EditProfileResponse {
    status: string;
    result: string;
  }
  interface EditProfileErrorResponse {
    status: string;
    result: string;
  }

  interface EditProfileRequestPayload {
    user_id: string;
    name: string;
    phone: string;
    address: string;
    date_of_birth: string;
    store_id: string;
  }

  interface EditProfileSuccessPayload {
    status: string;
  }
  interface EditProfileFailurePayload {
    error: string;
  }
  interface EditProfileProps {
    loading: boolean;
    editProfileResponse: {status: string};
    error: string;
  }

  // Action type
  interface EditProfileRequest {
    type: typeof EDIT_PROFILE_REQUEST;
    payload: EditProfileRequestPayload;
  }
  type EditProfileSuccess = {
    type: typeof EDIT_PROFILE_SUCCESS;
    payload: EditProfileSuccessPayload;
  };

  type EditProfileFailure = {
    type: typeof EDIT_PROFILE_FAILURE;
    payload: EditProfileFailurePayload;
  };

  type ActionsEditProfile =
    | EditProfileRequest
    | EditProfileSuccess
    | EditProfileFailure;
}
