import {CommonActions} from '@react-navigation/native';
import * as React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import IMAGES from '../../assets/images';
import ToolBar from '../../components/custom/toolbar';
import {appRoutes} from '../../navigation/appRoutes';
import {ThankServiceScreenProps} from '../../typings';
import string from '../../utils/string';
import styles from './styles';

const ThankServiceScreen = (props: ThankServiceScreenProps) => {
  const {navigation} = props;
  const handleGoBackPress = () => {
    const homeDispatch = CommonActions.reset({
      index: 0,
      routes: [{name: appRoutes.Home}],
    });
    navigation.dispatch(homeDispatch);
  };
  return (
    <SafeAreaView style={styles.safeAreaCcontainer}>
      <ToolBar />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{string.ThankYou}</Text>
        <Text style={styles.subTitle}>{string.ForYourService}</Text>
      </View>
      <Image style={styles.checkLogo} source={IMAGES.ic_greeen_check} />
      <Text style={styles.suggetionText}>{string.orderConfirmation}</Text>
      <Pressable style={styles.btnContainer} onPress={handleGoBackPress}>
        <Text style={styles.btnTxt}>{string.goBackHome}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ThankServiceScreen;
