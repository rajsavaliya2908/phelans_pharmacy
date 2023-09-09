import {AxiosError, AxiosResponse} from 'axios';
import {Alert} from 'react-native';
import {call, put, takeLatest} from 'redux-saga/effects';
import aesUtil from '../../utils/aesUtil';
import string from '../../utils/string';
import {MEDICATION_REMINDER_REQUEST} from '../types';
import {
  medicationReminderFailure,
  medicationReminderSuccess,
} from '../actions/medicationReminderAction';
import {medicationReminderApi} from '../../api/medicationReminder';
import {medicationReminder} from '../typings/medicationReminder';
import {navigationRef} from '../../navigation';

function* medicationReminderSaga({
  payload,
}: medicationReminder.MedicationReminderRequest) {
  try {
    const response: AxiosResponse<medicationReminder.MedicationReminderResponse> =
      yield call(medicationReminderApi, payload);
    if (response?.data.status === 'success') {
      const decryptResponse = aesUtil.decrypt(response.data.result)
        ? aesUtil.decrypt(response.data.result)
        : '';
      const responseData = decryptResponse
        ? JSON.parse(decryptResponse as string)
        : [];
      Alert.alert(string.appName, payload.reminder_text);
      yield put(medicationReminderSuccess({result: responseData}));
      navigationRef.goBack();
    } else {
      const decryptError = aesUtil.decrypt(response.data.result)
        ? aesUtil.decrypt(response.data.result)
        : [];
      const responseData = decryptError
        ? JSON.parse(decryptError as string)
        : [];
      yield put(
        medicationReminderFailure({
          error: responseData,
        }),
      );
      Alert.alert(string.appName, responseData);
    }
  } catch (err) {
    const error =
      err as AxiosError<medicationReminder.MedicationReminderErrorResponse>;
    if (error?.response?.data) {
      yield put(
        medicationReminderFailure({
          error: error?.response?.data.result,
        }),
      );
      Alert.alert(string.appName, error?.response?.data.result);
    } else {
      yield put(medicationReminderFailure({error: error?.message}));
      Alert.alert(string.appName, error?.message);
    }
  }
}

export default function* medicationReminderRuntime() {
  yield takeLatest(MEDICATION_REMINDER_REQUEST, medicationReminderSaga);
}
