import {
  SERVICE_LIST_FAILURE,
  SERVICE_LIST_REQUEST,
  SERVICE_LIST_SUCCESS,
} from '../types';
import {serviceList} from '../typings/serviceList';

const initialState = {
  loading: false,
  serviceListResponse: [],
  error: '',
};

const serviceListReducer = (
  state = initialState as serviceList.ServiceListProps,
  action: serviceList.ActionsServiceList,
) => {
  switch (action.type) {
    case SERVICE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SERVICE_LIST_SUCCESS:
      return {
        ...state,
        serviceListResponse: action.payload,
        loading: false,
        error: null,
      };

    case SERVICE_LIST_FAILURE:
      return {
        ...state,
        serviceListResponse: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default serviceListReducer;
