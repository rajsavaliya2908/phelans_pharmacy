import {AxiosError, AxiosResponse} from 'axios';
import {Alert} from 'react-native';
import {call, put, takeLatest} from 'redux-saga/effects';
import aesUtil from '../../utils/aesUtil';
import string from '../../utils/string';
import {EDIT_PROFILE_REQUEST} from '../types';
import {
  editProfileFailure,
  editProfileSuccess,
} from '../actions/editProfileAction';
import {editProfileApi} from '../../api/editProfile';
import {editProfile} from '../typings/editProfile';
import {navigationRef} from '../../navigation';

function* editProfileSaga({payload}: editProfile.EditProfileRequest) {
  try {
    const response: AxiosResponse<editProfile.EditProfileResponse> = yield call(
      editProfileApi,
      payload,
    );
    if (response?.data.status === 'success') {
      yield put(editProfileSuccess({status: response?.data.status}));
      navigationRef.goBack();
    } else {
      const decryptError = aesUtil.decrypt(response.data.result)
        ? aesUtil.decrypt(response.data.result)
        : [];
      const responseData = decryptError
        ? JSON.parse(decryptError as string)
        : [];
      yield put(
        editProfileFailure({
          error: responseData,
        }),
      );
      Alert.alert(string.appName, responseData);
    }
  } catch (err) {
    const error = err as AxiosError<editProfile.EditProfileErrorResponse>;
    if (error?.response?.data) {
      yield put(
        editProfileFailure({
          error: error?.response?.data.result,
        }),
      );
      Alert.alert(string.appName, error?.response?.data.result);
    } else {
      yield put(editProfileFailure({error: error?.message}));
      Alert.alert(string.appName, error?.message);
    }
  }
}

export default function* editProfileRuntime() {
  yield takeLatest(EDIT_PROFILE_REQUEST, editProfileSaga);
}
