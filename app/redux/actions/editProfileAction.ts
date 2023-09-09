import {
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE,
} from '../types';
import {editProfile} from '../typings/editProfile';

export const editProfileRequest = (
  payload: editProfile.EditProfileRequestPayload,
): editProfile.EditProfileRequest => ({
  type: EDIT_PROFILE_REQUEST,
  payload,
});

export const editProfileSuccess = (
  payload: editProfile.EditProfileSuccessPayload,
): editProfile.EditProfileSuccess => ({
  type: EDIT_PROFILE_SUCCESS,
  payload,
});

export const editProfileFailure = (
  payload: editProfile.EditProfileFailurePayload,
): editProfile.EditProfileFailure => ({
  type: EDIT_PROFILE_FAILURE,
  payload,
});
