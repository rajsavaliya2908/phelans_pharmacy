import axios, {AxiosPromise} from 'axios';
import {apiBaseURL, endPoints, httpMethods} from '../config';
import styleConfig from '../config/styleConfig';

import {myPharmacy} from '../redux/typings/myPharmacy';

export const myPharmacyApi = ({
  user_id,
  store_id,
}: myPharmacy.MyPharmacyRequestPayload): AxiosPromise<myPharmacy.MyPharmacyResponse> => {
  const data = new FormData();
  data.append('user_id', user_id);
  data.append('store_id', store_id);
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    method: httpMethods.post,
    url: apiBaseURL + endPoints.myPharmacy,
    data: data,
  };

  return axios(config);
};
