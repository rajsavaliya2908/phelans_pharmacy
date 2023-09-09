import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ToolBar from '../../components/custom/toolbar';
import {LocatorScreenProps} from '../../typings';
import styles from './styles';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styleConfig from '../../config/styleConfig';
import IMAGES from '../../assets/images';
import {useDispatch, useSelector} from 'react-redux';
import {storeListRequest} from '../../redux/actions/storeListAction';
import ModalStoreList from '../../components/custom/modalStoreList';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {storeList} from '../../redux/typings/storeList';
import {AppState} from '../../redux';
import Methods from '../../utils/methods';
import {Constant} from '../../utils/constants';
import {userList} from '../../redux/typings/userList';
import COLORS from '../../utils/colors';

const LocatorScreen = (props: LocatorScreenProps) => {
  const {navigation} = props;

  const ref = useRef<MapView>(null);
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const selector = useSelector((s: AppState) => s);
  const storeListProps = selector.storeList as storeList.storeListProps;
  const {loading, storeListResponse} = storeListProps;
  const dispatch = useDispatch();
  const ASPECT_RATIO = styleConfig.width / styleConfig.height;
  const LATITUDE = 37.78825;
  const LONGITUDE = -122.4324;
  //   const LATITUDE_DELTA = 0.0922;
  const LATITUDE_DELTA = 0.0022;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const [currentStoreInfo, setCurrentStoreInfo] =
    useState<storeList.storeDetail>(Object);

  useEffect(() => {
    dispatch(storeListRequest());
  }, []);

  useEffect(() => {
    getCurrentStoreIdAndSetData();
  }, [storeListProps]);

  const handleLeftPress = () => {
    navigation.goBack();
  };

  const getCurrentStoreIdAndSetData = async () => {
    const userInfo = (await Methods.getPref(
      Constant.userInfo,
    )) as userList.userDetail;
    const storeList = storeListResponse;
    if (storeList && storeList.length) {
      const currentStoreInfo = storeList.find(
        item => item.id === userInfo.store.id,
      );
      //   Alert.alert(currentStoreInfo?.store_name);
      setRegion({
        latitude: Number(currentStoreInfo?.lat),
        longitude: Number(currentStoreInfo?.lng),
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
      setCurrentStoreInfo(currentStoreInfo ? currentStoreInfo : Object);
    }
  };

  const handleStoreNamePress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const handleStoreItemPress = (item: storeList.storeDetail) => {
    const region = {
      latitude: Number(item.lat),
      longitude: Number(item.lng),
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };
    setRegion(region);
    setCurrentStoreInfo(item);
    bottomSheetRef.current?.close();
    ref?.current?.animateToRegion(region, 350);
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ToolBar isLeftBtn onLeftPress={handleLeftPress} />
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} color={COLORS.blue} />
        </View>
      ) : (
        <View style={styles.container}>
          <MapView
            ref={ref}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={region}>
            <Marker
              image={IMAGES.ic_pin}
              coordinate={{
                latitude: currentStoreInfo?.lat
                  ? Number(currentStoreInfo.lat)
                  : LATITUDE,
                longitude: currentStoreInfo?.lat
                  ? Number(currentStoreInfo.lng)
                  : LONGITUDE,
              }}
            />
          </MapView>
          <View style={styles.inputContainer}>
            <Pressable
              style={styles.storeNameContainer}
              onPress={handleStoreNamePress}>
              <Text style={styles.storeName}>
                {currentStoreInfo.store_name}
              </Text>
              <Image source={IMAGES.ic_down} style={styles.downArrowIcon} />
            </Pressable>
          </View>
        </View>
      )}
      <ModalStoreList
        ref={bottomSheetRef}
        onStoreItemPress={handleStoreItemPress}
      />
    </SafeAreaView>
  );
};

export default LocatorScreen;
