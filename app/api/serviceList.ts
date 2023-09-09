import axios, {AxiosPromise} from 'axios';
import {apiBaseURL, endPoints, httpMethods} from '../config';

import {serviceList} from '../redux/typings/serviceList';

export const serviceListApi =
  (): AxiosPromise<serviceList.ServiceListResponse> => {
    const config = {
      method: httpMethods.get,
      url: apiBaseURL + endPoints.serviceList,
      headers: {
        'Content-Type': 'multipart/form-data;',
      },
    };

    return axios(config);
  };
