import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Linking,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import IMAGES from '../../assets/images';
import ModalUser from '../../components/custom/modalUser';
import ToolBar from '../../components/custom/toolbar';
import {appRoutes} from '../../navigation/appRoutes';
import {AppState} from '../../redux';
import {userListRequest} from '../../redux/actions/userListAction';
import {register} from '../../redux/typings/register';
import {HomeScreenProps} from '../../typings';
import {Constant, HomeMenuList} from '../../utils/constants';
import Methods from '../../utils/methods';
import string from '../../utils/string';
import styles from './styles';
import ModalUserList from '../../components/custom/modalUserList';
import ModalBox from 'react-native-modalbox';
import {userList} from '../../redux/typings/userList';
import {HomeMenu} from '../../utils/enum';
import {myPharmacyApi} from '../../api/myPharmacy';
import {AxiosResponse} from 'axios';
import {callNow} from '../../redux/typings/callNow';
import {callNowApi} from '../../api/callNow';
import aesUtil from '../../utils/aesUtil';
import COLORS from '../../utils/colors';

const HomeScreen = (props: HomeScreenProps) => {
  const [userId, setUserId] = useState<string>('');
  const [userInfo, setUserInfo] = useState<userList.userDetail>(Object);
  const [type, setType] = useState<number>();
  const [patientInfo, setPatientInfo] = useState<userList.userDetail>(Object);
  const [userList, setUserList] = useState<userList.userDetail[]>([]);
  const [isCallLoader, setIsCallLoader] = useState<boolean>(false);
  const bottomSheetRef = useRef<ModalBox>(null);
  const userModalRef = useRef<ModalBox>(null);
  const selector = useSelector((s: AppState) => s);
  const userListProps = selector.userList as userList.UserListProps;
  const {userListResponse} = userListProps;
  const dispatch = useDispatch();
  const {navigation} = props;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getUserIdFromStorage();
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    setUserList([]);
    // if (userListResponse && userListResponse.length) {
    const userList = [userInfo].concat(userListResponse);
    setUserList(userList);
    addPatientInfoInStorage(userInfo);
    // }
  }, [userListResponse]);

  const addPatientInfoInStorage = (userInfo: userList.userDetail) => {
    Methods.savePref(Constant.patientInfo, userInfo);
    setPatientInfo(userInfo);
  };

  const callNowAPI = async () => {
    const store_id = userInfo.store.id;
    const user_id = userInfo.id;
    console.log('ghgjgj ', store_id, user_id);

    setIsCallLoader(true);
    try {
      const response: AxiosResponse<callNow.CallNowResponse> = await callNowApi(
        {
          store_id,
          user_id,
        },
      );
      if (response?.status === 200) {
        setIsCallLoader(false);
        const decryptResponse = aesUtil.decrypt(response.data.result)
          ? aesUtil.decrypt(response.data.result)
          : [];
        const responseData = decryptResponse
          ? JSON.parse(decryptResponse as string)
          : [];
        const callInfo = responseData[0] as callNow.callInfo;
        const phone = callInfo.telephone;
        let phoneNumber = phone;
        if (Platform.OS !== 'android') {
          phoneNumber = `telprompt:${phone}`;
        } else {
          phoneNumber = `tel:${phone}`;
        }
        Linking.canOpenURL(phoneNumber)
          .then(supported => {
            if (!supported) {
              Alert.alert('Phone number is not available');
            } else {
              return Linking.openURL(phoneNumber);
            }
          })
          .catch(err => console.log(err));
      } else {
        setIsCallLoader(false);
        Alert.alert(string.appName, string.somethingWentWrong);
      }
    } catch (error) {
      setIsCallLoader(false);
    }
  };

  const handleCallNow = () => {
    if (userId) {
      callNowAPI();
    } else {
      navigation.navigate(appRoutes.PreAuth);
    }
  };

  const getUserIdFromStorage = async () => {
    try {
      const userInfo = (await Methods.getPref(
        Constant.userInfo,
      )) as userList.userDetail;
      if (userInfo) {
        setUserId(userInfo.id);
        setUserInfo(userInfo);
        callUserListApi(userInfo.id);
      } else {
        setUserId('');
      }
    } catch {
      setUserId('');
    }
  };

  const callUserListApi = (id: string) => {
    dispatch(userListRequest({user_id: id}));
  };

  const handleUserModalClose = () => {
    userModalRef.current?.close();
  };

  const openScreenAccordingType = () => {
    switch (type) {
      case HomeMenu.Prescription:
        navigation.navigate(appRoutes.PrescriptionManager);
        break;
      case HomeMenu.BookService:
        navigation.navigate(appRoutes.BookAService);
        break;
      case HomeMenu.User:
        navigation.navigate(appRoutes.User);
        break;
    }
  };

  const openUserModalAccordingType = (type: number) => {
    switch (type) {
      case HomeMenu.Prescription:
        userModalRef.current?.open();
        setType(type);
        break;
      case HomeMenu.BookService:
        userModalRef.current?.open();
        setType(type);
        break;
      case HomeMenu.User:
        setType(type);
        userModalRef.current?.open();
        break;
      case HomeMenu.MedicineReminder:
        navigation.navigate(appRoutes.MedicineReminder);
        break;
      case HomeMenu.Locator:
        navigation.navigate(appRoutes.Locator);
        break;
      case HomeMenu.MyPharmacy:
        navigation.navigate(appRoutes.MyPharmacy);
        break;
    }
  };

  const handleRightPress = async () => {
    const storeList = await Methods.getPref(Constant.storeList);
    const fcmToken = await Methods.getPref(Constant.fcmToken);
    await AsyncStorage.clear();
    Methods.savePref(Constant.storeList, storeList);
    Methods.savePref(Constant.fcmToken, fcmToken);
    getUserIdFromStorage();
  };

  const handleHomeMenuPress = (type: number) => {
    if (userId) {
      openUserModalAccordingType(type);
    } else {
      navigation.navigate(appRoutes.PreAuth);
    }
  };

  const handleUserItemPress = (userInfo: userList.userDetail) => {
    addPatientInfoInStorage(userInfo);
    bottomSheetRef.current?.close();
  };

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.open();
  }, []);

  const handleUserNamePress = useCallback(() => {
    handlePresentModalPress();
  }, []);

  const handleUserModalSubmit = () => {
    userModalRef.current?.close();
    openScreenAccordingType();
  };

  return (
    <SafeAreaView style={styles.safeAreaCcontainer} edges={['top']}>
      <SafeAreaView
        style={styles.safeAreaInside}
        edges={['left', 'right', 'bottom']}>
        <ToolBar
          isRightBtn={userId ? true : false}
          onRightPress={handleRightPress}
        />
        <View style={styles.container}>
          {HomeMenuList.map((item, index) => {
            return (
              <View style={styles.rowContainer} key={`TabRow-${index}`}>
                {item.map((rowItem, rowIndex) => {
                  return (
                    <Pressable
                      onPress={() => {
                        handleHomeMenuPress(rowItem.type);
                      }}
                      style={styles.menuItem}
                      key={`HomeTab-${rowIndex}`}>
                      <Image source={rowItem.icon} style={styles.menuImage} />
                      <Text style={styles.menuTitle}>
                        {rowItem.title.toUpperCase()}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            );
          })}
        </View>
        <View>
          <Pressable
            disabled={isCallLoader}
            style={styles.callBtnContainer}
            onPress={handleCallNow}>
            {isCallLoader ? (
              <ActivityIndicator size={'small'} color={COLORS.white} />
            ) : (
              <>
                <Image source={IMAGES.ic_call} style={styles.callLogo} />
                <Text style={styles.callNow}>
                  {string.callNow.toUpperCase()}
                </Text>
              </>
            )}
          </Pressable>
        </View>
      </SafeAreaView>
      <ModalUser
        {...{patientInfo}}
        ref={userModalRef}
        onUserNamePress={handleUserNamePress}
        onUserModalClose={handleUserModalClose}
        onUserModalSubmit={handleUserModalSubmit}
      />
      <ModalUserList
        userList={userList}
        ref={bottomSheetRef}
        onUserItemPress={handleUserItemPress}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
