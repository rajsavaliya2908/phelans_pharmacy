import {
  MEDICATION_LIST_REQUEST,
  MEDICATION_LIST_SUCCESS,
  MEDICATION_LIST_FAILURE,
} from '../types';
import {medicationList} from '../typings/medicationList';

export const medicationListRequest = (
  payload: medicationList.MedicationListRequestPayload,
): medicationList.MedicationListRequest => ({
  type: MEDICATION_LIST_REQUEST,
  payload,
});

export const medicationListSuccess = (
  payload: medicationList.reminderInfo[],
): medicationList.MedicationListSuccess => ({
  type: MEDICATION_LIST_SUCCESS,
  payload,
});

export const medicationListFailure = (
  payload: medicationList.MedicationListFailurePayload,
): medicationList.MedicationListFailure => ({
  type: MEDICATION_LIST_FAILURE,
  payload,
});
