export const apiBaseURL =
  'https://www.phelansprescriptionservice.com/api2/webservice.php';

export const httpMethods = {
  get: 'GET',
  post: 'POST',
  delete: 'delete',
};

export const endPoints = {
  signIn: '?data=login',
  storeList: '?data=store_list',
  serviceList: '?data=service-list',
  register: '?data=register',
  addUser: '?data=register_family',
  callNow: '?data=callnow',
  forgotPassword: '?data=forget_password',
  servcieOrder: '?data=servcie-order',
  medicationReminder: '?data=medication_reminder',
  deleteMedication: '?data=delete_medication',
  updateMedication: '?data=update_medication',
  updateProfile: '?data=update_profile',
  userList: '?data=get_user_family_list',
  userProfile: '?data=user_profile',
  medicationList: '?data=medication_list',
  prescriptionFile: '?data=prescription',
  myPharmacy: '?data=mypharmacy',
};
