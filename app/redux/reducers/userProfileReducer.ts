import {
  USER_PROFILE_FAILURE,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
} from '../types';
import {userProfile} from '../typings/userProfile';

const initialState = {
  loading: false,
  userProfileResponse: {},
  error: '',
};

const userProfileReducer = (
  state = initialState as userProfile.UserProfileProps,
  action: userProfile.ActionsUserProfile,
) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfileResponse: action.payload,
        loading: false,
        error: null,
      };

    case USER_PROFILE_FAILURE:
      return {
        ...state,
        userProfileResponse: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userProfileReducer;
