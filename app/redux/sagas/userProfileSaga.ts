import {AxiosError, AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';

import {userProfileApi} from '../../api/userProfile';
import aesUtil from '../../utils/aesUtil';

import {
  userProfileFailure,
  userProfileSuccess,
} from '../actions/userProfileAction';
import {USER_PROFILE_REQUEST} from '../types';
import {userProfile} from '../typings/userProfile';

function* fetchUserProfile({payload}: userProfile.UserProfileRequest) {
  try {
    const response: AxiosResponse<userProfile.UserProfileResponse> = yield call(
      userProfileApi,
      payload,
    );
    if (response?.status === 200) {
      const decryptResponse = aesUtil.decrypt(response.data.result)
        ? aesUtil.decrypt(response.data.result)
        : [];
      const responseData = decryptResponse
        ? JSON.parse(decryptResponse as string)
        : [];
      console.log(responseData, '~~~~~~~~~~~~fetchUserProfile');
      //   Methods.savePref(Constant.userList, responseData);
      yield put(userProfileSuccess(responseData[0] as userProfile.userDetail));
    }
  } catch (err) {
    const error = err as AxiosError<userProfile.UserProfileErrorResponse>;
    if (error?.response?.data) {
      yield put(
        userProfileFailure({
          error: error?.response?.data.result,
        }),
      );
    } else {
      yield put(userProfileFailure({error: error?.message}));
    }
  }
}

export default function* userProfileRuntime() {
  yield takeLatest(USER_PROFILE_REQUEST, fetchUserProfile);
}
