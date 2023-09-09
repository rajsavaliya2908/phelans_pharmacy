import {ADD_USER_FAILURE, ADD_USER_REQUEST, ADD_USER_SUCCESS} from '../types';
import {addUser} from '../typings/addUser';

const initialState = {
  loading: false,
  addUserResponse: {status: ''},
  error: null,
};

const addUserReducer = (
  state = initialState,
  action: addUser.ActionsAddUser,
) => {
  switch (action.type) {
    case ADD_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ADD_USER_SUCCESS:
      return {
        ...state,
        addUserResponse: action.payload,
        loading: false,
        error: null,
      };

    case ADD_USER_FAILURE:
      return {
        ...state,
        addUserResponse: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default addUserReducer;
