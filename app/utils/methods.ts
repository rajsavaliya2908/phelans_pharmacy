import AsyncStorage from '@react-native-async-storage/async-storage';
// import {CommonActions} from '@react-navigation/native';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// import {authRoutes} from '../auth/src/authRoutes';
// import {RootStackParamList} from '../main/typings';

const Methods = {
  savePref: (key: string, value: any) => {
    AsyncStorage.setItem(key, JSON.stringify(value));
  },
  saveStringPref: (key: string, value: string) => {
    AsyncStorage.setItem(key, value);
  },

  removePref: (key: string) => {
    AsyncStorage.removeItem(key);
  },
  getPref: (key: string) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (_, result) => {
        if (result) {
          resolve(JSON.parse(result));
        } else {
          reject(false);
        }
      });
    });
  },
  getStringPref: (key: string): Promise<string | null> => {
    return new Promise(resolve => {
      AsyncStorage.getItem(key, (_, result) => {
        if (result) {
          resolve(result);
        } else {
          resolve(null);
        }
      });
    });
  },
  isValidEmail: (text: string) => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (text.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  },
  //   logOut: async (
  //     navigation: NativeStackNavigationProp<
  //       RootStackParamList,
  //       'Splash',
  //       undefined
  //     >,
  //   ) => {
  //     await AsyncStorage.clear();
  //     navigation.dispatch(
  //       CommonActions.reset({
  //         index: 1,
  //         routes: [{name: authRoutes.Splash}],
  //       }),
  //     );
  //     navigation.navigate(authRoutes.Splash);
  //   },
};

export default Methods;
