import {medicationList} from '../../../redux/typings/medicationList';

export interface ItemMedicationProps {
  item: medicationList.reminderInfo;
  onEditIconPress: (item: medicationList.reminderInfo) => void;
  onDeleteIconPress: (item: medicationList.reminderInfo) => void;
  index: number;
}
