import React, {useRef, useCallback, useState, useEffect} from 'react';
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
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import IMAGES from '../../assets/images';
import ToolBar from '../../components/custom/toolbar';
import {OrderPrescriptionScreenProps} from '../../typings';
import string from '../../utils/string';
import styles from './styles';
import DeviceInfo from 'react-native-device-info';

import {
  launchCamera,
  launchImageLibrary,
  Asset,
} from 'react-native-image-picker';
import ModalImagePicker from '../../components/custom/modalImagePicker';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';
import {prescriptionOrderRequest} from '../../redux/actions/prescriptionOrderAction';
import Methods from '../../utils/methods';
import {Constant} from '../../utils/constants';
import {userList} from '../../redux/typings/userList';
import {AppState} from '../../redux';
import {prescriptionOrder} from '../../redux/typings/prescriptionOrder';
import COLORS from '../../utils/colors';

const OrderPrescriptionScreen = (props: OrderPrescriptionScreenProps) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const selector = useSelector((s: AppState) => s);
  const prescriptionOrderProps =
    selector.prescriptionOrder as prescriptionOrder.PrescriptionOrderProps;

  const {loading} = prescriptionOrderProps;
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [imgSrc, setImgSrc] = useState<Asset>(Object);
  const [prescriptionTxt, setPrescriptionTxt] = useState<string>('');
  const [collectionTxt, setCollectionTxt] = useState<string>('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setImgSrc({uri: ''});
      setPrescriptionTxt('');
      setCollectionTxt('');
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  const handleLeftPress = () => {
    navigation.goBack();
  };

  const onButtonPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const handleCameraPress = async () => {
    bottomSheetRef.current?.close();
    const result = await launchCamera({
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 400,
      maxWidth: 900,
    });
    if (result) {
      if (result.errorCode === 'permission') {
        Alert.alert(string.appName, string.permissionCameraInfo);
      } else if (result && result.assets) {
        console.log('heyyyyy', result?.assets[0]);
        setImgSrc(result?.assets[0]);
      } else {
        Alert.alert(string.appName, string.somethingWentWrong);
      }
    }
  };

  const handleGalleryPress = async () => {
    bottomSheetRef.current?.close();
    const result = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: false,
    });
    if (result) {
      if (result.errorCode === 'permission') {
        Alert.alert(string.appName, string.permissionGalleryInfo);
      } else if (result && result.assets) {
        console.log('heyyyyy2', result?.assets[0]);
        setImgSrc(result?.assets[0]);
      } else {
        Alert.alert(string.appName, string.somethingWentWrong);
      }
    }
  };

  const handleSubmitBtnPress = () => {
    if (!prescriptionTxt.trim().length) {
      Alert.alert(string.appName, string.prescriptionValidation);
    } else {
      callPrescriptionOrderApi();
    }
  };

  const callPrescriptionOrderApi = async () => {
    const userInfo = (await Methods.getPref(
      Constant.userInfo,
    )) as userList.userDetail;
    console.log('CC>>>>>>', userInfo?.store.id, userInfo?.id);
    const userId = userInfo?.id;
    const storeId = userInfo?.store.id ? userInfo?.store.id : '';
    const appVersion = DeviceInfo.getVersion();
    var file;
    if (imgSrc && imgSrc.uri && imgSrc.fileName && imgSrc.type) {
      file = {
        uri: imgSrc.uri,
        type: imgSrc.type,
        name: imgSrc.fileName,
      };
    }

    dispatch(
      prescriptionOrderRequest({
        collection_time: collectionTxt,
        user_id: userId,
        store_id: storeId,
        prescription_text: prescriptionTxt,
        prescription_file: imgSrc?.uri ? file : '',
        app_version: appVersion,
      }),
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaCcontainer}>
      <ToolBar isLeftBtn onLeftPress={handleLeftPress} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.kavContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>{string.orderPrescription}</Text>
          <TextInput
            value={prescriptionTxt}
            multiline
            onChangeText={text => setPrescriptionTxt(text)}
            textAlignVertical="top"
            style={styles.input}
            placeholder={string.prescription1}
          />
          <TextInput
            onChangeText={text => setCollectionTxt(text)}
            multiline
            value={collectionTxt}
            textAlignVertical="top"
            style={styles.input}
            placeholder={string.prescription2}
          />

          <Pressable
            style={[
              styles.photoContainer,
              {overflow: imgSrc?.uri ? 'hidden' : 'visible'},
            ]}
            onPress={onButtonPress}>
            {imgSrc?.uri ? (
              <Image source={{uri: imgSrc.uri}} style={styles.captureImage} />
            ) : (
              <>
                <Image source={IMAGES.ic_camera} style={styles.cameraLogo} />
                <Text style={styles.cameraInfo}>{string.takePhoto}</Text>
              </>
            )}
          </Pressable>
          <Pressable
            disabled={loading}
            style={styles.btnContainer}
            onPress={handleSubmitBtnPress}>
            {loading ? (
              <ActivityIndicator size={'small'} color={COLORS.white} />
            ) : (
              <Text style={styles.btnText}>{string.submit}</Text>
            )}
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
      <ModalImagePicker
        ref={bottomSheetRef}
        onCameraPress={handleCameraPress}
        onGalleryPress={handleGalleryPress}
      />
    </SafeAreaView>
  );
};

export default OrderPrescriptionScreen;
