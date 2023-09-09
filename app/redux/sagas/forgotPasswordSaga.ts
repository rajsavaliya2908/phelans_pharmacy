import {AxiosError, AxiosResponse} from 'axios';
import {Alert} from 'react-native';
import {call, put, takeLatest} from 'redux-saga/effects';
import aesUtil from '../../utils/aesUtil';
import string from '../../utils/string';
import {FORGOT_PASSWORD_REQUEST} from '../types';
import {forgotPassword} from '../typings/forgotPassword';
import {addUserFailure} from '../actions/addUserAction';
import {forgotPasswordApi} from '../../api/forgotPassword';
import {CommonActions} from '@react-navigation/native';
import {appRoutes} from '../../navigation/appRoutes';
import {navigationRef} from '../../navigation';
import {
  forgotPasswordFailure,
  forgotPasswordSuccess,
} from '../actions/forgotPassword';

const showAlertPopup = () => {
  //   const selector = useSelector((s: any) => s.forgotPassword);
  // const {loading} = selector;
  Alert.alert(string.congratulations, string.forgotPasswordResent, [
    {
      text: string.finish.toUpperCase(),
      onPress: () => {
        const resetAction = CommonActions.reset({
          index: 1,
          routes: [{name: appRoutes.SignIn}],
        });
        navigationRef.dispatch(resetAction);
      },
      style: 'cancel',
    },
  ]);
};

function* forgotPasswordSaga({
  payload,
}: forgotPassword.UserForgotPasswordRequest) {
  try {
    const response: AxiosResponse<forgotPassword.forgotPasswordResponse> =
      yield call(forgotPasswordApi, payload);
    console.log('FORGOTRESPONCE', response?.data.status);
    if (response?.data.status == 'Mail Send Successfully') {
      //check type
      const responseData: any = response?.data;
      showAlertPopup();
      yield put(forgotPasswordSuccess(responseData));
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
    console.log('FORGOTRESPONCE-------');
    const error = err as AxiosError<forgotPassword.forgotPasswordErrorResponse>;
    if (error?.response?.data) {
      yield put(
        forgotPasswordFailure({
          error: error?.response?.data.result,
        }),
      );
      Alert.alert(string.appName, error?.response?.data.result);
    } else {
      yield put(forgotPasswordFailure({error: error?.message}));
      Alert.alert(string.appName, error?.message);
    }
    // showPopUpToast('success', error?.response?.data?.message || error?.message);
  }
}

export default function* forgetPasswordRunTime() {
  yield takeLatest(FORGOT_PASSWORD_REQUEST, forgotPasswordSaga);
}
