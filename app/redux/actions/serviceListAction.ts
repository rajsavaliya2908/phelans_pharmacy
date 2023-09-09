import {
  SERVICE_LIST_FAILURE,
  SERVICE_LIST_REQUEST,
  SERVICE_LIST_SUCCESS,
} from '../types';
import {serviceList} from '../typings/serviceList';

export const serviceListRequest = (): serviceList.ServiceListRequest => ({
  type: SERVICE_LIST_REQUEST,
});

export const serviceListSuccess = (
  payload: serviceList.serviceInfo[],
): serviceList.ServiceListSuccess => ({
  type: SERVICE_LIST_SUCCESS,
  payload,
});

export const serviceListFailure = (
  payload: serviceList.ServiceListFailurePayload,
): serviceList.ServiceListFailure => ({
  type: SERVICE_LIST_FAILURE,
  payload,
});
