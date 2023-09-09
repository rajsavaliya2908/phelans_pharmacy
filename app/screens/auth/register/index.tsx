import React, {useCallback, useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Input from '../../../components/custom/input';
import ToolBar from '../../../components/custom/toolbar';
import {RegisterScreenProps} from '../../../typings';
import {registerInput} from '../../../utils/config';
import {Register} from '../../../utils/enum';
import string from '../../../utils/string';
import styles from './styles';
import IMAGES from '../../../assets/images/index';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

import {storeList} from '../../../redux/typings/storeList';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ModalStoreList from '../../../components/custom/modalStoreList';
import moment from 'moment';
import Methods from '../../../utils/methods';
import {useDispatch, useSelector} from 'react-redux';
import {userRegisterRequest} from '../../../redux/actions/registerAction';
import {AppState} from '../../../redux';
import {register} from '../../../redux/typings/register';
import COLORS from '../../../utils/colors';
import {Constant} from '../../../utils/constants';

const RegisterScreen = (props: RegisterScreenProps) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const selector = useSelector((s: AppState) => s);
  const userRegisterProps = selector.register as register.UserRegisterProps;
  const {loading} = userRegisterProps;

  //ref
  const inputRef = useRef<(TextInput | null)[]>([]);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  //states
  const [tiEmail, setTiEmail] = useState<string>('');
  const [tiPassword, setTiPassword] = useState<string>('');
  const [tiStoreName, setTiStoreName] = useState<string>('');
  const [storeId, setStoreId] = useState<string>('');
  const [tiName, setTiName] = useState<string>('');
  const [tiTelephone, setTiTelephone] = useState<string>('');
  const [tiAddress, setTiAddress] = useState<string>('');
  const [isPromotion, setTiPromotion] = useState<boolean>(true);
  const [birthDate, setBirthDate] = useState<Date>();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleLeftPress = () => {
    navigation.goBack();
  };

  const handleSubmitEditing = (index: number) => {
    const isLast = index !== registerInput?.length - 1;
    if (isLast) {
      inputRef?.current[index + 1]?.focus();
    }
  };

  const handleTextInputPress = (type: number) => {
    switch (type) {
      case Register.SelectLocal:
        handlePresentModalPress();
        break;
      case Register.BirthDate:
        showDatePicker();
        break;
    }
  };

  const handleChange = (text: string, type: number) => {
    switch (type) {
      case Register.Email:
        setTiEmail(text);
        break;
      case Register.Password:
        setTiPassword(text);
        break;
      case Register.Name:
        setTiName(text);
        break;
      case Register.TelePhone:
        setTiTelephone(text);
        break;
      case Register.Address:
        setTiAddress(text);
        break;
    }
  };

  const getInputValue = (type: Number) => {
    switch (type) {
      case Register.Email:
        return tiEmail;
      case Register.Password:
        return tiPassword;
      case Register.SelectLocal:
        return tiStoreName;
      case Register.Name:
        return tiName;
      case Register.TelePhone:
        return tiTelephone;
      case Register.Address:
        return tiAddress;
      case Register.BirthDate:
        return birthDate ? moment(birthDate).format('DD-MM-YYYY') : '';
    }
  };

  const handleCheckChange = () => {
    setTiPromotion(!isPromotion);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    hideDatePicker();
    setBirthDate(date);
  };

  const handleStoreItemPress = (item: storeList.storeDetail) => {
    setTiStoreName(item.store_name);
    setStoreId(item.id);
    bottomSheetRef.current?.close();
  };

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const handleRegisterBtnPress = async () => {
    if (!tiStoreName.trim().length) {
      Alert.alert(string.appName, string.storeNameValidation);
    } else if (!tiEmail.trim().length) {
      Alert.alert(string.appName, string.emailValidation);
    } else if (!Methods.isValidEmail(tiEmail)) {
      Alert.alert(string.appName, string.emailFormatValidation);
    } else if (!tiPassword.trim().length) {
      Alert.alert(string.appName, string.passwordValidation);
    } else if (!tiName.trim().length) {
      Alert.alert(string.appName, string.nameValidation);
    } else if (!tiTelephone.trim().length) {
      Alert.alert(string.appName, string.telephoneValidation);
    } else if (!tiAddress.trim().length) {
      Alert.alert(string.appName, string.addressValidation);
    } else {
      dispatch(
        userRegisterRequest({
          name: tiName,
          email: tiEmail,
          phone: tiTelephone,
          password: tiPassword,
          address: tiAddress,
          date_of_birth: moment(birthDate).format('DD-MM-YYYY'),
          store_id: storeId,
          accept_promo_mails: isPromotion ? '1' : '0',
          device_type: Platform.OS,
          device_token: (await Methods.getPref(Constant.fcmToken)) as string,
        }),
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      {/* <BottomSheetModalProvider> */}
      <ToolBar isLeftBtn onLeftPress={handleLeftPress} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.kavContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.register}>{string.Register}</Text>
          {registerInput?.map((item, index) => (
            <Input
              inputContainer={styles.input}
              onTextInputPress={handleTextInputPress}
              value={getInputValue(item.Type)}
              ref={el => (inputRef.current[index] = el)}
              onSubmitEditing={handleSubmitEditing}
              handleChange={handleChange}
              {...{item, index}}
              key={`input-${index}`}
            />
          ))}
          <View style={styles.promotionInfoContainer}>
            <Pressable
              style={styles.checkContainer}
              onPress={handleCheckChange}>
              {isPromotion ? (
                <Image source={IMAGES.ic_check} style={styles.checkLogo} />
              ) : null}
            </Pressable>
            <Text style={styles.promotionText}>{string.promotionInfo}</Text>
          </View>
        </ScrollView>
        <Pressable
          style={styles.btnContainer}
          onPress={handleRegisterBtnPress}
          disabled={loading}>
          {loading ? (
            <ActivityIndicator size={'small'} color={COLORS.white} />
          ) : (
            <Text style={styles.btnText}>{string.submit}</Text>
          )}
        </Pressable>
      </KeyboardAvoidingView>
      <ModalStoreList
        ref={bottomSheetRef}
        onStoreItemPress={handleStoreItemPress}
      />
      <DateTimePickerModal
        maximumDate={new Date()}
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {/* </BottomSheetModalProvider> */}
    </SafeAreaView>
  );
};

export default RegisterScreen;
