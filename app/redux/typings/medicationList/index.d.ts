import {
  MEDICATION_LIST_REQUEST,
  MEDICATION_LIST_SUCCESS,
  MEDICATION_LIST_FAILURE,
} from '../../types';

declare namespace medicationList {
  interface MedicationListResponse {
    status: string;
    result: string;
  }

  interface MedicationListErrorResponse {
    status: string;
    result: string;
  }

  interface MedicationListRequestPayload {
    user_id: string;
  }

  type reminderInfo = {
    id: string;
    user_id: string;
    store_id: string;
    set_time: string;
    next_date: string;
    frequency: string;
    reminder_text: string;
    update_date: string;
    status: string;
    order_date: string;
  };

  interface MedicationListSuccessPayload {
    medicationListResponse: reminderInfo[];
  }

  interface MedicationListFailurePayload {
    error: string;
  }

  interface MedicationListProps {
    loading: boolean;
    medicationListResponse: reminderInfo[];
    error: string;
  }

  // Action type
  interface MedicationListRequest {
    type: typeof MEDICATION_LIST_REQUEST;
    payload: MedicationListRequestPayload;
  }

  type MedicationListSuccess = {
    type: typeof MEDICATION_LIST_SUCCESS;
    payload: reminderInfo[];
  };

  type MedicationListFailure = {
    type: typeof MEDICATION_LIST_FAILURE;
    payload: MedicationListFailurePayload;
  };

  type ActionsMedicationList =
    | MedicationListRequest
    | MedicationListSuccess
    | MedicationListFailure;
}
