import {
  PRESCRIPTION_ORDER_REQUEST,
  PRESCRIPTION_ORDER_SUCCESS,
  PRESCRIPTION_ORDER_FAILURE,
} from '../types';
import {prescriptionOrder} from '../typings/prescriptionOrder';

const initialState = {
  loading: false,
  prescriptionOrderResponse: {status: ''},
  error: null,
};

const prescriptionOrderReducer = (
  state = initialState,
  action: prescriptionOrder.ActionsPrescriptionOrder,
) => {
  switch (action.type) {
    case PRESCRIPTION_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case PRESCRIPTION_ORDER_SUCCESS:
      return {
        ...state,
        prescriptionOrderResponse: action.payload,
        loading: false,
        error: null,
      };

    case PRESCRIPTION_ORDER_FAILURE:
      return {
        ...state,
        prescriptionOrderResponse: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default prescriptionOrderReducer;
