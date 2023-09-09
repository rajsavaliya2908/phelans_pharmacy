import {
  CALL_NOW_FAILURE,
  CALL_NOW_REQUEST,
  CALL_NOW_SUCCESS,
} from '../../types';

declare namespace callNow {
  interface CallNowResponse {
    status: string;
    result: string;
  }
  interface CallNowErrorResponse {
    status: string;
    result: string;
  }

  interface CallNowRequestPayload {
    user_id: string;
    store_id: string;
  }

  //   interface StoreService {
  //     service_id: string;
  //     service_name: string;
  //   }

  interface callInfo {
    id: string;
    store_name: string;
    telephone: string;
  }

  interface CallNowSuccessPayload {
    callNowResponse: callInfo[];
  }
  interface CallNowFailurePayload {
    error: string;
  }
  interface CallNowProps {
    loading: boolean;
    callNowResponse: callInfo[];
    error: string;
  }

  // Action type
  interface CallNowRequest {
    type: typeof CALL_NOW_REQUEST;
    payload: CallNowRequestPayload;
  }
  type CallNowSuccess = {
    type: typeof CALL_NOW_SUCCESS;
    payload: CallNowSuccessPayload;
  };

  type CallNowFailure = {
    type: typeof CALL_NOW_FAILURE;
    payload: CallNowFailurePayload;
  };

  type ActionsCallNow = CallNowRequest | CallNowSuccess | CallNowFailure;
}
