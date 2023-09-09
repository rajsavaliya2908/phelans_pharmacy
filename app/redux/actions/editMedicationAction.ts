import {
  EDIT_MEDICATION_REQUEST,
  EDIT_MEDICATION_SUCCESS,
  EDIT_MEDICATION_FAILURE,
} from '../types';
import {editMedication} from '../typings/editMedication';

export const editMedicationRequest = (
  payload: editMedication.EditMedicationRequestPayload,
): editMedication.EditMedicationRequest => ({
  type: EDIT_MEDICATION_REQUEST,
  payload,
});

export const editMedicationSuccess = (
  payload: editMedication.EditMedicationSuccessPayload,
): editMedication.EditMedicationSuccess => ({
  type: EDIT_MEDICATION_SUCCESS,
  payload,
});

export const editMedicationFailure = (
  payload: editMedication.EditMedicationFailurePayload,
): editMedication.EditMedicationFailure => ({
  type: EDIT_MEDICATION_FAILURE,
  payload,
});
