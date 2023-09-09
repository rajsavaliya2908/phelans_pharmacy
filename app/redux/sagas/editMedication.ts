import {AxiosError, AxiosResponse} from 'axios';
import {Alert} from 'react-native';
import {call, put, takeLatest} from 'redux-saga/effects';
import aesUtil from '../../utils/aesUtil';
import string from '../../utils/string';
import {EDIT_MEDICATION_REQUEST} from '../types';
import {
  editMedicationFailure,
  editMedicationSuccess,
} from '../actions/editMedicationAction';
import {editMedicationApi} from '../../api/editMedication';
import {editMedication} from '../typings/editMedication';
import {navigationRef} from '../../navigation';

function* editMedicationSaga({payload}: editMedication.EditMedicationRequest) {
  try {
    const response: AxiosResponse<editMedication.EditMedicationResponse> =
      yield call(editMedicationApi, payload);
    if (response?.data.status === 'success') {
      const decryptResponse = aesUtil.decrypt(response.data.status)
        ? aesUtil.decrypt(response.data.status)
        : '';
      const responseData = decryptResponse
        ? JSON.parse(decryptResponse as string)
        : [];
      Alert.alert(string.appName, payload.reminder_text);
      yield put(editMedicationSuccess({status: responseData}));
      navigationRef.goBack();
    } else {
      const decryptError = aesUtil.decrypt(response.data.result)
        ? aesUtil.decrypt(response.data.result)
        : [];
      const responseData = decryptError
        ? JSON.parse(decryptError as string)
        : [];
      yield put(
        editMedicationFailure({
          error: responseData,
        }),
      );
      Alert.alert(string.appName, responseData);
    }
  } catch (err) {
    const error = err as AxiosError<editMedication.EditMedicationErrorResponse>;
    if (error?.response?.data) {
      yield put(
        editMedicationFailure({
          error: error?.response?.data.result,
        }),
      );
      Alert.alert(string.appName, error?.response?.data.result);
    } else {
      yield put(editMedicationFailure({error: error?.message}));
      Alert.alert(string.appName, error?.message);
    }
  }
}

export default function* editMedicationRuntime() {
  yield takeLatest(EDIT_MEDICATION_REQUEST, editMedicationSaga);
}
