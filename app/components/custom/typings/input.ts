import {
  ImageStyle,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  ViewStyle,
} from 'react-native';

export interface InputConfigProps {
  PlaceHolder?: string;
  SecureTextEntry?: boolean;
  KeyboardType?: KeyboardTypeOptions;
  ReturnKeyType?: ReturnKeyTypeOptions;
  AutoCapitalize?: AutoCapitalizeProps;
  Length?: number;
  LeftIcon?: number;
  RightIcon?: number;
  Type: number;
  Disable?: boolean;
  InputContainerStyle?: ViewStyle;
}

type AutoCapitalizeProps =
  | 'none'
  | 'sentences'
  | 'words'
  | 'characters'
  | undefined;

export interface InputPropsType {
  onTextInputPress?: (type: number) => void;
  onRightBtnPress?: (type: number) => void;
  onLeftBtnPress?: (type: number) => void;
  onSubmitEditing: (index: number) => void;
  handleChange: (text: string, type: number) => void;
  value: string | undefined;
  inputContainer?: ViewStyle;
  leftIconContainer?: ViewStyle;
  leftIconStyle?: ImageStyle;
  inputStyle?: ViewStyle;
  item: InputConfigProps;
  index: number;
}
