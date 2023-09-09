import {
  SERVICE_ORDER_FAILURE,
  SERVICE_ORDER_REQUEST,
  SERVICE_ORDER_SUCCESS,
} from '../types';
import {serviceOrder} from '../typings/serviceOrder';

export const serviceOrderRequest = (
  payload: serviceOrder.ServiceOrderRequestPayload,
): serviceOrder.ServiceOrderRequest => ({
  type: SERVICE_ORDER_REQUEST,
  payload,
});

export const serviceOrderSuccess = (
  payload: serviceOrder.ServiceOrderSuccessPayload,
): serviceOrder.ServiceOrderSuccess => ({
  type: SERVICE_ORDER_SUCCESS,
  payload,
});

export const serviceOrderFailure = (
  payload: serviceOrder.ServiceOrderFailurePayload,
): serviceOrder.ServiceOrderFailure => ({
  type: SERVICE_ORDER_FAILURE,
  payload,
});
