import {AxiosError, AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import {serviceListApi} from '../../api/serviceList';
import aesUtil from '../../utils/aesUtil';

import {
  serviceListFailure,
  serviceListSuccess,
} from '../actions/serviceListAction';

import {SERVICE_LIST_REQUEST} from '../types';
import {serviceList} from '../typings/serviceList';

function* fetchServiceList() {
  try {
    const response: AxiosResponse<serviceList.ServiceListResponse> = yield call(
      serviceListApi,
    );
    if (response?.status === 200) {
      const decryptResponse = aesUtil.decrypt(response.data.result)
        ? aesUtil.decrypt(response.data.result)
        : [];
      const responseData = decryptResponse
        ? JSON.parse(decryptResponse as string)
        : [];
      yield put(serviceListSuccess(responseData as serviceList.serviceInfo[]));
    }
  } catch (err) {
    const error = err as AxiosError<serviceList.ServiceListErrorResponse>;
    if (error?.response?.data) {
      yield put(
        serviceListFailure({
          error: error?.response?.data.result,
        }),
      );
    } else {
      yield put(serviceListFailure({error: error?.message}));
    }
    // showPopUpToast('success', error?.response?.data?.message || error?.message);
  }
}

export default function* serviceListRuntime() {
  yield takeLatest(SERVICE_LIST_REQUEST, fetchServiceList);
}
