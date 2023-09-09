import {
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
} from '../types';
import {forgotPassword} from '../typings/forgotPassword';

export const forgotPasswordRequest = (
  payload: forgotPassword.ForgotPasswordRequestPayload,
): forgotPassword.UserForgotPasswordRequest => ({
  type: FORGOT_PASSWORD_REQUEST,
  payload,
});

export const forgotPasswordSuccess = (
  payload: forgotPassword.ForgotPasswordSuccessPayload,
): forgotPassword.UserForgotPasswordSuccess => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload,
});

export const forgotPasswordFailure = (
  payload: forgotPassword.ForgotPasswordFailurePayload,
): forgotPassword.UserForgotPasswordFailure => ({
  type: FORGOT_PASSWORD_FAILURE,
  payload,
});
