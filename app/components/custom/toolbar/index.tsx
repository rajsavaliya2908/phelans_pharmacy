import React from 'react';
import {View, Pressable, Image, Text, ActivityIndicator} from 'react-native';
import IMAGES from '../../../assets/images';
import COLORS from '../../../utils/colors';
import styles from './styles';

interface ToolbarProps {
  isLeftBtn?: boolean;
  isRightBtn?: boolean;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  isRightText?: boolean;
  rightText?: string;
  loading?: boolean;
}

const ToolBar = (props: ToolbarProps) => {
  const {
    isLeftBtn,
    isRightBtn,
    isRightText,
    onLeftPress,
    onRightPress,
    rightText,
    loading,
  } = props;
  return (
    <View style={styles.container}>
      <View style={isRightText && styles.rightTextContainer}>
        <Pressable
          style={[
            styles.leftBtnContainer,
            {
              backgroundColor: isLeftBtn ? COLORS.lightGrey : COLORS.darkGrey,
            },
          ]}
          onPress={onLeftPress}>
          {isLeftBtn ? (
            <Image source={IMAGES.ic_back} style={styles.leftBtn} />
          ) : null}
        </Pressable>
      </View>

      <View style={styles.titleContainer}>
        <Image style={styles.logo} source={IMAGES.ic_logo} />
      </View>
      <Pressable
        style={[
          styles.rightBtnContainer,
          isRightText && styles.rightTextContainer,
        ]}
        onPress={onRightPress}>
        {isRightBtn ? (
          isRightText ? (
            loading ? (
              <ActivityIndicator size={'small'} color={COLORS.blue} />
            ) : (
              <Text style={styles.rightText}>{rightText?.toUpperCase()}</Text>
            )
          ) : (
            <Image source={IMAGES.ic_logout} style={styles.logout} />
          )
        ) : null}
      </Pressable>
    </View>
  );
};

export default ToolBar;
