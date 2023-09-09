import {
  SERVICE_ORDER_FAILURE,
  SERVICE_ORDER_REQUEST,
  SERVICE_ORDER_SUCCESS,
} from '../types';
import {serviceOrder} from '../typings/serviceOrder';

const initialState = {
  loading: false,
  serviceOrderResponse: {status: ''},
  error: null,
};

const serviceOrderReducer = (
  state = initialState,
  action: serviceOrder.ActionsServiceOrder,
) => {
  switch (action.type) {
    case SERVICE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SERVICE_ORDER_SUCCESS:
      return {
        ...state,
        serviceOrderResponse: action.payload,
        loading: false,
        error: null,
      };

    case SERVICE_ORDER_FAILURE:
      return {
        ...state,
        serviceOrderResponse: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default serviceOrderReducer;
