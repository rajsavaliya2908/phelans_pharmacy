import {AxiosError, AxiosResponse} from 'axios';
import {Alert} from 'react-native';
import {call, put, takeLatest} from 'redux-saga/effects';
import aesUtil from '../../utils/aesUtil';
import string from '../../utils/string';
import {DELETE_MEDICATION_REQUEST} from '../types';
import {
  deleteMedicationFailure,
  deleteMedicationSuccess,
} from '../actions/deleteMedicationAction';
import {deleteMedicationApi} from '../../api/deleteMedication';
import {deleteMedication} from '../typings/deleteMedication';
import {medicationListRequest} from '../actions/medicationListAction';

function* deleteMedicationSaga({
  payload,
}: deleteMedication.DeleteMedicationRequest) {
  try {
    const response: AxiosResponse<deleteMedication.DeleteMedicationResponse> =
      yield call(deleteMedicationApi, payload);
    if (response?.data.status === 'success') {
      const decryptResponse = aesUtil.decrypt(response.data.result)
        ? aesUtil.decrypt(response.data.result)
        : '';
      const responseData = decryptResponse
        ? JSON.parse(decryptResponse as string)
        : [];
      yield put(deleteMedicationSuccess({result: responseData}));
      yield put(medicationListRequest({user_id: payload.user_id}));
    } else {
      const decryptError = aesUtil.decrypt(response.data.result)
        ? aesUtil.decrypt(response.data.result)
        : [];
      const responseData = decryptError
        ? JSON.parse(decryptError as string)
        : [];
      yield put(
        deleteMedicationFailure({
          error: responseData,
        }),
      );
      Alert.alert(string.appName, responseData);
    }
  } catch (err) {
    const error =
      err as AxiosError<deleteMedication.DeleteMedicationErrorResponse>;
    if (error?.response?.data) {
      yield put(
        deleteMedicationFailure({
          error: error?.response?.data.result,
        }),
      );
      Alert.alert(string.appName, error?.response?.data.result);
    } else {
      yield put(deleteMedicationFailure({error: error?.message}));
      Alert.alert(string.appName, error?.message);
    }
  }
}

export default function* deleteMedicationRuntime() {
  yield takeLatest(DELETE_MEDICATION_REQUEST, deleteMedicationSaga);
}
