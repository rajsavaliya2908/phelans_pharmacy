import {
  DELETE_MEDICATION_FAILURE,
  DELETE_MEDICATION_REQUEST,
  DELETE_MEDICATION_SUCCESS,
} from '../../types';

declare namespace deleteMedication {
  interface DeleteMedicationResponse {
    status: string;
    result: string;
  }
  interface DeleteMedicationErrorResponse {
    status: string;
    result: string;
  }

  interface DeleteMedicationRequestPayload {
    id: string;
    user_id: string;
  }

  interface DeleteMedicationSuccessPayload {
    result: string;
  }

  interface DeleteMedicationFailurePayload {
    error: string;
  }

  interface DeleteMedicationProps {
    loading: boolean;
    deleteMedicationResponse: {result: string};
    error: string;
  }

  // Action type
  interface DeleteMedicationRequest {
    type: typeof DELETE_MEDICATION_REQUEST;
    payload: DeleteMedicationRequestPayload;
  }
  type DeleteMedicationSuccess = {
    type: typeof DELETE_MEDICATION_SUCCESS;
    payload: DeleteMedicationSuccessPayload;
  };

  type DeleteMedicationFailure = {
    type: typeof DELETE_MEDICATION_FAILURE;
    payload: DeleteMedicationFailurePayload;
  };

  type ActionsDeleteMedication =
    | DeleteMedicationRequest
    | DeleteMedicationSuccess
    | DeleteMedicationFailure;
}
