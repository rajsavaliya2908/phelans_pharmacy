import moment from 'moment';
import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import IMAGES from '../../assets/images';
import ToolBar from '../../components/custom/toolbar';
import {AppState} from '../../redux';
import {storeListRequest} from '../../redux/actions/storeListAction';
import {userProfileRequest} from '../../redux/actions/userProfileAction';
import {storeList} from '../../redux/typings/storeList';
import {userList} from '../../redux/typings/userList';
import {userProfile} from '../../redux/typings/userProfile';
import {UserScreenProps} from '../../typings';
import {Constant} from '../../utils/constants';
import Methods from '../../utils/methods';
import string from '../../utils/string';
import styles from './styles';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ModalStoreList from '../../components/custom/modalStoreList';
import {AddUser} from '../../utils/enum';
import {editProfileRequest} from '../../redux/actions/editProfileAction';
import COLORS from '../../utils/colors';
import {editProfile} from '../../redux/typings/editProfile';
import {appRoutes} from '../../navigation/appRoutes';

const UserScreen = (props: UserScreenProps) => {
  const {navigation} = props;
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const [rightText, setRightText] = useState<string>(string.edit);
  const isEdit = rightText === string.edit ? false : true;
  const [patientInfo, setPatientInfo] = useState<userList.userDetail>(Object);
  const [storeInfo, setStoreInfo] = useState<storeList.storeDetail>(Object);
  const [userInfo, setUserInfo] = useState<userList.userDetail>(Object);
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [birthDate, setBirthDate] = useState<Date | string>();

  const dispatch = useDispatch();
  const selector = useSelector((s: AppState) => s);
  const storeListProps = selector.storeList as storeList.storeListProps;
  const userProfileProps = selector.userProfile as userProfile.UserProfileProps;
  const editProfileProps = selector.editProfile as editProfile.EditProfileProps;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const {loading, userProfileResponse} = userProfileProps;

  const handleLeftPress = () => {
    navigation.goBack();
  };

  useEffect(() => {
    getCurrentPatientInfoAndCallAPI();
    dispatch(storeListRequest());
  }, []);

  const getCurrentPatientInfoAndCallAPI = async () => {
    const patientInfo = (await Methods.getPref(
      Constant.patientInfo,
    )) as userList.userDetail;
    const userId = patientInfo.id;
    setPatientInfo(patientInfo);
    dispatch(userProfileRequest({user_id: userId}));
  };

  useEffect(() => {
    console.log(userProfileResponse, '~~~~~~~~~~~~~~~~userProfileResponse');
    if (userProfileResponse) setCurrentUserData();
  }, [userProfileResponse]);

  const setCurrentUserData = () => {
    const userInfo = userProfileResponse;
    setUserInfo(userInfo);
    setStoreInfo(userInfo?.store);
    setName(userInfo?.name);
    const birthDate = userInfo?.date_of_birth
      ? moment(userInfo?.date_of_birth, 'DD-MM-YY').toDate()
      : '';
    setBirthDate(birthDate);
    setAddress(userInfo?.address);
    setNumber(userInfo?.phone);
  };

  const handleStoreItemPress = (item: storeList.storeDetail) => {
    bottomSheetRef.current?.close();
    setStoreInfo(item);
  };

  //   const getCurrentStoreIdAndSetData = async () => {
  //     const userInfo = (await Methods.getPref(
  //       Constant.userInfo,
  //     )) as userList.userDetail;
  //     const storeList = storeListProps.storeListResponse;
  //     if (storeList && storeList.length) {
  //       const currentStoreInfo = storeList.find(
  //         item => item.id === userInfo.store.id,
  //       );
  //       //   Alert.alert(currentStoreInfo?.store_name);
  //       setRegion({
  //         latitude: Number(currentStoreInfo?.lat),
  //         longitude: Number(currentStoreInfo?.lng),
  //         latitudeDelta: LATITUDE_DELTA,
  //         longitudeDelta: LONGITUDE_DELTA,
  //       });
  //       setCurrentStoreInfo(currentStoreInfo ? currentStoreInfo : Object);
  //     }
  //   };

  const handleStoreNamePress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const handleRightPress = () => {
    if (rightText === string.edit) {
      setRightText(string.done);
    } else {
      checkValidationAndCallAPI();
      //   setRightText(string.edit);
    }
  };

  const checkValidationAndCallAPI = () => {
    if (!name.trim().length) {
      Alert.alert(string.appName, string.nameValidation);
    } else if (!number.trim().length) {
      Alert.alert(string.appName, string.telephoneValidation);
    } else if (!address.trim().length) {
      Alert.alert(string.appName, string.addressValidation);
    } else if (!birthDate) {
      Alert.alert(string.appName, string.birthDateValidation);
    } else {
      callEditUserAPI();
    }
  };

  const callEditUserAPI = () => {
    dispatch(
      editProfileRequest({
        address: address,
        date_of_birth: moment(birthDate).format('DD-MM-YYYY'),
        user_id: userInfo.id,
        name: name,
        phone: number,
        store_id: storeInfo.id,
      }),
    );
  };

  const handleDateInputPress = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    hideDatePicker();
    setBirthDate(date);
  };

  const handleChangeText = (text: string, type: number) => {
    switch (type) {
      case AddUser.Name:
        setName(text);
        break;
      case AddUser.TelePhone:
        setNumber(text);
        break;
      case AddUser.Address:
        setAddress(text);
        break;
      case AddUser.BirthDate:
        setBirthDate(text);
        break;
    }
  };

  const handleAddUser = () => {
    navigation.navigate(appRoutes.AddUser);
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ToolBar
        loading={loading || editProfileProps.loading}
        isLeftBtn
        onLeftPress={handleLeftPress}
        onRightPress={handleRightPress}
        rightText={rightText}
        isRightBtn
        isRightText
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.kavContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          {loading ? (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size={'large'} color={COLORS.blue} />
            </View>
          ) : (
            <>
              <Text style={styles.profile}>{string.profile}</Text>
              <Pressable
                style={styles.storeNameContainer}
                onPress={isEdit ? handleStoreNamePress : null}>
                <Text style={styles.storeName}>{storeInfo?.store_name}</Text>
                <Image source={IMAGES.ic_down} style={styles.downArrowIcon} />
              </Pressable>
              <Text style={styles.email}>{userInfo?.email}</Text>
              <View style={styles.lineContainer} />
              <Text style={styles.personalInfoTitle}>
                {string.personalInfo}
              </Text>

              <TextInput
                editable={isEdit}
                value={name}
                style={styles.input}
                onChangeText={text => {
                  handleChangeText(text, AddUser.Name);
                }}
              />
              <View style={styles.inputLineContainer} />
              <TextInput
                editable={isEdit}
                value={number}
                style={styles.input}
                keyboardType="number-pad"
                onChangeText={text => {
                  handleChangeText(text, AddUser.TelePhone);
                }}
              />
              <View style={styles.inputLineContainer} />
              <TextInput
                value={address}
                editable={isEdit}
                style={styles.input}
                onChangeText={text => {
                  handleChangeText(text, AddUser.Address);
                }}
              />
              <View style={styles.inputLineContainer} />
              <Pressable
                pointerEvents="box-only"
                onPress={isEdit ? handleDateInputPress : null}>
                <TextInput
                  editable={false}
                  value={
                    birthDate
                      ? (moment(birthDate).format('DD/MM/YYYY') as string)
                      : ''
                  }
                  style={styles.input}
                />
                <View style={styles.inputLineContainer} />
              </Pressable>
              <Pressable style={styles.btnContainer} onPress={handleAddUser}>
                <Text style={styles.btnText}>{string.AddUser}</Text>
              </Pressable>
            </>
          )}
        </ScrollView>
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
    </SafeAreaView>
  );
};

export default UserScreen;
