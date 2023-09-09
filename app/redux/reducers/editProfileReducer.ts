import {
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_FAILURE,
  EDIT_PROFILE_SUCCESS,
} from '../types';
import {editProfile} from '../typings/editProfile';

const initialState = {
  loading: false,
  editProfileResponse: {status: ''},
  error: '',
};

const editProfileReducer = (
  state = initialState as editProfile.EditProfileProps,
  action: editProfile.ActionsEditProfile,
) => {
  switch (action.type) {
    case EDIT_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        editProfileResponse: action.payload,
        loading: false,
        error: null,
      };

    case EDIT_PROFILE_FAILURE:
      return {
        ...state,
        editProfileResponse: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default editProfileReducer;
