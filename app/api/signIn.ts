import axios, {AxiosPromise} from 'axios';
import {apiBaseURL, endPoints, httpMethods} from '../config';
import styleConfig from '../config/styleConfig';

import {signIn} from '../redux/typings/signIn';

export const signInApi = ({
  email,
  password,
  device_token,
  device_type,
}: signIn.UserSignInRequestPayload): AxiosPromise<signIn.SignInResponse> => {
  const data = new FormData();
  data.append('email', email);
  data.append('password', password);
  data.append('device_token', device_token);
  data.append('device_type', device_type);
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    method: httpMethods.post,
    url: apiBaseURL + endPoints.signIn,
    data: data,
  };

  return axios(config);
};
