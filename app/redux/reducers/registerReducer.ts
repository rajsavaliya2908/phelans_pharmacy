import {REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS} from '../types';
import {register} from '../typings/register';

const initialState = {
  loading: false,
  registerResponse:'',
  error: null,
};

const registerReducer = (
  state = initialState,
  action: register.ActionsRegister,
) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        registerResponse: action.payload,
        loading: false,
        error: null,
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        registerResponse: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default registerReducer;
