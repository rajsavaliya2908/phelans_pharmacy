/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FormData from 'form-data';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';

FormData.prototype[Symbol.toStringTag] = 'FormData';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

notifee.onBackgroundEvent(async ({type, detail}) => {});

AppRegistry.registerComponent(appName, () => App);
