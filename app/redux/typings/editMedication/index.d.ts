import {
  EDIT_MEDICATION_FAILURE,
  EDIT_MEDICATION_REQUEST,
  EDIT_MEDICATION_SUCCESS,
} from '../../types';

declare namespace editMedication {
  interface EditMedicationResponse {
    status: string;
    result: string;
  }
  interface EditMedicationErrorResponse {
    status: string;
    result: string;
  }

  interface EditMedicationRequestPayload {
    id: string;
    set_time: string;
    next_date: string;
    frequency: string;
    reminder_text: string;
  }

  interface EditMedicationSuccessPayload {
    status: string;
  }
  interface EditMedicationFailurePayload {
    error: string;
  }
  interface EditMedicationProps {
    loading: boolean;
    editMedicationResponse: {status: string};
    error: string;
  }

  // Action type
  interface EditMedicationRequest {
    type: typeof EDIT_MEDICATION_REQUEST;
    payload: EditMedicationRequestPayload;
  }
  type EditMedicationSuccess = {
    type: typeof EDIT_MEDICATION_SUCCESS;
    payload: EditMedicationSuccessPayload;
  };

  type EditMedicationFailure = {
    type: typeof EDIT_MEDICATION_FAILURE;
    payload: EditMedicationFailurePayload;
  };

  type ActionsEditMedication =
    | EditMedicationRequest
    | EditMedicationSuccess
    | EditMedicationFailure;
}
