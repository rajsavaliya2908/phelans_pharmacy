import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import IMAGES from '../../../assets/images';
import {appRoutes} from '../../../navigation/appRoutes';
import {storeListRequest} from '../../../redux/actions/storeListAction';
import {SplashScreenProps} from '../../../typings';
import string from '../../../utils/string';
import styles from './styles';
import COLORS from '../../../utils/colors';
import {AppState} from '../../../redux';
import {storeList} from '../../../redux/typings/storeList';
import messaging from '@react-native-firebase/messaging';
import Methods from '../../../utils/methods';
import {Constant} from '../../../utils/constants';

const SplashScreen = (props: SplashScreenProps) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const selector = useSelector((s: AppState) => s);
  const {loading, storeListResponse} =
    selector.storeList as storeList.storeListProps;

  useEffect(() => {
    dispatch(storeListRequest());
  }, []);

  useEffect(() => {
    if (storeListResponse && storeListResponse?.length) {
      changeTheScreen();
    }
  }, [storeListResponse]);

  const getFCMToken = async () => {
    try {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      if (enabled) {
        await messaging().registerDeviceForRemoteMessages();
        const token = await messaging().getToken();
        if (token) {
          Methods.savePref(Constant.fcmToken, token);
          navigateTheScreen();
        } else {
          const token = await messaging().getToken();
          Methods.savePref(Constant.fcmToken, token);
          navigateTheScreen();
        }
      } else {
        navigateTheScreen();
        Alert.alert(
          'Please allow permission from setting to receive notification',
        );
      }
    } catch (e) {
      console.log(e);
    }
  };
  const navigateTheScreen = () => {
    setTimeout(() => {
      navigation.replace(appRoutes.Home);
    }, 1000);
  };

  const changeTheScreen = async () => {
    try {
      const fcmToken = await Methods.getPref(Constant.fcmToken);
      console.log(fcmToken, '~~~~Token');
      if (!fcmToken) {
        getFCMToken();
      } else {
        navigateTheScreen();
      }
    } catch (e) {
      getFCMToken();
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Image source={IMAGES.ic_logo} style={styles.logo} />
      <Text style={styles.title}>{string.welcomeText}</Text>
      <View style={styles.loaderContainer}>
        {loading ? (
          <ActivityIndicator size={'large'} color={COLORS.darkGrey} />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
