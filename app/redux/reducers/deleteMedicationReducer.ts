import {
  DELETE_MEDICATION_FAILURE,
  DELETE_MEDICATION_REQUEST,
  DELETE_MEDICATION_SUCCESS,
} from '../types';
import {deleteMedication} from '../typings/deleteMedication';

const initialState = {
  loading: false,
  deleteMedicationResponse: {result: ''},
  error: '',
};

const deleteMedicationReducer = (
  state = initialState as deleteMedication.DeleteMedicationProps,
  action: deleteMedication.ActionsDeleteMedication,
) => {
  switch (action.type) {
    case DELETE_MEDICATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case DELETE_MEDICATION_SUCCESS:
      return {
        ...state,
        deleteMedicationResponse: action.payload,
        loading: false,
        error: null,
      };

    case DELETE_MEDICATION_FAILURE:
      return {
        ...state,
        deleteMedicationResponse: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default deleteMedicationReducer;
