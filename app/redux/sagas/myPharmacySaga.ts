import {AxiosError, AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import {myPharmacyApi} from '../../api/myPharmacy';
import aesUtil from '../../utils/aesUtil';

import {
  myPharmacyFailure,
  myPharmacySuccess,
} from '../actions/myPharmacyAction';

import {MY_PHARMACY_REQUEST} from '../types';
import {myPharmacy} from '../typings/myPharmacy';

function* myPharmacyAPI({payload}: myPharmacy.MyPharmacyRequest) {
  try {
    const response: AxiosResponse<myPharmacy.MyPharmacyResponse> = yield call(
      myPharmacyApi,
      payload,
    );
    if (response?.status === 200) {
      const decryptResponse = aesUtil.decrypt(response.data.result)
        ? aesUtil.decrypt(response.data.result)
        : [];
      const responseData = decryptResponse
        ? JSON.parse(decryptResponse as string)
        : [];
      yield put(
        myPharmacySuccess(responseData as myPharmacy.MyPharmacySuccessPayload),
      );
    }
  } catch (err) {
    const error = err as AxiosError<myPharmacy.MyPharmacyErrorResponse>;
    if (error?.response?.data) {
      yield put(
        myPharmacyFailure({
          error: error?.response?.data.result,
        }),
      );
    } else {
      yield put(myPharmacyFailure({error: error?.message}));
    }
    // showPopUpToast('success', error?.response?.data?.message || error?.message);
  }
}

export default function* myPharmacyRuntime() {
  yield takeLatest(MY_PHARMACY_REQUEST, myPharmacyAPI);
}
