import {
  USER_PROFILE_FAILURE,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
} from '../types';
import {userProfile} from '../typings/userProfile';

export const userProfileRequest = (
  payload: userProfile.UserProfileRequestPayload,
): userProfile.UserProfileRequest => ({
  type: USER_PROFILE_REQUEST,
  payload,
});

export const userProfileSuccess = (
  payload: userProfile.userDetail,
): userProfile.UserProfileSuccess => ({
  type: USER_PROFILE_SUCCESS,
  payload,
});

export const userProfileFailure = (
  payload: userProfile.UserProfileFailurePayload,
): userProfile.UserProfileFailure => ({
  type: USER_PROFILE_FAILURE,
  payload,
});
