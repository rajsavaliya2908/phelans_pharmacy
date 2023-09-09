import axios, {AxiosPromise} from 'axios';
import {apiBaseURL, endPoints, httpMethods} from '../config';

import {userProfile} from '../redux/typings/userProfile';

export const userProfileApi = ({
  user_id,
}: userProfile.UserProfileRequestPayload): AxiosPromise<userProfile.UserProfileSuccess> => {
  const formData = new FormData();
  console.log(user_id, '~~~~~~~~~~~~~~~~user_iduser_id');
  formData.append('user_id', user_id);
  const config = {
    method: httpMethods.post,
    url: apiBaseURL + endPoints.userProfile,
    headers: {
      'Content-Type': 'multipart/form-data;',
    },
    data: formData,
  };

  return axios(config);
};
