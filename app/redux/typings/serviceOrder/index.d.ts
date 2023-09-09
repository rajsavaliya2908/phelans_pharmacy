import {
  SERVICE_ORDER_FAILURE,
  SERVICE_ORDER_REQUEST,
  SERVICE_ORDER_SUCCESS,
} from '../../types';

declare namespace serviceOrder {
  interface ServiceOrderResponse {
    status: string;
    result: string;
  }
  interface ServiceOrderErrorResponse {
    status: string;
    result: string;
  }

  interface ServiceOrderRequestPayload {
    store_id: string;
    service_id: string;
    service_text: string;
    user_id: string;
  }

  interface ServiceOrderSuccessPayload {
    status: string;
  }
  interface ServiceOrderFailurePayload {
    error: string;
  }
  interface ServiceOrderProps {
    loading: boolean;
    serviceOrderResponse: ServiceOrderResponse;
    error: string;
  }

  // Action type
  interface ServiceOrderRequest {
    type: typeof SERVICE_ORDER_REQUEST;
    payload: ServiceOrderRequestPayload;
  }
  type ServiceOrderSuccess = {
    type: typeof SERVICE_ORDER_SUCCESS;
    payload: ServiceOrderSuccessPayload;
  };

  type ServiceOrderFailure = {
    type: typeof SERVICE_ORDER_FAILURE;
    payload: ServiceOrderFailurePayload;
  };

  type ActionsServiceOrder =
    | ServiceOrderRequest
    | ServiceOrderSuccess
    | ServiceOrderFailure;
}
