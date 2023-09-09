import {userList} from '../../../redux/typings/userList';

export interface ModalUserProps {
  onUserModalClose: () => void;
  onUserNamePress: () => void;
  onUserModalSubmit: () => void;
  patientInfo: userList.userDetail;
}
