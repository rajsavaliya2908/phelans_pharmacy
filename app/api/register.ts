import axios, {AxiosPromise} from 'axios';
import {apiBaseURL, endPoints, httpMethods} from '../config';
import {register} from '../redux/typings/register';

export const registerApi = ({
  name,
  email,
  password,
  address,
  date_of_birth,
  store_id,
  phone,
  accept_promo_mails,
  device_type,
  device_token,
}: register.UserRegisterRequestPayload): AxiosPromise<register.RegisterResponse> => {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('password', password);
  formData.append('address', address);
  formData.append('date_of_birth', date_of_birth);
  formData.append('store_id', store_id);
  formData.append('accept_promo_mails', accept_promo_mails);
  formData.append('device_type', device_type);
  formData.append('device_token', device_token);
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data;',
    },
    method: httpMethods.post,
    url: apiBaseURL + endPoints.register,
    data: formData,
  };

  return axios(config);
};
