import axios, {AxiosPromise} from 'axios';
import {apiBaseURL, endPoints, httpMethods} from '../config';
import {addUser} from '../redux/typings/addUser';

export const addUserApi = ({
  name,
  email,
  password,
  address,
  date_of_birth,
  store_id,
  phone,
  user_id,
}: addUser.AddUserRequestPayload): AxiosPromise<addUser.AddUserSuccess> => {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('password', password);
  formData.append('address', address);
  formData.append('date_of_birth', date_of_birth);
  formData.append('store_id', store_id);
  formData.append('user_id', user_id);
  formData.append('phone', phone);
  const config = {
    method: httpMethods.post,
    url: apiBaseURL + endPoints.addUser,
    headers: {
      'Content-Type': 'multipart/form-data;',
    },
    data: formData,
  };

  return axios(config);
};
