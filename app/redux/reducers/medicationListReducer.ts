import {
  MEDICATION_LIST_REQUEST,
  MEDICATION_LIST_SUCCESS,
  MEDICATION_LIST_FAILURE,
} from '../types';
import {medicationList} from '../typings/medicationList';

const initialState = {
  loading: false,
  medicationListResponse: [],
  error: '',
};

const medicationListReducer = (
  state = initialState as medicationList.MedicationListProps,
  action: medicationList.ActionsMedicationList,
) => {
  switch (action.type) {
    case MEDICATION_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case MEDICATION_LIST_SUCCESS:
      return {
        ...state,
        medicationListResponse: action.payload,
        loading: false,
        error: null,
      };

    case MEDICATION_LIST_FAILURE:
      return {
        ...state,
        medicationListResponse: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default medicationListReducer;
