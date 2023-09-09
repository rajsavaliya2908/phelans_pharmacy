import {AxiosError, AxiosResponse} from 'axios';
import {Alert} from 'react-native';
import {call, put, takeLatest} from 'redux-saga/effects';
import {registerApi} from '../../api/register';
import {navigationRef} from '../../navigation';
import {CommonActions} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import aesUtil from '../../utils/aesUtil';
import {Constant} from '../../utils/constants';
import Methods from '../../utils/methods';
import string from '../../utils/string';
import {
  userRegisterFailure,
  userRegisterSuccess,
} from '../actions/registerAction';

import {REGISTER_REQUEST} from '../types';
import {register} from '../typings/register';
import {appRoutes} from '../../navigation/appRoutes';

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
      onPress: () => {
        const resetAction = StackActions.replace(appRoutes.AddUser);
        navigationRef.dispatch(resetAction);
      },
    },
  ]);
};

function* registerUser({payload}: register.UserRegisterRequest) {
  try {
    const response: AxiosResponse<register.RegisterResponse> = yield call(
      registerApi,
      payload,
    );
    if (response?.data.status == 'success') {
      const decryptResponse = aesUtil.decrypt(response.data.result)
        ? aesUtil.decrypt(response.data.result)
        : [];
      const responseData = decryptResponse
        ? JSON.parse(decryptResponse as string)
        : [];
      Methods.savePref(Constant.userInfo, responseData[0]);
      Methods.savePref(Constant.isAuth, true);
      showAlertPopup();
      yield put(
        userRegisterSuccess(responseData as register.RegisterDecryptResponse),
      );
    } else {
      const decryptError = aesUtil.decrypt(response.data.result)
        ? aesUtil.decrypt(response.data.result)
        : [];
      const responseData = decryptError
        ? JSON.parse(decryptError as string)
        : [];

      yield put(
        userRegisterFailure({
          error: responseData,
        }),
      );
      Alert.alert(string.appName, responseData);
    }
  } catch (err) {
    const error = err as AxiosError<register.RegisterErrorResponse>;

    if (error?.response?.data) {
      yield put(
        userRegisterFailure({
          error: error?.response?.data.result,
        }),
      );
      Alert.alert(string.appName, error?.response?.data.result);
    } else {
      console.log(error);
      yield put(userRegisterFailure({error: error?.message}));
      Alert.alert(string.appName, error?.message);
    }
    // showPopUpToast('success', error?.response?.data?.message || error?.message);
  }
}

export default function* registerRuntime() {
  yield takeLatest(REGISTER_REQUEST, registerUser);
}
