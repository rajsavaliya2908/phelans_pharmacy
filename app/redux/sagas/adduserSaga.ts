import {AxiosError, AxiosResponse} from 'axios';
import {Alert} from 'react-native';
import {call, put, takeLatest} from 'redux-saga/effects';
import aesUtil from '../../utils/aesUtil';
import string from '../../utils/string';
import {ADD_USER_REQUEST} from '../types';
import {addUser} from '../typings/addUser';
import {addUserFailure, addUserSuccess} from '../actions/addUserAction';
import {addUserApi} from '../../api/addUser';
import {CommonActions, StackActions} from '@react-navigation/native';
import {appRoutes} from '../../navigation/appRoutes';
import {navigationRef} from '../../navigation';

const showAlertPopup = () => {
  Alert.alert(string.congratulations, string.addMoreInfo, [
    {
      text: string.finish.toUpperCase(),
      onPress: () => {
        const resetAction = CommonActions.reset({
          index: 1,
          routes: [{name: appRoutes.Home}],
        });
        navigationRef.dispatch(resetAction);
      },
      style: 'cancel',
    },
    {
      text: string.addMore.toUpperCase(),
    },
  ]);
};

function* addUserSaga({payload}: addUser.AddUserRequest) {
  try {
    const response: AxiosResponse<addUser.AddUserResponse> = yield call(
      addUserApi,
      payload,
    );
    if (response?.data.status == 'success') {
      const responaseData = response?.data;
      showAlertPopup();
      yield put(addUserSuccess(responaseData));
    } else {
      const decryptError = aesUtil.decrypt(response.data.result)
        ? aesUtil.decrypt(response.data.result)
        : [];
      const responseData = decryptError
        ? JSON.parse(decryptError as string)
        : [];

      yield put(
        addUserFailure({
          error: responseData,
        }),
      );
      Alert.alert(string.appName, responseData);
    }
  } catch (err) {
    const error = err as AxiosError<addUser.AddUserErrorResponse>;
    if (error?.response?.data) {
      yield put(
        addUserFailure({
          error: error?.response?.data.result,
        }),
      );
      Alert.alert(string.appName, error?.response?.data.result);
    } else {
      yield put(addUserFailure({error: error?.message}));
      Alert.alert(string.appName, error?.message);
    }
    // showPopUpToast('success', error?.response?.data?.message || error?.message);
  }
}

export default function* addUserRuntime() {
  yield takeLatest(ADD_USER_REQUEST, addUserSaga);
}
