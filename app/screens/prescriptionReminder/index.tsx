import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import IMAGES from '../../assets/images';
import ToolBar from '../../components/custom/toolbar';
import {PrescriptionReminderScreenProps} from '../../typings';
import string from '../../utils/string';
import styles from './styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {ReorderReminderTime} from '../../utils/enum';
import moment from 'moment';

const PrescriptionReminderScreen = (props: PrescriptionReminderScreenProps) => {
  const {navigation} = props;
  const [reminderTitle, setReminderTitle] = useState('');
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<Date>(new Date());
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [type, setType] = useState<Number>(0);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [mode, setMode] = useState<'date' | 'time' | 'datetime'>('date');

  const handleLeftPress = () => {
    navigation.goBack();
  };

  const handleSaveBtnPress = () => {
    if (!reminderTitle.trim().length) {
      Alert.alert(string.appName, string.reminderTitleValidation);
    } else {
    }
  };

  const handleConfirm = (date: Date) => {
    setDatePickerVisibility(false);
    switch (type) {
      case ReorderReminderTime.Date:
        setDate(date);
        break;
      case ReorderReminderTime.Time:
        setTime(date);
        break;
    }
    setDatePickerVisibility(false);
  };

  const handleTimePicker = (type: number) => {
    setType(type);
    switch (type) {
      case ReorderReminderTime.Date:
        setCurrentDate(date);
        setMode('date');
        setDatePickerVisibility(true);
        break;
      case ReorderReminderTime.Time:
        setCurrentDate(time);
        setMode('time');
        setDatePickerVisibility(true);
        break;
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaCcontainer}>
      <ToolBar isLeftBtn onLeftPress={handleLeftPress} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.kavContainer}>
        <Text style={styles.title}>{string.reorderReminder}</Text>

        <View style={styles.reminderTitleContainer}>
          <Text style={styles.question}>{string.reminderTitleQuestion}</Text>
          <TextInput
            multiline
            value={reminderTitle}
            onChangeText={text => setReminderTitle(text)}
            style={styles.input}
            textAlignVertical="top"
            placeholder={string.reminderTitlePlaceholder}
          />
        </View>
        <Pressable
          style={styles.timeContainer}
          onPress={() => {
            handleTimePicker(ReorderReminderTime.Time);
          }}>
          <Image style={styles.timeIcon} source={IMAGES.ic_set_time} />
          <View style={styles.line} />
          <View style={styles.timeTitleContainer}>
            <Text style={styles.timeTitle}>{string.setTime}</Text>
          </View>
          <View style={styles.pickTimeContainer}>
            <Text style={styles.time}>{moment(time).format('hh:mm A')}</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.timeContainer}
          onPress={() => {
            handleTimePicker(ReorderReminderTime.Date);
          }}>
          <Image style={styles.timeIcon} source={IMAGES.ic_start_date} />
          <View style={styles.line} />
          <View style={styles.timeTitleContainer}>
            <Text style={styles.timeTitle}>{string.startDate}</Text>
          </View>
          <View style={styles.pickTimeContainer}>
            <Text style={styles.time}>{moment(date).format('DD/MM/YYYY')}</Text>
          </View>
        </Pressable>
        <Pressable style={styles.btnContainer} onPress={handleSaveBtnPress}>
          <Text style={styles.btnText}>{string.save}</Text>
        </Pressable>
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
    </SafeAreaView>
  );
};

export default PrescriptionReminderScreen;
