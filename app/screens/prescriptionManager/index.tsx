import * as React from 'react';
import {Text, View, StyleSheet, Pressable, Image, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ToolBar from '../../components/custom/toolbar';
import {appRoutes} from '../../navigation/appRoutes';
import {PrescriptionManagerScreenProps} from '../../typings';
import {PrescriptionMenuList} from '../../utils/constants';
import {PrescriptionMenu} from '../../utils/enum';
import string from '../../utils/string';
import styles from './styles';

const PrescriptionManagercreen = (props: PrescriptionManagerScreenProps) => {
  const {navigation} = props;

  const handleLeftPress = () => {
    navigation.goBack();
  };

  const handlePrescriptonMenuPress = (type: number) => {
    switch (type) {
      case PrescriptionMenu.Order:
        navigation.navigate(appRoutes.OrderPrescription);
        break;
      case PrescriptionMenu.Reminder:
        navigation.navigate(appRoutes.PrescriptionReminder);
        break;
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaCcontainer}>
      <ToolBar isLeftBtn onLeftPress={handleLeftPress} />
      <Text style={styles.title}>{string.prescriptionManager}</Text>
      <View style={styles.container}>
        {PrescriptionMenuList.map((item, index) => {
          return (
            <View style={styles.rowContainer} key={`TabRow-${index}`}>
              {item.map((rowItem, rowIndex) => {
                return (
                  <Pressable
                    onPress={() => {
                      handlePrescriptonMenuPress(rowItem.type);
                    }}
                    style={styles.menuItem}
                    key={`PrescriptionTab-${rowIndex}`}>
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
    </SafeAreaView>
  );
};

export default PrescriptionManagercreen;
