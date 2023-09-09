import axios, {AxiosPromise} from 'axios';
import {apiBaseURL, endPoints, httpMethods} from '../config';
import {editMedication} from '../redux/typings/editMedication';

export const editMedicationApi = ({
  frequency,
  next_date,
  reminder_text,
  set_time,
  id,
}: editMedication.EditMedicationRequestPayload): AxiosPromise<editMedication.EditMedicationSuccess> => {
  const formData = new FormData();
  formData.append('frequency', frequency);
  formData.append('next_date', next_date);
  formData.append('reminder_text', reminder_text);
  formData.append('set_time', set_time);
  formData.append('id', id);
  const config = {
    method: httpMethods.post,
    url: apiBaseURL + endPoints.updateMedication,
    headers: {
      'Content-Type': 'multipart/form-data;',
    },
    data: formData,
  };

  return axios(config);
};
