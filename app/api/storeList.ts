import axios, {AxiosPromise} from 'axios';
import {apiBaseURL, endPoints, httpMethods} from '../config';

import {storeList} from '../redux/typings/storeList';

export const storeListApi = (): AxiosPromise<storeList.StoreListResponse> => {
  const config = {
    method: httpMethods.get,
    url: apiBaseURL + endPoints.storeList,
    headers: {
      'Content-Type': 'multipart/form-data;',
    },
  };

  return axios(config);
};
