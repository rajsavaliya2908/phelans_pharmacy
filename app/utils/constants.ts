import IMAGES from '../assets/images';
import {HomeMenu} from './enum';
import string from './string';

export const HomeMenuList = [
  [
    {
      title: string.prescription,
      icon: IMAGES.ic_prescription,
      type: HomeMenu.Prescription,
    },
    {
      title: string.bookAService,
      icon: IMAGES.ic_book_service,
      type: HomeMenu.BookService,
    },
  ],
  [
    {
      title: string.medicineReminder,
      icon: IMAGES.ic_medicine_reminder,
      type: HomeMenu.MedicineReminder,
    },
    {
      title: string.myPharmacy,
      icon: IMAGES.ic_my_pharmacy,
      type: HomeMenu.MyPharmacy,
    },
  ],
  [
    {
      title: string.locator,
      icon: IMAGES.ic_locator,
      type: HomeMenu.Locator,
    },
    {
      title: string.user,
      icon: IMAGES.ic_user,
      type: HomeMenu.User,
    },
  ],
];

export const PrescriptionMenuList = [
  [
    {
      title: string.order,
      icon: IMAGES.ic_prescription,
      type: HomeMenu.Prescription,
    },
    {
      title: string.reminder,
      icon: IMAGES.ic_medicine_reminder,
      type: HomeMenu.BookService,
    },
  ],
];

export const Constant = {
  storeList: 'storeList',
  userList: 'userList',
  userInfo: 'userInfo',
  fcmToken: 'fcmToken',
  isAuth: 'isAuth',
  patientInfo: 'patientInfo',
};
