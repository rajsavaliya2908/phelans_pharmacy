import {
  USER_LIST_FAILURE,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
} from '../types';
import {userList} from '../typings/userList';

const initialState = {
  loading: false,
  userListResponse: [],
  error: '',
};

const userListReducer = (
  state = initialState as userList.UserListProps,
  action: userList.ActionsUserList,
) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case USER_LIST_SUCCESS:
      return {
        ...state,
        userListResponse: action.payload,
        loading: false,
        error: null,
      };

    case USER_LIST_FAILURE:
      return {
        ...state,
        userListResponse: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userListReducer;
