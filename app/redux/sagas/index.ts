import {all} from 'redux-saga/effects';
import addUserRuntime from './adduserSaga';
import registerRuntime from './registerSaga';
import signInRuntime from './signInSaga';
import storeListRuntime from './storeListSaga';
import userListRuntime from './userListSaga';
import serviceListRuntime from './serviceListSaga';
import prescriptionOrderRuntime from './prescriptionOrderSaga';
import serviceOrderRuntime from './serviceOrderSaga';
import medicationListRuntime from './medicationListSaga';
import medicationReminderRuntime from './medicationReminderSaga';
import editMedicationRuntime from './editMedication';
import deleteMedicationRuntime from './deleteMedication';
import myPharmacyRuntime from './myPharmacySaga';
import userProfileRuntime from './userProfileSaga';
import editProfileRuntime from './editProfileSaga';
import forgetPasswordRunTime from './forgotPasswordSaga';

export default function* rootSaga() {
  yield all([
    signInRuntime(),
    registerRuntime(),
    addUserRuntime(),
    storeListRuntime(),
    userListRuntime(),
    serviceListRuntime(),
    prescriptionOrderRuntime(),
    serviceOrderRuntime(),
    medicationListRuntime(),
    medicationReminderRuntime(),
    editMedicationRuntime(),
    deleteMedicationRuntime(),
    myPharmacyRuntime(),
    userProfileRuntime(),
    editProfileRuntime(),
    forgetPasswordRunTime(),
  ]);
}
