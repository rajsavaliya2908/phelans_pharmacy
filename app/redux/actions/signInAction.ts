import {SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS} from '../types';
import {signIn} from '../typings/signIn';

export const userSignInRequest = (
  payload: signIn.UserSignInRequestPayload,
): signIn.UserSignInRequest => ({
  type: SIGNIN_REQUEST,
  payload,
});

export const userSignInSuccess = (
  payload: signIn.UserSignInSuccessPayload,
): signIn.UserSignInSuccess => ({
  type: SIGNIN_SUCCESS,
  payload,
});

export const userSignInFailure = (
  payload: signIn.UserSignInFailurePayload,
): signIn.UserSignInFailure => ({
  type: SIGNIN_FAILURE,
  payload,
});
