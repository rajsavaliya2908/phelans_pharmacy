import {AxiosError, AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import {medicationListApi} from '../../api/medicationList';
import aesUtil from '../../utils/aesUtil';
import {
  medicationListFailure,
  medicationListSuccess,
} from '../actions/medicationListAction';
import {MEDICATION_LIST_REQUEST} from '../types';
import {medicationList} from '../typings/medicationList';

function* fetchMedicationList({payload}: medicationList.MedicationListRequest) {
  try {
    const response: AxiosResponse<medicationList.MedicationListResponse> =
      yield call(medicationListApi, payload);

    if (response?.status === 200) {
      const decryptResponse = aesUtil.decrypt(response.data.result)
        ? aesUtil.decrypt(response.data.result)
        : [];
      const responseData = decryptResponse
        ? JSON.parse(decryptResponse as string)
        : [];

      yield put(
        medicationListSuccess(
          Array.isArray(responseData)
            ? responseData
            : ([] as medicationList.reminderInfo[]),
        ),
      );
    }
  } catch (err) {
    const error = err as AxiosError<medicationList.MedicationListErrorResponse>;
    if (error?.response?.data) {
      yield put(
        medicationListFailure({
          error: error?.response?.data.result,
        }),
      );
    } else {
      yield put(medicationListFailure({error: error?.message}));
    }
  }
}

export default function* medicationListRuntime() {
  yield takeLatest(MEDICATION_LIST_REQUEST, fetchMedicationList);
}
