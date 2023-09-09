import moment from 'moment';
import React, {useCallback, useRef, useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Image,
  Alert,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import IMAGES from '../../assets/images';
import ToolBar from '../../components/custom/toolbar';
import {MedicineReminderScreenProps} from '../../typings';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import string from '../../utils/string';
import styles from './styles';
import {MedicineReminder} from '../../utils/enum';
import ModalFrequency from '../../components/custom/modalFrequency';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import Methods from '../../utils/methods';
import {Constant} from '../../utils/constants';
import {userList} from '../../redux/typings/userList';
import {useDispatch, useSelector} from 'react-redux';
import {medicationListRequest} from '../../redux/actions/medicationListAction';
import {AppState} from '../../redux';
import {medicationList} from '../../redux/typings/medicationList';
import ItemMedication from '../../components/custom/itemMedication';
import {medicationReminderRequest} from '../../redux/actions/medicationReminderAction';
import {editMedicationRequest} from '../../redux/actions/editMedicationAction';
import {deleteMedicationRequest} from '../../redux/actions/deleteMedicationAction';
import COLORS from '../../utils/colors';
import {editMedication} from '../../redux/typings/editMedication';
import {medicationReminder} from '../../redux/typings/medicationReminder';
import {deleteMedication} from '../../redux/typings/deleteMedication';

const MedicineReminderScreen = (props: MedicineReminderScreenProps) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const selector = useSelector((s: AppState) => s);

  const medicationListProps =
    selector.medicalList as medicationList.MedicationListProps;
  const editMedicationProps =
    selector.editMedication as editMedication.EditMedicationProps;
  const medicationReminderProps =
    selector.medicationReminder as medicationReminder.MedicationReminderProps;
  const deleteMedicationProps =
    selector.deleteMedication as deleteMedication.DeleteMedicationProps;
  const medicationList =
    medicationListProps.medicationListResponse as medicationList.reminderInfo[];

  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [tiReminderMsg, setTiReminderMsg] = useState<string>('');
  const [userInfo, setUserInfo] = useState<userList.userDetail>(Object);
  const [reminderInfo, setReminderInfo] =
    useState<medicationList.reminderInfo>(Object);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [type, setType] = useState<Number>(0);
  const [frequency, setFrequency] = useState<string>('Daily');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [mode, setMode] = useState<'date' | 'time' | 'datetime'>('date');
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const loading = medicationListProps.loading || deleteMedicationProps.loading;
  const postLoading =
    medicationReminderProps.loading || editMedicationProps.loading;

  const handleLeftPress = () => {
    navigation.goBack();
  };

  const handleConfirm = (date: Date) => {
    setDatePickerVisibility(false);
    switch (type) {
      case MedicineReminder.Date:
        setDate(date);
        break;
      case MedicineReminder.Time:
        setTime(date);
        break;
    }
    setDatePickerVisibility(false);
  };

  const handleTimePicker = (type: number) => {
    setType(type);
    switch (type) {
      case MedicineReminder.Date:
        if (date) {
          setCurrentDate(date);
        }
        setMode('date');
        setDatePickerVisibility(true);
        break;
      case MedicineReminder.Time:
        if (time) {
          setCurrentDate(time);
        }
        setMode('time');
        setDatePickerVisibility(true);
        break;
    }
  };

  useEffect(() => {
    getUserAndCallMedicationListAPI();
  }, []);

  const getUserAndCallMedicationListAPI = async () => {
    const userInfo = (await Methods.getPref(
      Constant.userInfo,
    )) as userList.userDetail;
    setUserInfo(userInfo);
    const userId = userInfo.id;
    dispatch(medicationListRequest({user_id: userId}));
  };

  const handleFrequencyItemPress = (frequency: string) => {
    setFrequency(frequency);
    bottomSheetRef.current?.close();
  };

  const handleFrequencySelection = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const handleClearBtnPress = () => {
    setDate(null);
    setTime(null);
    setTiReminderMsg('');
    setFrequency('Daily');
    setIsUpdate(false);
    setReminderInfo(Object);
  };
  const handleOnSubmitPress = () => {
    if (!time) {
      Alert.alert(string.appName, string.timeValidation);
    } else if (!date) {
      Alert.alert(string.appName, string.dateValidation);
    } else if (!tiReminderMsg.trim().length) {
      Alert.alert(string.appName, string.noteValidation);
    } else {
      if (!isUpdate) {
        dispatch(
          medicationReminderRequest({
            frequency: frequency,
            next_date: moment(date).format('DD/MM/YY'),
            reminder_text: tiReminderMsg,
            store_id: userInfo.store.id,
            user_id: userInfo.id,
            set_time: moment(time).format('hh:mm A'),
          }),
        );
      } else {
        dispatch(
          editMedicationRequest({
            frequency: frequency,
            next_date: moment(date).format('DD/MM/YY'),
            reminder_text: tiReminderMsg,
            id: reminderInfo.id,
            set_time: moment(time).format('hh:mm A'),
          }),
        );
      }
    }
    setReminderInfo(Object);
    setIsUpdate(false);
  };

  const handleEditIconPress = (item: medicationList.reminderInfo) => {
    setIsUpdate(true);
    setDate(moment(item.next_date, 'DD/MM/YYYY').toDate());
    setFrequency(item.frequency);
    setTime(moment(item.set_time, 'HH:mm A').toDate());
    setTiReminderMsg(item.reminder_text);
    setReminderInfo(item);
  };

  const handleDeleteIconPress = (item: medicationList.reminderInfo) => {
    Alert.alert(string.appName, string.deleteReminderAlert, [
      {
        text: string.no.toUpperCase(),
        style: 'cancel',
      },
      {
        text: string.yes.toUpperCase(),
        onPress: () => {
          dispatch(
            deleteMedicationRequest({
              user_id: userInfo.id,
              id: item.id,
            }),
          );
        },
      },
    ]);
  };

  const renderMedicationItem = (props: {
    item: medicationList.reminderInfo;
    index: number;
  }) => {
    return (
      <ItemMedication
        {...props}
        onEditIconPress={handleEditIconPress}
        onDeleteIconPress={handleDeleteIconPress}
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ToolBar isLeftBtn onLeftPress={handleLeftPress} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.kavContainer}>
        <Text style={styles.title}>{string.medicineReminder}</Text>

        <Pressable
          style={styles.timeContainer}
          onPress={() => {
            handleTimePicker(MedicineReminder.Time);
          }}>
          <Image style={styles.timeIcon} source={IMAGES.ic_set_time} />
          <View style={styles.line} />
          <View style={styles.timeTitleContainer}>
            <Text style={styles.timeTitle}>{string.setTime}</Text>
          </View>
          <View style={styles.pickTimeContainer}>
            <Text style={styles.time}>
              {time ? moment(time).format('hh:mm A') : string.hhmmam}
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.timeContainer}
          onPress={() => {
            handleTimePicker(MedicineReminder.Date);
          }}>
          <Image style={styles.timeIcon} source={IMAGES.ic_start_date} />
          <View style={styles.line} />
          <View style={styles.timeTitleContainer}>
            <Text style={styles.timeTitle}>{string.startDate}</Text>
          </View>
          <View style={styles.pickTimeContainer}>
            <Text style={styles.time}>
              {date ? moment(date).format('DD/MM/YY') : string.DDMMYY}
            </Text>
          </View>
        </Pressable>

        <Pressable
          style={styles.timeContainer}
          onPress={() => {
            handleFrequencySelection();
          }}>
          <Image style={styles.timeIcon} source={IMAGES.ic_set_frequency} />
          <View style={styles.line} />
          <View style={styles.timeTitleContainer}>
            <Text style={styles.timeTitle}>{string.setFrequency}</Text>
          </View>
          <View style={styles.pickTimeContainer}>
            <Text style={styles.time}>{frequency}</Text>
            <Image style={styles.dropDownIcon} source={IMAGES.ic_down} />
          </View>
        </Pressable>
        <TextInput
          value={tiReminderMsg}
          multiline
          onChangeText={text => setTiReminderMsg(text)}
          textAlignVertical="top"
          style={styles.input}
          placeholder={string.additionalNotes}
        />
        <View style={styles.btnContainer}>
          <Pressable
            disabled={postLoading}
            style={styles.leftBtnContainer}
            onPress={handleOnSubmitPress}>
            {postLoading ? (
              <ActivityIndicator size={'small'} color={COLORS.white} />
            ) : (
              <Text style={styles.leftBtnText}>{string.set}</Text>
            )}
          </Pressable>
          <Pressable
            style={styles.rightBtnContainer}
            onPress={handleClearBtnPress}>
            <Text style={styles.rightBtnText}>{string.clear}</Text>
          </Pressable>
        </View>
        <Text style={styles.reminderTitle}>{string.yourSetReminders}</Text>
        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size={'small'} color={COLORS.blue} />
          </View>
        ) : (
          <FlatList
            data={medicationList && medicationList.length ? medicationList : []}
            renderItem={renderMedicationItem}
          />
        )}
      </KeyboardAvoidingView>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        date={currentDate}
        onConfirm={handleConfirm}
        onCancel={() => {
          setDatePickerVisibility(false);
        }}
      />
      <ModalFrequency
        ref={bottomSheetRef}
        onFrequencyItemPress={handleFrequencyItemPress}
      />
    </SafeAreaView>
  );
};

export default MedicineReminderScreen;
