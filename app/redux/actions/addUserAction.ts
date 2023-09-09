import {ADD_USER_FAILURE, ADD_USER_REQUEST, ADD_USER_SUCCESS} from '../types';
import {addUser} from '../typings/addUser';

export const addUserRequest = (
  payload: addUser.AddUserRequestPayload,
): addUser.AddUserRequest => ({
  type: ADD_USER_REQUEST,
  payload,
});

export const addUserSuccess = (
  payload: addUser.AddUserSuccessPayload,
): addUser.AddUserSuccess => ({
  type: ADD_USER_SUCCESS,
  payload,
});

export const addUserFailure = (
  payload: addUser.AddUserFailurePayload,
): addUser.AddUserFailure => ({
  type: ADD_USER_FAILURE,
  payload,
});
