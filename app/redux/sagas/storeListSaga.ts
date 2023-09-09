import {AxiosError, AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import {storeListApi} from '../../api/storeList';
import aesUtil from '../../utils/aesUtil';
import {Constant} from '../../utils/constants';
import Methods from '../../utils/methods';

import {storeListFailure, storeListSuccess} from '../actions/storeListAction';

import {STORE_LIST_REQUEST} from '../types';
import {storeList} from '../typings/storeList';

function* fetchStoreList() {
  try {
    const response: AxiosResponse<storeList.StoreListResponse> = yield call(
      storeListApi,
    );
    if (response?.status === 200) {
      const decryptResponse = aesUtil.decrypt(response.data.result)
        ? aesUtil.decrypt(response.data.result)
        : [];
      const responseData = decryptResponse
        ? JSON.parse(decryptResponse as string)
        : [];
      Methods.savePref(Constant.storeList, responseData);
      yield put(storeListSuccess(responseData as storeList.storeDetail[]));
    }
  } catch (err) {
    const error = err as AxiosError<storeList.StoreListErrorResponse>;
    if (error?.response?.data) {
      yield put(
        storeListFailure({
          error: error?.response?.data.result,
        }),
      );
    } else {
      yield put(storeListFailure({error: error?.message}));
    }
    // showPopUpToast('success', error?.response?.data?.message || error?.message);
  }
}

export default function* storeListRuntime() {
  yield takeLatest(STORE_LIST_REQUEST, fetchStoreList);
}
