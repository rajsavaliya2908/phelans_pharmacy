import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {appRoutes} from '../navigation/appRoutes';

export type RootStackParamList = {
  [appRoutes.Splash]: undefined;
  [appRoutes.SignIn]: undefined;
  [appRoutes.Home]: undefined;
  [appRoutes.PreAuth]: undefined;
  [appRoutes.Register]: undefined;
  [appRoutes.AddUser]: undefined;
  [appRoutes.PrescriptionManager]: undefined;
  [appRoutes.OrderPrescription]: undefined;
  [appRoutes.ThankOrder]: undefined;
  [appRoutes.PrescriptionReminder]: undefined;
  [appRoutes.BookAService]: undefined;
  [appRoutes.ThankService]: undefined;
  [appRoutes.MedicineReminder]: undefined;
  [appRoutes.Locator]: undefined;
  [appRoutes.MyPharmacy]: undefined;
  [appRoutes.User]: undefined;
};

export type DefaultNavigationProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type SplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Splash'
>;

export type SignInScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SignIn'
>;

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type PreAuthScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'PreAuth'
>;

export type RegisterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Register'
>;

export type AddUserScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'AddUser'
>;

export type PrescriptionManagerScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'PrescriptionManager'
>;

export type OrderPrescriptionScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'OrderPrescription'
>;

export type ThankOrderScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ThankOrder'
>;

export type PrescriptionReminderScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'PrescriptionReminder'
>;

export type BookAServiceScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'BookAService'
>;

export type ThankServiceScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ThankService'
>;

export type MedicineReminderScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MedicineReminder'
>;

export type LocatorScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Locator'
>;

export type MyPharmacyScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MyPharmacy'
>;

export type UserScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'User'
>;
