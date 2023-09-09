import axios, {AxiosPromise} from 'axios';
import {apiBaseURL, endPoints, httpMethods} from '../config';
import {deleteMedication} from '../redux/typings/deleteMedication';

export const deleteMedicationApi = ({
  id,
}: deleteMedication.DeleteMedicationRequestPayload): AxiosPromise<deleteMedication.DeleteMedicationSuccess> => {
  const formData = new FormData();
  formData.append('id', id);
  const config = {
    method: httpMethods.post,
    url: apiBaseURL + endPoints.deleteMedication,
    headers: {
      'Content-Type': 'multipart/form-data;',
    },
    data: formData,
  };

  return axios(config);
};
