import {CommonActions} from '@react-navigation/native';
import * as React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import IMAGES from '../../assets/images';
import ToolBar from '../../components/custom/toolbar';
import {appRoutes} from '../../navigation/appRoutes';
import {ThankOrderScreenProps} from '../../typings';
import string from '../../utils/string';
import styles from './styles';

const ThankOrderScreen = (props: ThankOrderScreenProps) => {
  const {navigation} = props;

  const handleLeftPress = () => {
    const homeDispatch = CommonActions.reset({
      index: 0,
      routes: [{name: appRoutes.Home}],
    });
    navigation.dispatch(homeDispatch);
  };

  return (
    <SafeAreaView style={styles.safeAreaCcontainer}>
      <ToolBar isLeftBtn onLeftPress={handleLeftPress} />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{string.ThankYou}</Text>
        <Text style={styles.subTitle}>{string.ForYourOrder}</Text>
      </View>
      <Image style={styles.checkLogo} source={IMAGES.ic_greeen_check} />
      <Text style={styles.suggetionText}>
        {string.AnotherOrderPrescription}
      </Text>
      <View style={styles.actionBtnContainer}>
        <Pressable
          style={styles.leftBtnContainer}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.leftBtnText}>{string.yes}</Text>
        </Pressable>
        <Pressable style={styles.rightBtnContainer} onPress={handleLeftPress}>
          <Text style={styles.rightBtnText}>{string.no}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ThankOrderScreen;
