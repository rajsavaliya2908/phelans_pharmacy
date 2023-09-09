import {
  SERVICE_LIST_FAILURE,
  SERVICE_LIST_REQUEST,
  SERVICE_LIST_SUCCESS,
} from '../../types';

declare namespace serviceList {
  interface ServiceListResponse {
    status: string;
    result: string;
  }
  interface ServiceListErrorResponse {
    status: string;
    result: string;
  }

  type serviceInfo = {
    service_id: string;
    service_name: string;
    service_status?: string;
  };

  interface ServiceListSuccessPayload {
    serviceListResponse: serviceInfo[];
  }

  interface ServiceListFailurePayload {
    error: string;
  }

  interface ServiceListProps {
    loading: boolean;
    serviceListResponse: serviceInfo[];
    error: string;
  }

  // Action type
  interface ServiceListRequest {
    type: typeof SERVICE_LIST_REQUEST;
  }

  type ServiceListSuccess = {
    type: typeof SERVICE_LIST_SUCCESS;
    payload: serviceInfo[];
  };

  type ServiceListFailure = {
    type: typeof SERVICE_LIST_FAILURE;
    payload: ServiceListFailurePayload;
  };

  type ActionsServiceList =
    | ServiceListRequest
    | ServiceListSuccess
    | ServiceListFailure;
}
