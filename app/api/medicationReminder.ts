import axios, {AxiosPromise} from 'axios';
import {apiBaseURL, endPoints, httpMethods} from '../config';
import {medicationReminder} from '../redux/typings/medicationReminder';

export const medicationReminderApi = ({
  frequency,
  next_date,
  reminder_text,
  set_time,
  store_id,
  user_id,
}: medicationReminder.MedicationReminderRequestPayload): AxiosPromise<medicationReminder.MedicationReminderSuccess> => {
  const formData = new FormData();
  formData.append('frequency', frequency);
  formData.append('next_date', next_date);
  formData.append('reminder_text', reminder_text);
  formData.append('set_time', set_time);
  formData.append('store_id', store_id);
  formData.append('user_id', user_id);
  const config = {
    method: httpMethods.post,
    url: apiBaseURL + endPoints.medicationReminder,
    headers: {
      'Content-Type': 'multipart/form-data;',
    },
    data: formData,
  };

  return axios(config);
};
