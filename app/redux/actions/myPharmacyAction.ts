import {
  MY_PHARMACY_FAILURE,
  MY_PHARMACY_REQUEST,
  MY_PHARMACY_SUCCESS,
} from '../types';
import {myPharmacy} from '../typings/myPharmacy';

export const myPharmacyRequest = (
  payload: myPharmacy.MyPharmacyRequestPayload,
): myPharmacy.MyPharmacyRequest => ({
  type: MY_PHARMACY_REQUEST,
  payload,
});

export const myPharmacySuccess = (
  payload: myPharmacy.MyPharmacySuccessPayload,
): myPharmacy.MyPharmacySuccess => ({
  type: MY_PHARMACY_SUCCESS,
  payload,
});

export const myPharmacyFailure = (
  payload: myPharmacy.MyPharmacyFailurePayload,
): myPharmacy.MyPharmacyFailure => ({
  type: MY_PHARMACY_FAILURE,
  payload,
});
