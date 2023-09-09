import {AxiosError, AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import {userListApi} from '../../api/userList';
import aesUtil from '../../utils/aesUtil';
import {Constant} from '../../utils/constants';
import Methods from '../../utils/methods';
import {userListFailure, userListSuccess} from '../actions/userListAction';
import {STORE_LIST_REQUEST, USER_LIST_REQUEST} from '../types';
import {userList} from '../typings/userList';

function* fetchUserList({payload}: userList.UserListRequest) {
  try {
    const response: AxiosResponse<userList.UserListResponse> = yield call(
      userListApi,
      payload,
    );
    if (response?.data.status !== 'fail') {
      const decryptResponse = aesUtil.decrypt(response.data.result)
        ? aesUtil.decrypt(response.data.result)
        : [];
      const responseData = decryptResponse
        ? JSON.parse(decryptResponse as string)
        : [];
      //   Methods.savePref(Constant.userList, responseData);
      yield put(userListSuccess(responseData as userList.userDetail[]));
    } else {
      yield put(userListSuccess([]));
    }
  } catch (err) {
    const error = err as AxiosError<userList.UserListErrorResponse>;
    if (error?.response?.data) {
      yield put(
        userListFailure({
          error: error?.response?.data.result,
        }),
      );
    } else {
      yield put(userListFailure({error: error?.message}));
    }
  }
}

export default function* userListRuntime() {
  yield takeLatest(USER_LIST_REQUEST, fetchUserList);
}
