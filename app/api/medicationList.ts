import axios, {AxiosPromise} from 'axios';
import {apiBaseURL, endPoints, httpMethods} from '../config';
import {medicationList} from '../redux/typings/medicationList';

export const medicationListApi = ({
  user_id,
}: medicationList.MedicationListRequestPayload): AxiosPromise<medicationList.MedicationListSuccess> => {
  const formData = new FormData();
  formData.append('user_id', user_id);
  const config = {
    method: httpMethods.post,
    url: apiBaseURL + endPoints.medicationList,
    headers: {
      'Content-Type': 'multipart/form-data;',
    },
    data: formData,
  };

  return axios(config);
};
