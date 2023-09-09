import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainNavigation from './app/navigation';
import {Provider} from 'react-redux';
import {store} from './app/redux';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import messaging from '@react-native-firebase/messaging';
import {Alert, Platform} from 'react-native';
import notifee, {AndroidImportance} from '@notifee/react-native';

const App = () => {
  React.useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage, '~~~~~~~~~remoteMessage');
      displayNotification(remoteMessage);
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  const displayNotification = async (remoteMessage: any) => {
    try {
      const {data} = remoteMessage;
      const {title, message} = data;
      const ios = Platform.OS === 'ios' ? true : false;
      // Request permissions (required for iOS)
      await notifee.requestPermission();

      // Create a channel (required for Android)
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
        importance: AndroidImportance.HIGH,
      });

      // Display a notification
      await notifee.displayNotification({
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
        android: {
          channelId,
          // smallIcon: 'ic_small_icon',
          importance: AndroidImportance.HIGH,
          pressAction: {
            id: 'default',
          },
          // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        },
        ios: {},
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <MainNavigation />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
