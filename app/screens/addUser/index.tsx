import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import moment from 'moment';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Input from '../../components/custom/input';
import ModalStoreList from '../../components/custom/modalStoreList';
import ToolBar from '../../components/custom/toolbar';
import {storeList} from '../../redux/typings/storeList';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {AddUserScreenProps} from '../../typings';
import {addUserInput} from '../../utils/config';
import {AddUser} from '../../utils/enum';
import string from '../../utils/string';
import styles from './styles';
import Methods from '../../utils/methods';
import {addUserRequest} from '../../redux/actions/addUserAction';
import {Constant} from '../../utils/constants';
import {register} from '../../redux/typings/register';
import {AppState} from '../../redux';
import {addUser} from '../../redux/typings/addUser';
import COLORS from '../../utils/colors';

const AddUserScreen = (props: AddUserScreenProps) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const selector = useSelector((s: AppState) => s);
  const addUserInfo = selector.addUser as addUser.AddUserProps;

  const {loading} = addUserInfo;

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
  const [birthDate, setBirthDate] = useState<Date | string>();
  const [userId, setUserId] = useState<string>('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const handleLeftPress = () => {
    navigation.goBack();
  };

  const handleSubmitEditing = (index: number) => {
    const isLast = index !== addUserInput?.length - 1;
    if (isLast) {
      inputRef?.current[index + 1]?.focus();
    }
  };

  const handleTextInputPress = (type: number) => {
    switch (type) {
      case AddUser.SelectLocal:
        handlePresentModalPress();
        break;
      case AddUser.BirthDate:
        showDatePicker();
        break;
    }
  };

  const handleChange = (text: string, type: number) => {
    switch (type) {
      case AddUser.Email:
        setTiEmail(text);
        break;
      case AddUser.Password:
        setTiPassword(text);
        break;
      case AddUser.Name:
        setTiName(text);
        break;
      case AddUser.TelePhone:
        setTiTelephone(text);
        break;
      case AddUser.Address:
        setTiAddress(text);
        break;
    }
  };

  const getInputValue = (type: Number) => {
    switch (type) {
      case AddUser.Email:
        return tiEmail;
      case AddUser.Password:
        return tiPassword;
      case AddUser.SelectLocal:
        return tiStoreName;
      case AddUser.Name:
        return tiName;
      case AddUser.TelePhone:
        return tiTelephone;
      case AddUser.Address:
        return tiAddress;
      case AddUser.BirthDate:
        return birthDate ? moment(birthDate).format('DD-MM-YYYY') : '';
    }
  };

  const handleAddUserBtnPress = () => {
    if (!tiStoreName.trim().length) {
      Alert.alert(string.appName, string.storeNameValidation);
    } else if (!tiEmail.trim().length) {
      Alert.alert(string.appName, string.emailValidation);
    } else if (!Methods.isValidEmail(tiEmail)) {
      Alert.alert(string.appName, string.emailFormatValidation);
    } else if (!tiName.trim().length) {
      Alert.alert(string.appName, string.nameValidation);
    } else if (!tiTelephone.trim().length) {
      Alert.alert(string.appName, string.telephoneValidation);
    } else if (!tiAddress.trim().length) {
      Alert.alert(string.appName, string.addressValidation);
    } else {
      dispatch(
        addUserRequest({
          email: tiEmail,
          password: tiPassword,
          name: tiName,
          store_id: storeId,
          phone: tiTelephone,
          address: tiAddress,
          user_id: userId,
          date_of_birth: moment(birthDate).format('DD-MM-YYYY'),
        }),
      );
    }
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

  useEffect(() => {
    getUserIdFromStorage();
  }, []);

  useEffect(() => {
    if (addUserInfo && !loading) {
      setBirthDate('');
      setTiStoreName('');
      setTiEmail('');
      setTiName('');
      setTiTelephone('');
      setTiAddress('');
    }
  }, [addUserInfo]);

  const getUserIdFromStorage = async () => {
    const userInfo = (await Methods.getPref(
      Constant.userInfo,
    )) as register.RegisterDecryptResponse;
    setUserId(userInfo.id);
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <BottomSheetModalProvider>
        <ToolBar isLeftBtn onLeftPress={handleLeftPress} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.kavContainer}>
          <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.addPatient}>{string.AddPatient}</Text>
            {addUserInput?.map((item, index) => (
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
          </ScrollView>
          <Pressable
            disabled={loading}
            style={styles.btnContainer}
            onPress={handleAddUserBtnPress}>
            {loading ? (
              <ActivityIndicator size={'small'} color={COLORS.white} />
            ) : (
              <Text style={styles.btnText}>{string.AddUser}</Text>
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
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
};

export default AddUserScreen;
