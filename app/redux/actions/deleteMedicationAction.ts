import {
  DELETE_MEDICATION_FAILURE,
  DELETE_MEDICATION_REQUEST,
  DELETE_MEDICATION_SUCCESS,
} from '../types';
import {deleteMedication} from '../typings/deleteMedication';

export const deleteMedicationRequest = (
  payload: deleteMedication.DeleteMedicationRequestPayload,
): deleteMedication.DeleteMedicationRequest => ({
  type: DELETE_MEDICATION_REQUEST,
  payload,
});

export const deleteMedicationSuccess = (
  payload: deleteMedication.DeleteMedicationSuccessPayload,
): deleteMedication.DeleteMedicationSuccess => ({
  type: DELETE_MEDICATION_SUCCESS,
  payload,
});

export const deleteMedicationFailure = (
  payload: deleteMedication.DeleteMedicationFailurePayload,
): deleteMedication.DeleteMedicationFailure => ({
  type: DELETE_MEDICATION_FAILURE,
  payload,
});
