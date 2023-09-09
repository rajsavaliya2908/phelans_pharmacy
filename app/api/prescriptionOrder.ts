import axios, {AxiosPromise} from 'axios';
import {apiBaseURL, endPoints, httpMethods} from '../config';
import {prescriptionOrder} from '../redux/typings/prescriptionOrder';

export const prescriptionOrderApi = ({
  user_id,
  store_id,
  prescription_text,
  collection_time,
  prescription_file,
  app_version,
}: prescriptionOrder.PrescriptionOrderRequestPayload): AxiosPromise<prescriptionOrder.PrescriptionOrderSuccess> => {
  const formData = new FormData();
  formData.append('user_id', user_id);
  formData.append('store_id', store_id);
  formData.append('prescription_text', prescription_text);
  formData.append('collection_time', collection_time);
  if (prescription_file) {
    formData.append('uploadedfile1', prescription_file);
  }
  formData.append('app_version', app_version);

  const config = {
    method: httpMethods.post,
    url: apiBaseURL + endPoints.prescriptionFile,
    headers: {
      'Content-Type': 'multipart/form-data;',
    },
    data: formData,
  };

  return axios(config);
};
