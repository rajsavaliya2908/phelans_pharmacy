import {REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS} from '../types';
import {register} from '../typings/register';

export const userRegisterRequest = (
  payload: register.UserRegisterRequestPayload,
): register.UserRegisterRequest => ({
  type: REGISTER_REQUEST,
  payload,
});

export const userRegisterSuccess = (
  payload: register.RegisterDecryptResponse,
): register.UserRegisterSuccess => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const userRegisterFailure = (
  payload: register.UserRegisterFailurePayload,
): register.UserRegisterFailure => ({
  type: REGISTER_FAILURE,
  payload,
});
