import {
  USER_LIST_FAILURE,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
} from '../types';
import {userList} from '../typings/userList';

export const userListRequest = (
  payload: userList.UserListRequestPayload,
): userList.UserListRequest => ({
  type: USER_LIST_REQUEST,
  payload,
});

export const userListSuccess = (
  payload: userList.userDetail[],
): userList.UserListSuccess => ({
  type: USER_LIST_SUCCESS,
  payload,
});

export const userListFailure = (
  payload: userList.UserListFailurePayload,
): userList.UserListFailure => ({
  type: USER_LIST_FAILURE,
  payload,
});
