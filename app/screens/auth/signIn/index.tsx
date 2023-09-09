import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Input from '../../../components/custom/input';
import ToolBar from '../../../components/custom/toolbar';
import {SignInScreenProps} from '../../../typings';
import {signInInput} from '../../../utils/config';
import {SignIn} from '../../../utils/enum';
import string from '../../../utils/string';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {userSignInRequest} from '../../../redux/actions/signInAction';
import Methods from '../../../utils/methods';
import {AppState} from '../../../redux';
import {signIn} from '../../../redux/typings/signIn';
import COLORS from '../../../utils/colors';
import {Constant} from '../../../utils/constants';
import ForgotPasswordModal from '../../../components/custom/forgotModal';

const SignInScreen = (props: SignInScreenProps) => {
  const {navigation} = props;
  const [tiUserName, setTiUserName] = useState<string>('');
  const [tiPassword, setTiPassword] = useState<string>('');
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const selector = useSelector((s: AppState) => s);
  const signInProps = selector.signIn as signIn.SignInProps;

  const {loading} = signInProps;
  const inputRef = useRef<(TextInput | null)[]>([]);
  const handleLeftPress = () => {
    navigation.goBack();
  };

  const handleSubmitEditing = (index: number) => {
    const isLast = index !== signInInput?.length - 1;
    if (isLast) {
      inputRef?.current[index + 1]?.focus();
    }
  };

  const handleChange = (text: string, type: number) => {
    switch (type) {
      case SignIn.UserName:
        setTiUserName(text);
        break;
      case SignIn.Password:
        setTiPassword(text);
        return tiPassword;
    }
  };

  const getInputValue = (type: Number) => {
    switch (type) {
      case SignIn.UserName:
        return tiUserName;
      case SignIn.Password:
        return tiPassword;
    }
  };

  const handleSignInBtnPress = async () => {
    if (!tiUserName.trim().length) {
      Alert.alert(string.appName, string.emailValidation);
    } else if (!Methods.isValidEmail(tiUserName)) {
      Alert.alert(string.appName, string.emailFormatValidation);
    } else if (!tiPassword.trim().length) {
      Alert.alert(string.appName, string.passwordValidation);
    } else {
      dispatch(
        userSignInRequest({
          email: tiUserName,
          password: tiPassword,
          device_token: (await Methods.getPref(Constant.fcmToken)) as string,
          device_type: Platform.OS,
        }),
      );
    }
  };

  const handleForgotPassword = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleForgotPasswordSubmit = email => {
    console.log(`Forgot password requested for email: ${email}`);
    handleCloseModal();
  };
  return (
    <>
      <SafeAreaView style={styles.safeAreaContainer}>
        <ToolBar isLeftBtn onLeftPress={handleLeftPress} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.kavContainer}>
          <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.welcome}>{string.welcome}</Text>
            <View style={styles.inputContainer}>
              {signInInput?.map((item, index) => (
                <Input
                  value={getInputValue(item.Type)}
                  ref={el => (inputRef.current[index] = el)}
                  onSubmitEditing={handleSubmitEditing}
                  handleChange={handleChange}
                  {...{item, index}}
                  key={`input-${index}`}
                />
              ))}
              <TouchableOpacity
                style={styles.forgotPassword}
                onPress={handleForgotPassword}>
                <Text>{string.forgotPassword}</Text>
              </TouchableOpacity>
              <Pressable
                disabled={loading}
                style={styles.btnContainer}
                onPress={handleSignInBtnPress}>
                {loading ? (
                  <ActivityIndicator size={'small'} color={COLORS.white} />
                ) : (
                  <Text style={styles.btnText}>{string.Login}</Text>
                )}
              </Pressable>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView style={{backgroundColor: COLORS.grey}}>
        <ForgotPasswordModal
          visible={modalVisible}
          onDismiss={() => setModalVisible(false)}
          onRequestClose={handleCloseModal}
          onSubmit={handleForgotPasswordSubmit}
        />
      </SafeAreaView>
    </>
  );
};

export default SignInScreen;
