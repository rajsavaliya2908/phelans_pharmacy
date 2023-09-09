import {CommonActions} from '@react-navigation/native';
import {AxiosError, AxiosResponse} from 'axios';
import {Alert} from 'react-native';
import {call, put, takeLatest} from 'redux-saga/effects';
import {signInApi} from '../../api/signIn';
import {navigationRef} from '../../navigation';
import {appRoutes} from '../../navigation/appRoutes';
import aesUtil from '../../utils/aesUtil';
import {Constant} from '../../utils/constants';
import Methods from '../../utils/methods';
import string from '../../utils/string';

import {userSignInFailure, userSignInSuccess} from '../actions/signInAction';

import {SIGNIN_REQUEST} from '../types';
import {signIn} from '../typings/signIn';

function* signInUser({payload}: signIn.UserSignInRequest) {
  try {
    const response: AxiosResponse<signIn.SignInResponse> = yield call(
      signInApi,
      payload,
    );
    if (response?.data.status == 'success') {
      console.log('~~~~~~~~~~~~~~if called', response.data);
      const decryptResponse = aesUtil.decrypt(response.data.result)
        ? aesUtil.decrypt(response.data.result)
        : [];
      const responseData = decryptResponse
        ? JSON.parse(decryptResponse as string)
        : [];
      console.log(responseData, '~~~~REponse');
      Methods.savePref(Constant.userInfo, responseData[0]);
      Methods.savePref(Constant.isAuth, true);
      yield put(
        userSignInSuccess(responseData as signIn.UserSignInSuccessPayload),
      );
      const resetAction = CommonActions.reset({
        index: 1,
        routes: [{name: appRoutes.Home}],
      });
      navigationRef.dispatch(resetAction);
    } else {
      console.log('~~~~~~~~~~~~~~Else called');
      const decryptError = aesUtil.decrypt(response.data.result)
        ? aesUtil.decrypt(response.data.result)
        : [];
      const responseData = decryptError
        ? JSON.parse(decryptError as string)
        : [];

      yield put(
        userSignInFailure({
          error: responseData,
        }),
      );
      Alert.alert(string.appName, responseData);
    }
  } catch (err) {
    console.log('error called');
    const error = err as AxiosError<signIn.SignInErrorResponse>;
    if (error?.response?.data) {
      yield put(
        userSignInFailure({
          error: error?.response?.data.result,
        }),
      );
      Alert.alert(string.appName, error?.response?.data.result);
    } else {
      console.log('error else called');
      yield put(userSignInFailure({error: error?.message}));
      Alert.alert(string.appName, error?.message);
    }
    // showPopUpToast('success', error?.response?.data?.message || error?.message);
  }
}

export default function* signInRuntime() {
  yield takeLatest(SIGNIN_REQUEST, signInUser);
}
