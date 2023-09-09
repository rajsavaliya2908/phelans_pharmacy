import axios, {AxiosPromise} from 'axios';
import {apiBaseURL, endPoints, httpMethods} from '../config';
import {addUser} from '../redux/typings/addUser';
import {userList} from '../redux/typings/userList';

export const userListApi = ({
  user_id,
}: userList.UserListRequestPayload): AxiosPromise<userList.UserListSuccess> => {
  const formData = new FormData();
  formData.append('user_id', user_id);
  const config = {
    method: httpMethods.post,
    url: apiBaseURL + endPoints.userList,
    headers: {
      'Content-Type': 'multipart/form-data;',
    },
    data: formData,
  };

  return axios(config);
};
