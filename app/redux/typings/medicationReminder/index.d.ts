import {
  MEDICATION_REMINDER_FAILURE,
  MEDICATION_REMINDER_REQUEST,
  MEDICATION_REMINDER_SUCCESS,
} from '../../types';

declare namespace medicationReminder {
  interface MedicationReminderResponse {
    status: string;
    result: string;
  }
  interface MedicationReminderErrorResponse {
    status: string;
    result: string;
  }

  interface MedicationReminderRequestPayload {
    user_id: string;
    store_id: string;
    set_time: string;
    next_date: string;
    frequency: string;
    reminder_text: string;
  }

  interface MedicationReminderSuccessPayload {
    result: string;
  }
  interface MedicationReminderFailurePayload {
    error: string;
  }
  interface MedicationReminderProps {
    loading: boolean;
    medicationReminderResponse: {result: string};
    error: string;
  }

  // Action type
  interface MedicationReminderRequest {
    type: typeof MEDICATION_REMINDER_REQUEST;
    payload: MedicationReminderRequestPayload;
  }
  type MedicationReminderSuccess = {
    type: typeof MEDICATION_REMINDER_SUCCESS;
    payload: MedicationReminderSuccessPayload;
  };

  type MedicationReminderFailure = {
    type: typeof MEDICATION_REMINDER_FAILURE;
    payload: MedicationReminderFailurePayload;
  };

  type ActionsMedicationReminder =
    | MedicationReminderRequest
    | MedicationReminderSuccess
    | MedicationReminderFailure;
}
