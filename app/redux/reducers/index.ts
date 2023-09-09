import signIn from './signInReducer';
import storeList from './storeListReducer';
import register from './registerReducer';
import addUser from './addUserReducer';
import userList from './userListReducer';
import prescriptionOrder from './prescriptionOrderReducer';
import serviceList from './serviceListReducer';
import serviceOrder from './serviceOrderReducer';
import medicalList from './medicationListReducer';
import medicationReminder from './medicationReminder';
import editMedication from './editMedicationReducer';
import deleteMedication from './deleteMedicationReducer';
import myPharmacy from './myPharmacyReduder';
import userProfile from './userProfileReducer';
import editProfile from './editProfileReducer';
import forgotPasswordReducer from './forgotPasswordReducer';
// Please preserve the alphabetical sorting order
/* eslint sort-keys: ["error", "asc"] */
const GLOBAL_STATE = {
  signIn,
  register,
  addUser,
  storeList,
  serviceList,
  userList,
  serviceOrder,
  prescriptionOrder,
  medicalList,
  medicationReminder,
  editMedication,
  deleteMedication,
  myPharmacy,
  userProfile,
  editProfile,
  forgotPasswordReducer,
};

export default GLOBAL_STATE;
