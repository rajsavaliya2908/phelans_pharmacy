import {AxiosError, AxiosResponse} from 'axios';
import {Alert} from 'react-native';
import {call, put, takeLatest} from 'redux-saga/effects';
import aesUtil from '../../utils/aesUtil';
import string from '../../utils/string';
import {SERVICE_ORDER_REQUEST} from '../types';
import {serviceOrder} from '../typings/serviceOrder';
import {
  serviceOrderFailure,
  serviceOrderSuccess,
} from '../actions/serviceOrderAction';
import {serviceOrderApi} from '../../api/serviceOrder';
import {navigationRef} from '../../navigation';
import {StackActions} from '@react-navigation/native';
import {appRoutes} from '../../navigation/appRoutes';

function* serviceOrderSaga({payload}: serviceOrder.ServiceOrderRequest) {
  try {
    const response: AxiosResponse<serviceOrder.ServiceOrderResponse> =
      yield call(serviceOrderApi, payload);
      console.log(response.data,'~~~~~~~~~~~~~~~~~~~Response~~~~~~~~~~~~~~~~')
    if (response?.data.status === 'success') {
      const responaseData = response?.data;
      yield put(serviceOrderSuccess(responaseData));
      const resetAction = StackActions.replace(appRoutes.ThankService);
      navigationRef.dispatch(resetAction);
    } else {
      const decryptError = aesUtil.decrypt(response.data.result)
        ? aesUtil.decrypt(response.data.result)
        : [];
      const responseData = decryptError
        ? JSON.parse(decryptError as string)
        : [];

      yield put(
        serviceOrderFailure({
          error: responseData,
        }),
      );
      Alert.alert(string.appName, responseData);
    }
  } catch (err) {
    const error = err as AxiosError<serviceOrder.ServiceOrderErrorResponse>;
    if (error?.response?.data) {
      yield put(
        serviceOrderFailure({
          error: error?.response?.data.result,
        }),
      );
      Alert.alert(string.appName, error?.response?.data.result);
    } else {
      yield put(serviceOrderFailure({error: error?.message}));
      Alert.alert(string.appName, error?.message);
    }
    // showPopUpToast('success', error?.response?.data?.message || error?.message);
  }
}

export default function* serviceOrderRuntime() {
  yield takeLatest(SERVICE_ORDER_REQUEST, serviceOrderSaga);
}
