import {
  PRESCRIPTION_ORDER_REQUEST,
  PRESCRIPTION_ORDER_SUCCESS,
  PRESCRIPTION_ORDER_FAILURE,
} from '../types';
import {prescriptionOrder} from '../typings/prescriptionOrder';

export const prescriptionOrderRequest = (
  payload: prescriptionOrder.PrescriptionOrderRequestPayload,
): prescriptionOrder.PrescriptionOrderRequest => ({
  type: PRESCRIPTION_ORDER_REQUEST,
  payload,
});

export const prescriptionOrderSuccess = (
  payload: prescriptionOrder.PrescriptionOrderSuccessPayload,
): prescriptionOrder.PrescriptionOrderSuccess => ({
  type: PRESCRIPTION_ORDER_SUCCESS,
  payload,
});

export const prescriptionOrderFailure = (
  payload: prescriptionOrder.PrescriptionOrderFailurePayload,
): prescriptionOrder.PrescriptionOrderFailure => ({
  type: PRESCRIPTION_ORDER_FAILURE,
  payload,
});
