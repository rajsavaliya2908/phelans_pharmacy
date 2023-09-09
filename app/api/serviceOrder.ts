import axios, {AxiosPromise} from 'axios';
import {apiBaseURL, endPoints, httpMethods} from '../config';
import {serviceOrder} from '../redux/typings/serviceOrder';

export const serviceOrderApi = ({
  user_id,
  service_id,
  service_text,
  store_id,
}: serviceOrder.ServiceOrderRequestPayload): AxiosPromise<serviceOrder.ServiceOrderSuccess> => {
  const formData = new FormData();
  formData.append('service_id', service_id);
  formData.append('store_id', store_id);
  formData.append('user_id', user_id);
  formData.append('service_text', service_text);
  const config = {
    method: httpMethods.post,
    url: apiBaseURL + endPoints.servcieOrder,
    headers: {
      'Content-Type': 'multipart/form-data;',
    },
    data: formData,
  };

  return axios(config);
};
