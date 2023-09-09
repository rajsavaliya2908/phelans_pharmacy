import React from 'react';
import {Image, Pressable, TextInput} from 'react-native';
import COLORS from '../../../utils/colors';
import {InputPropsType} from '../typings/input';

import styles from './styles';

const Input = React.forwardRef<TextInput, InputPropsType>((props, ref) => {
  const {
    index,
    handleChange,
    value,
    inputContainer,
    onRightBtnPress,
    onLeftBtnPress,
    onTextInputPress,
    leftIconContainer,
    onSubmitEditing,
    leftIconStyle,
    inputStyle,
    item,
  } = props;

  return (
    <Pressable
      pointerEvents={item.Disable ? 'box-only' : 'auto'}
      style={[styles.container, item.InputContainerStyle, inputContainer]}
      onPress={() =>
        item.Disable && onTextInputPress ? onTextInputPress(item.Type) : null
      }>
      {item.LeftIcon ? (
        <Pressable
          style={[styles.leftIconContainer, leftIconContainer]}
          onPress={() => (onLeftBtnPress ? onLeftBtnPress(item.Type) : null)}>
          <Image
            style={[styles.leftIconStyle, leftIconStyle]}
            source={item.LeftIcon}
          />
        </Pressable>
      ) : null}
      <TextInput
        secureTextEntry={item.SecureTextEntry}
        onSubmitEditing={() => onSubmitEditing(index)}
        ref={ref}
        onChangeText={text => handleChange(text, item.Type)}
        value={value}
        returnKeyType={item.ReturnKeyType}
        style={[styles.inputStyle, inputStyle]}
        placeholder={item.PlaceHolder as string}
        placeholderTextColor={
          !item.Disable ? COLORS.placeholder : COLORS.placeholderGrey
        }
        maxLength={item.Length}
        keyboardType={item.KeyboardType}
        editable={!item.Disable}
        autoCapitalize={item?.AutoCapitalize}
      />
      {item.RightIcon ? (
        <Pressable
          style={[styles.leftIconContainer, leftIconContainer]}
          onPress={() => (onRightBtnPress ? onRightBtnPress(item.Type) : null)}>
          <Image
            style={[styles.rightIcon, leftIconStyle]}
            source={item.RightIcon}
          />
        </Pressable>
      ) : null}
    </Pressable>
  );
});

export default Input;
