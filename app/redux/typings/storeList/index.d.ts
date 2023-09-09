import {
  STORE_LIST_FAILURE,
  STORE_LIST_REQUEST,
  STORE_LIST_SUCCESS,
} from '../../types';

declare namespace storeList {
  interface StoreListResponse {
    status: string;
    result: string;
  }
  interface StoreListErrorResponse {
    status: string;
    result: string;
  }

  type storeDetail = {
    id: string;
    store_name: string;
    password: string;
    address: string;
    telephone: string;
    fax: string;
    email: string;
    city_id: string;
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
    status: string;
  };

  interface StoreListSuccessPayload {
    storeListResponse: storeDetail[];
  }

  interface StoreListFailurePayload {
    error: string;
  }

  interface storeListProps {
    loading: boolean;
    storeListResponse: storeDetail[];
    error: string;
  }

  // Action type
  interface StoreListRequest {
    type: typeof STORE_LIST_REQUEST;
  }
  
  type StoreListSuccess = {
    type: typeof STORE_LIST_SUCCESS;
    payload: storeDetail[];
  };

  type StoreListFailure = {
    type: typeof STORE_LIST_FAILURE;
    payload: StoreListFailurePayload;
  };

  type ActionsStoreList =
    | StoreListRequest
    | StoreListSuccess
    | StoreListFailure;
}
