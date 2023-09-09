import axios, {AxiosPromise} from 'axios';
import {apiBaseURL, endPoints, httpMethods} from '../config';
import {callNow} from '../redux/typings/callNow';

export const callNowApi = ({
  store_id,
  user_id,
}: callNow.CallNowRequestPayload): AxiosPromise<callNow.CallNowResponse> => {
  const formData = new FormData();
  formData.append('store_id', store_id);
  formData.append('user_id', user_id);
  const config = {
    method: httpMethods.post,
    url: apiBaseURL + endPoints.callNow,
    headers: {
      'Content-Type': 'multipart/form-data;',
    },
    data: formData,
  };

  return axios(config);
};
