import axios, {AxiosPromise} from 'axios';
import {apiBaseURL, endPoints, httpMethods} from '../config';
import {forgotPassword} from '../redux/typings/forgotPassword';

export const forgotPasswordApi = ({
  email,
}: forgotPassword.ForgotPasswordRequestPayload): AxiosPromise<forgotPassword.forgotPasswordResponse> => {
  const formData = new FormData();
  formData.append('email', email);
  const config = {
    method: httpMethods.post,
    url: apiBaseURL + endPoints.forgotPassword,
    headers: {
      'Content-Type': 'multipart/form-data;',
    },
    data: formData,
  };

  return axios(config);
};
