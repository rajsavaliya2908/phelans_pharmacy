import {BottomSheetModal} from '@gorhom/bottom-sheet';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Pressable,
  Image,
  Alert,
  View,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import IMAGES from '../../assets/images';
import ModalServiceList from '../../components/custom/modalServiceList';
import ToolBar from '../../components/custom/toolbar';
import {AppState} from '../../redux';
import {serviceListRequest} from '../../redux/actions/serviceListAction';
import {serviceOrderRequest} from '../../redux/actions/serviceOrderAction';
import {serviceList} from '../../redux/typings/serviceList';
import {serviceOrder} from '../../redux/typings/serviceOrder';
import {userList} from '../../redux/typings/userList';
import {BookAServiceScreenProps} from '../../typings';
import COLORS from '../../utils/colors';
import {Constant} from '../../utils/constants';
import Methods from '../../utils/methods';
import string from '../../utils/string';
import styles from './styles';

const BookAServiceScreen = (props: BookAServiceScreenProps) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const selector = useSelector((s: AppState) => s);
  const serviceListProps = selector.serviceList as serviceList.ServiceListProps;
  const serviceOrderProps =
    selector.serviceOrder as serviceOrder.ServiceOrderProps;
  const {loading} = serviceOrderProps;

  const [serviceName, setServiceName] = useState<serviceList.serviceInfo>({
    service_id: '-1',
    service_name: 'Select A Service',
  });
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [tiNotes, setTiNotes] = useState('');

  useEffect(() => {
    dispatch(serviceListRequest());
  }, []);

  const handleLeftPress = () => {
    navigation.goBack();
  };

  const hanldeServicePress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const handleServiceItemPress = (item: serviceList.serviceInfo) => {
    setServiceName(item);
    bottomSheetRef.current?.close();
  };

  const handleBookServiceBtnPress = async () => {
    if (serviceName.service_id == '-1') {
      Alert.alert(string.appName, string.serviceName);
    } else if (!tiNotes.trim().length) {
      Alert.alert(string.appName, string.notesValidation);
    } else {
      const patientInfo = (await Methods.getPref(
        Constant.patientInfo,
      )) as userList.userDetail;
      const userInfo = (await Methods.getPref(
        Constant.userInfo,
      )) as userList.userDetail;
      // userInfo.store.id

      dispatch(
        serviceOrderRequest({
          user_id: patientInfo.id,
          store_id: userInfo.store.id,
          service_id: serviceName.service_id,
          service_text: tiNotes,
        }),
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ToolBar isLeftBtn onLeftPress={handleLeftPress} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.kavContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          {serviceListProps.loading ? (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size={'large'} color={COLORS.blue} />
            </View>
          ) : (
            <>
              <Text style={styles.title}>{string.bookAService}</Text>
              <Pressable
                style={styles.serviceNameContainer}
                onPress={hanldeServicePress}>
                <Text style={styles.serviceName}>
                  {serviceName.service_name}
                </Text>
                <Image source={IMAGES.ic_down} style={styles.downArrowIcon} />
              </Pressable>
              <TextInput
                value={tiNotes}
                multiline
                onChangeText={text => setTiNotes(text)}
                textAlignVertical="top"
                style={styles.input}
                placeholder={string.additionalNotes}
              />
              <Pressable
                disabled={loading}
                style={styles.btnContainer}
                onPress={handleBookServiceBtnPress}>
                {loading ? (
                  <ActivityIndicator size={'small'} color={COLORS.white} />
                ) : (
                  <Text style={styles.btnText}>{string.bookYourService}</Text>
                )}
              </Pressable>
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
      <ModalServiceList
        ref={bottomSheetRef}
        onServiceItemPress={handleServiceItemPress}
      />
    </SafeAreaView>
  );
};

export default BookAServiceScreen;
