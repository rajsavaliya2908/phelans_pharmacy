import {
  MY_PHARMACY_FAILURE,
  MY_PHARMACY_REQUEST,
  MY_PHARMACY_SUCCESS,
} from '../../types';

declare namespace myPharmacy {
  interface MyPharmacyResponse {
    status: string;
    result: string;
  }
  interface MyPharmacyErrorResponse {
    status: string;
    result: string;
  }

  interface MyPharmacyRequestPayload {
    user_id: string;
    store_id: string;
  }

  interface StoreService {
    service_id: string;
    service_name: string;
  }

  interface PharmacyInfo {
    id: string;
    customer_id: string;
    name: string;
    email: string;
    phone: string;
    usertype: string;
    username: string;
    password: string;
    address: string;
    city_id: string;
    date_of_birth: string;
    store_id: string;
    user_id: string;
    created_on: string;
    device_id: string;
    device_type: string;
    device_token: string;
    fcm_token: string;
    status: string;
    login_token: string;
    accept_promotion_emails: string;
    store_name: string;
    telephone: string;
    fax: string;
    home_delivery: string;
    time_zone: string;
    time_format: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thrusday: string;
    friday: string;
    saturday: string;
    sunday: string;
    bank_holiday: string;
    member_name: string;
    manager_name: string;
    services: string;
    additional_info: string;
    google_place: string;
    lat: string;
    lng: string;
    created: string;
    store_services: StoreService[];
  }

  interface MyPharmacySuccessPayload {
    myPharmacyResponse: PharmacyInfo[];
  }
  interface MyPharmacyFailurePayload {
    error: string;
  }
  interface MyPharmacyProps {
    loading: boolean;
    myPharmacyResponse: PharmacyInfo[];
    error: string;
  }

  // Action type
  interface MyPharmacyRequest {
    type: typeof MY_PHARMACY_REQUEST;
    payload: MyPharmacyRequestPayload;
  }
  type MyPharmacySuccess = {
    type: typeof MY_PHARMACY_SUCCESS;
    payload: MyPharmacySuccessPayload;
  };

  type MyPharmacyFailure = {
    type: typeof MY_PHARMACY_FAILURE;
    payload: MyPharmacyFailurePayload;
  };

  type ActionsMyPharmacy =
    | MyPharmacyRequest
    | MyPharmacySuccess
    | MyPharmacyFailure;
}
