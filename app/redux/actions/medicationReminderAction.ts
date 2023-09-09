import {
  MEDICATION_REMINDER_REQUEST,
  MEDICATION_REMINDER_SUCCESS,
  MEDICATION_REMINDER_FAILURE,
} from '../types';
import {medicationReminder} from '../typings/medicationReminder';

export const medicationReminderRequest = (
  payload: medicationReminder.MedicationReminderRequestPayload,
): medicationReminder.MedicationReminderRequest => ({
  type: MEDICATION_REMINDER_REQUEST,
  payload,
});

export const medicationReminderSuccess = (
  payload: medicationReminder.MedicationReminderSuccessPayload,
): medicationReminder.MedicationReminderSuccess => ({
  type: MEDICATION_REMINDER_SUCCESS,
  payload,
});

export const medicationReminderFailure = (
  payload: medicationReminder.MedicationReminderFailurePayload,
): medicationReminder.MedicationReminderFailure => ({
  type: MEDICATION_REMINDER_FAILURE,
  payload,
});
