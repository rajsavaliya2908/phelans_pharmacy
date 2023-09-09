import {
  MEDICATION_REMINDER_FAILURE,
  MEDICATION_REMINDER_REQUEST,
  MEDICATION_REMINDER_SUCCESS,
} from '../types';
import {medicationReminder} from '../typings/medicationReminder';

const initialState = {
  loading: false,
  medicationReminderResponse: {result: ''},
  error: '',
};

const medicationListReducer = (
  state = initialState as medicationReminder.MedicationReminderProps,
  action: medicationReminder.ActionsMedicationReminder,
) => {
  switch (action.type) {
    case MEDICATION_REMINDER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case MEDICATION_REMINDER_SUCCESS:
      return {
        ...state,
        medicationReminderResponse: action.payload,
        loading: false,
        error: null,
      };

    case MEDICATION_REMINDER_FAILURE:
      return {
        ...state,
        medicationReminderResponse: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default medicationListReducer;
