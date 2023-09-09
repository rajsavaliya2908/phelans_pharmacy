import {InputConfigProps} from '../components/custom/typings/input';
import {Register, SignIn} from './enum';

export const signInInput: InputConfigProps[] = [
  {
    PlaceHolder: 'User name',
    KeyboardType: 'default',
    ReturnKeyType: 'next',
    AutoCapitalize: 'none',
    Type: SignIn.UserName,
  },
  {
    PlaceHolder: 'Password',
    KeyboardType: 'default',
    ReturnKeyType: 'done',
    AutoCapitalize: 'none',
    Type: SignIn.Password,
    SecureTextEntry: true,
  },
];

export const registerInput: InputConfigProps[] = [
  {
    PlaceHolder: 'Select your local Pharmacy',
    KeyboardType: 'default',
    ReturnKeyType: 'done',
    AutoCapitalize: 'none',
    Type: Register.SelectLocal,
    Disable: true,
  },
  {
    PlaceHolder: 'Email',
    KeyboardType: 'email-address',
    ReturnKeyType: 'next',
    AutoCapitalize: 'none',
    Type: Register.Email,
  },
  {
    PlaceHolder: 'Password',
    KeyboardType: 'default',
    ReturnKeyType: 'next',
    AutoCapitalize: 'none',
    Type: Register.Password,
    SecureTextEntry: true,
  },
  {
    PlaceHolder: 'Name',
    KeyboardType: 'default',
    ReturnKeyType: 'next',
    AutoCapitalize: 'words',
    Type: Register.Name,
  },
  {
    PlaceHolder: 'Telephone',
    KeyboardType: 'phone-pad',
    ReturnKeyType: 'done',
    AutoCapitalize: 'none',
    Type: Register.TelePhone,
    Length: 15,
  },
  {
    PlaceHolder: 'Address',
    KeyboardType: 'default',
    ReturnKeyType: 'done',
    AutoCapitalize: 'none',
    Type: Register.Address,
  },
  {
    PlaceHolder: 'Date of Birth',
    KeyboardType: 'default',
    ReturnKeyType: 'done',
    AutoCapitalize: 'none',
    Type: Register.BirthDate,
    Disable: true,
  },
];

export const addUserInput: InputConfigProps[] = [
  {
    PlaceHolder: 'Select your local Pharmacy',
    KeyboardType: 'default',
    ReturnKeyType: 'done',
    AutoCapitalize: 'none',
    Type: Register.SelectLocal,
    Disable: true,
  },
  {
    PlaceHolder: 'Email',
    KeyboardType: 'email-address',
    ReturnKeyType: 'next',
    AutoCapitalize: 'none',
    Type: Register.Email,
  },
  // {
  //   PlaceHolder: 'Password',
  //   KeyboardType: 'default',
  //   ReturnKeyType: 'next',
  //   AutoCapitalize: 'none',
  //   Disable: true,
  //   Type: Register.Password,
  //   InputContainerStyle: {opacity: 0.4},
  // },
  {
    PlaceHolder: 'Name',
    KeyboardType: 'default',
    ReturnKeyType: 'next',
    AutoCapitalize: 'words',
    Type: Register.Name,
  },
  {
    PlaceHolder: 'Telephone',
    KeyboardType: 'phone-pad',
    ReturnKeyType: 'done',
    AutoCapitalize: 'none',
    Type: Register.TelePhone,
    Length: 15,
  },
  {
    PlaceHolder: 'Address',
    KeyboardType: 'default',
    ReturnKeyType: 'done',
    AutoCapitalize: 'none',
    Type: Register.Address,
  },
  {
    PlaceHolder: 'Date of Birth',
    KeyboardType: 'default',
    ReturnKeyType: 'done',
    AutoCapitalize: 'none',
    Type: Register.BirthDate,
    Disable: true,
  },
];
