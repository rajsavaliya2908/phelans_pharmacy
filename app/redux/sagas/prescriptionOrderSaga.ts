import {AxiosError, AxiosResponse} from 'axios';
import {Alert} from 'react-native';
import {call, put, takeLatest} from 'redux-saga/effects';
import aesUtil from '../../utils/aesUtil';
import string from '../../utils/string';
import {PRESCRIPTION_ORDER_REQUEST} from '../types';
import {prescriptionOrder} from '../typings/prescriptionOrder';
import {
  prescriptionOrderFailure,
  prescriptionOrderSuccess,
} from '../actions/prescriptionOrderAction';
// import {CommonActions, StackActions} from '@react-navigation/native';
// import {appRoutes} from '../../navigation/appRoutes';
import {navigationRef} from '../../navigation';
import {prescriptionOrderApi} from '../../api/prescriptionOrder';
import {appRoutes} from '../../navigation/appRoutes';

function* prescriptionOrderSaga({
  payload,
}: prescriptionOrder.PrescriptionOrderRequest) {
  try {
    const response: AxiosResponse<prescriptionOrder.PrescriptionOrderResponse> =
      yield call(prescriptionOrderApi, payload);
    if (response.status) {
      const decryptResponse = aesUtil.decrypt(response.data.status)
        ? aesUtil.decrypt(response.data.status)
        : '';
      const responseData = decryptResponse
        ? JSON.parse(decryptResponse as string)
        : [];
      yield put(prescriptionOrderSuccess(responseData));

      Alert.alert(string.reminderExp, string.reminderInfo, [
        {
          text: string.ok,
          onPress: () => navigationRef.navigate(appRoutes.ThankOrder),
        },
      ]);
    }
    // console.log(response, '~~~~~~Response');
    // if (response?.data.status == 'success') {
    //   const responaseData = response?.data;
    //   yield put(prescriptionOrderSuccess(responaseData));
    //   navigationRef.goBack();
    // } else {
    //   const decryptError = aesUtil.decrypt(response.data.status)
    //     ? aesUtil.decrypt(response.data.result)
    //     : [];
    //   const responseData = decryptError
    //     ? JSON.parse(decryptError as string)
    //     : [];

    //   yield put(
    //     prescriptionOrderFailure({
    //       error: responseData,
    //     }),
    //   );
    //   Alert.alert(string.appName, responseData);
    // }
  } catch (err) {
    console.log(err, '~~~~~~err');
    const error =
      err as AxiosError<prescriptionOrder.PrescriptionOrderErrorResponse>;
    if (error?.response?.data) {
      console.log('~~~~~~err if');
      yield prescriptionOrderFailure({
        error: error?.response?.data.result,
      });
      Alert.alert(string.appName, error?.response?.data.result);
    } else {
      console.log('~~~~~~err else');
      yield put(prescriptionOrderFailure({error: error?.message}));
      Alert.alert(string.appName, error?.message);
    }
    // showPopUpToast('success', error?.response?.data?.message || error?.message);
  }
}

export default function* prescriptionOrderRuntime() {
  yield takeLatest(PRESCRIPTION_ORDER_REQUEST, prescriptionOrderSaga);
}
