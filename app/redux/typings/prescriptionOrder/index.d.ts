import {
  PRESCRIPTION_ORDER_REQUEST,
  PRESCRIPTION_ORDER_SUCCESS,
  PRESCRIPTION_ORDER_FAILURE,
} from '../../types';

declare namespace prescriptionOrder {
  interface PrescriptionOrderResponse {
    status: string;
    result: string;
  }
  interface PrescriptionOrderErrorResponse {
    status: string;
    result: string;
  }
  interface File {
    uri: string;
    name: string;
    type: string;
  }

  interface PrescriptionOrderRequestPayload {
    user_id: string;
    store_id: string;
    prescription_text: string;
    collection_time: string;
    prescription_file?: File | string | undefined;
    app_version: string;
  }

  interface PrescriptionOrderSuccessPayload {
    status: string;
  }
  interface PrescriptionOrderFailurePayload {
    error: string;
  }
  interface PrescriptionOrderProps {
    loading: boolean;
    prescriptionOrderResponse: {status: string};
    error: string;
  }

  // Action type
  interface PrescriptionOrderRequest {
    type: typeof PRESCRIPTION_ORDER_REQUEST;
    payload: PrescriptionOrderRequestPayload;
  }
  type PrescriptionOrderSuccess = {
    type: typeof PRESCRIPTION_ORDER_SUCCESS;
    payload: PrescriptionOrderSuccessPayload;
  };

  type PrescriptionOrderFailure = {
    type: typeof PRESCRIPTION_ORDER_FAILURE;
    payload: PrescriptionOrderFailurePayload;
  };

  type ActionsPrescriptionOrder =
    | PrescriptionOrderRequest
    | PrescriptionOrderSuccess
    | PrescriptionOrderFailure;
}
