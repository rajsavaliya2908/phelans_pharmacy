import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import IMAGES from '../../assets/images';
import ToolBar from '../../components/custom/toolbar';
import styleConfig from '../../config/styleConfig';
import {appRoutes} from '../../navigation/appRoutes';
import {AppState} from '../../redux';
import {myPharmacyRequest} from '../../redux/actions/myPharmacyAction';
import {myPharmacy} from '../../redux/typings/myPharmacy';
import {userList} from '../../redux/typings/userList';
import {MyPharmacyScreenProps} from '../../typings';
import COLORS from '../../utils/colors';
import {Constant} from '../../utils/constants';
import Methods from '../../utils/methods';
import string from '../../utils/string';
import styles from './styles';

const MyPharmcyScreen = (props: MyPharmacyScreenProps) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const ref = useRef<MapView>(null);

  const selector = useSelector((s: AppState) => s);
  const myPharmacyProps = selector.myPharmacy as myPharmacy.MyPharmacyProps;
  const {loading} = myPharmacyProps;
  const myPharmacyInfo = myPharmacyProps.myPharmacyResponse[0];

  const ASPECT_RATIO = styleConfig.width / styleConfig.height;
  const LATITUDE = myPharmacyInfo ? Number(myPharmacyInfo.lat) : 37.78825;
  const LONGITUDE = myPharmacyInfo ? Number(myPharmacyInfo.lng) : -122.4324;
  const LATITUDE_DELTA = 0.0022;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const handleLeftPress = () => {
    navigation.goBack();
  };

  useEffect(() => {
    getUserInfoAndCallAPI();
  }, []);

  const getUserInfoAndCallAPI = async () => {
    const userInfo = (await Methods.getPref(
      Constant.userInfo,
    )) as userList.userDetail;
    const userId = userInfo.id;
    const storeId = userInfo.store.id;
    dispatch(myPharmacyRequest({user_id: userId, store_id: storeId}));
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ToolBar isLeftBtn onLeftPress={handleLeftPress} />
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} color={COLORS.blue} />
        </View>
      ) : (
        <ScrollView style={styles.svContainer}>
          <Text style={styles.title}>{string.myPharmacy}</Text>
          <View style={styles.storeDetailContainer}>
            <Text style={styles.storeName}>{myPharmacyInfo?.store_name}</Text>
            <Text style={styles.storeAddress}>{myPharmacyInfo?.address}</Text>
          </View>
          <View style={[styles.lineContainer, styles.marginExtra]} />
          <View style={styles.storeInfoContainer}>
            <Image style={styles.logo} source={IMAGES.ic_user_secondary} />
            <View style={styles.sectionInfoContainer}>
              <Text style={styles.sectionTitle}>{string.pharmacist}</Text>
              <Text style={styles.sectionDetail}>
                {string.na}
                {myPharmacyInfo?.manager_name}
              </Text>
            </View>
          </View>
          <View style={styles.lineContainer} />
          <View style={styles.storeInfoContainer}>
            <Image style={styles.logo} source={IMAGES.ic_contact} />
            <View style={styles.sectionInfoContainer}>
              <Text style={styles.sectionTitle}>{string.phone}</Text>
              <Text style={styles.sectionDetail}>
                {myPharmacyInfo?.telephone}
              </Text>
            </View>
          </View>
          <View style={styles.lineContainer} />
          <View style={styles.storeInfoContainer}>
            <Image style={styles.logo} source={IMAGES.ic_email_address} />
            <View style={styles.sectionInfoContainer}>
              <Text style={styles.sectionTitle}>{string.email}</Text>
              <Text style={styles.sectionDetail}>{myPharmacyInfo?.email}</Text>
            </View>
          </View>
          <View style={styles.lineContainer} />
          <View style={styles.storeInfoContainer}>
            <Image style={styles.logo} source={IMAGES.ic_service} />
            <View style={styles.sectionInfoContainer}>
              <Text style={styles.sectionTitle}>{string.storeServices}</Text>
              <Text style={styles.sectionDetail}>
                {myPharmacyInfo?.services}
              </Text>
            </View>
          </View>
          <View style={styles.lineContainer} />
          <View style={styles.storeInfoContainer}>
            <Image style={styles.logo} source={IMAGES.ic_reminder} />
            <View style={styles.sectionInfoContainer}>
              <Text style={styles.sectionTitle}>{string.openingHours}</Text>
              <Text style={styles.sectionDetail}>
                {string.mon}
                {'  '}
                {myPharmacyInfo?.monday}
              </Text>
              <Text style={styles.sectionDetail}>
                {string.tue}
                {'  '}
                {myPharmacyInfo?.tuesday}
              </Text>
              <Text style={styles.sectionDetail}>
                {string.wed}
                {'  '}
                {myPharmacyInfo?.wednesday}
              </Text>
              <Text style={styles.sectionDetail}>
                {string.thu}
                {'  '}
                {myPharmacyInfo?.thrusday}
              </Text>
              <Text style={styles.sectionDetail}>
                {string.fri}
                {'  '}
                {myPharmacyInfo?.friday}
              </Text>
              <Text style={styles.sectionDetail}>
                {string.sat}
                {'  '}
                {myPharmacyInfo?.saturday}
              </Text>
              <Text style={styles.sectionDetail}>
                {string.sun}
                {'  '}
                {myPharmacyInfo?.sunday}
              </Text>
            </View>
          </View>
          <View style={styles.lineContainer} />
          <Text style={styles.additionalInfo}>
            {myPharmacyInfo?.additional_info}
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate(appRoutes.Locator);
            }}>
            <MapView
              ref={ref}
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={region}>
              <Marker
                image={IMAGES.ic_pin}
                coordinate={{
                  latitude: myPharmacyInfo
                    ? Number(myPharmacyInfo?.lat)
                    : LATITUDE,
                  longitude: myPharmacyInfo
                    ? Number(myPharmacyInfo?.lng)
                    : LONGITUDE,
                }}
              />
            </MapView>
          </Pressable>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default MyPharmcyScreen;
