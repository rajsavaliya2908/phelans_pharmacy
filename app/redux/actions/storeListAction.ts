import {
  STORE_LIST_FAILURE,
  STORE_LIST_REQUEST,
  STORE_LIST_SUCCESS,
} from '../types';
import {storeList} from '../typings/storeList';

export const storeListRequest = (): storeList.StoreListRequest => ({
  type: STORE_LIST_REQUEST,
});

export const storeListSuccess = (
  payload: storeList.storeDetail[],
): storeList.StoreListSuccess => ({
  type: STORE_LIST_SUCCESS,
  payload,
});

export const storeListFailure = (
  payload: storeList.StoreListFailurePayload,
): storeList.StoreListFailure => ({
  type: STORE_LIST_FAILURE,
  payload,
});
