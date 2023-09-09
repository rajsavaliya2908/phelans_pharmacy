import React from 'react';
import {
  KeyboardAvoidingView,
  Text,
  Platform,
  SafeAreaView,
  View,
  Pressable,
} from 'react-native';
import ToolBar from '../../../components/custom/toolbar';
import {appRoutes} from '../../../navigation/appRoutes';
import {PreAuthScreenProps} from '../../../typings';
import string from '../../../utils/string';
import styles from './styles';

const PreAuthScreen = (props: PreAuthScreenProps) => {
  const {navigation} = props;

  const handleLeftPress = () => {
    navigation.goBack();
  };

  const handleSignInBtnPress = () => {
    navigation.navigate(appRoutes.SignIn);
  };

  const handleRegisterBtnPress = () => {
    navigation.navigate(appRoutes.Register);
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ToolBar isLeftBtn onLeftPress={handleLeftPress} />
      <View style={styles.container}>
        <Text style={styles.welcomeTxt}>{string.welcomeText}</Text>
        <Pressable
          style={[styles.btnContainer, styles.signInBtnColor]}
          onPress={handleSignInBtnPress}>
          <Text style={styles.btnText}>{string.Signin.toUpperCase()}</Text>
        </Pressable>
        <View style={styles.orTxtContainer}>
          <View style={styles.orLine} />
          <Text style={styles.orTxt}>{string.or.toUpperCase()}</Text>
          <View style={styles.orLine} />
        </View>
        <Pressable
          style={[styles.btnContainer, styles.registerBtnColor]}
          onPress={handleRegisterBtnPress}>
          <Text style={styles.btnText}>{string.Register.toUpperCase()}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default PreAuthScreen;
