import {
  EDIT_MEDICATION_REQUEST,
  EDIT_MEDICATION_FAILURE,
  EDIT_MEDICATION_SUCCESS,
} from '../types';
import {editMedication} from '../typings/editMedication';

const initialState = {
  loading: false,
  editMedicationResponse: {status: ''},
  error: '',
};

const editMedicationReducer = (
  state = initialState as editMedication.EditMedicationProps,
  action: editMedication.ActionsEditMedication,
) => {
  switch (action.type) {
    case EDIT_MEDICATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case EDIT_MEDICATION_SUCCESS:
      return {
        ...state,
        editMedicationResponse: action.payload,
        loading: false,
        error: null,
      };

    case EDIT_MEDICATION_FAILURE:
      return {
        ...state,
        editMedicationResponse: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default editMedicationReducer;
