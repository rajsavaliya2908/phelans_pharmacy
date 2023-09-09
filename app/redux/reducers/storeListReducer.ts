import {
  STORE_LIST_FAILURE,
  STORE_LIST_REQUEST,
  STORE_LIST_SUCCESS,
} from '../types';
import {storeList} from '../typings/storeList';

const initialState = {
  loading: false,
  storeListResponse: [],
  error: '',
};

const storeListReducer = (
  state = initialState as storeList.storeListProps,
  action: storeList.ActionsStoreList,
) => {
  switch (action.type) {
    case STORE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case STORE_LIST_SUCCESS:
      return {
        ...state,
        storeListResponse: action.payload,
        loading: false,
        error: null,
      };

    case STORE_LIST_FAILURE:
      return {
        ...state,
        storeListResponse: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default storeListReducer;
