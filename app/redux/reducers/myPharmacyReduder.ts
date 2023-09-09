import {
  MY_PHARMACY_FAILURE,
  MY_PHARMACY_REQUEST,
  MY_PHARMACY_SUCCESS,
} from '../types';

import {myPharmacy} from '../typings/myPharmacy';

const initialState = {
  loading: false,
  myPharmacyResponse: [],
  error: '',
};

const myPharmacyReducer = (
  state = initialState as myPharmacy.MyPharmacyProps,
  action: myPharmacy.ActionsMyPharmacy,
) => {
  switch (action.type) {
    case MY_PHARMACY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case MY_PHARMACY_SUCCESS:
      return {
        ...state,
        myPharmacyResponse: action.payload,
        loading: false,
        error: null,
      };

    case MY_PHARMACY_FAILURE:
      return {
        ...state,
        myPharmacyResponse: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default myPharmacyReducer;
