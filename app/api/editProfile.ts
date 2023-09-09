import axios, {AxiosPromise} from 'axios';
import {apiBaseURL, endPoints, httpMethods} from '../config';
import {editProfile} from '../redux/typings/editProfile';

export const editProfileApi = ({
  address,
  date_of_birth,
  name,
  phone,
  store_id,
  user_id,
}: editProfile.EditProfileRequestPayload): AxiosPromise<editProfile.EditProfileSuccess> => {
  const formData = new FormData();
  formData.append('store_id', store_id);
  formData.append('phone', phone);
  formData.append('date_of_birth', date_of_birth);
  formData.append('name', name);
  formData.append('user_id', user_id);
  formData.append('address', address);
  const config = {
    method: httpMethods.post,
    url: apiBaseURL + endPoints.updateProfile,
    headers: {
      'Content-Type': 'multipart/form-data;',
    },
    data: formData,
  };

  return axios(config);
};
