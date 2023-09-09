import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import AddUserScreen from '../screens/addUser';
import PreAuthScreen from '../screens/auth/preAuth';
import RegisterScreen from '../screens/auth/register';
import SignInScreen from '../screens/auth/signIn';
import SplashScreen from '../screens/auth/splash';
import BookAServiceScreen from '../screens/bookAService';
import HomeScreen from '../screens/home';
import LocatorScreen from '../screens/locator';
import MedicineReminderScreen from '../screens/medicineReminder';
import MyPharmcyScreen from '../screens/myPharmacy';
import OrderPrescriptionScreen from '../screens/orderPrescription';
import PrescriptionManagercreen from '../screens/prescriptionManager';
import PrescriptionReminderScreen from '../screens/prescriptionReminder';
import ThankOrderScreen from '../screens/thankOrder';
import ThankServiceScreen from '../screens/thankService';
import UserScreen from '../screens/user';
import {RootStackParamList} from '../typings';
import COLORS from '../utils/colors';

import {appRoutes} from './appRoutes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

const MainNavigation = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      fallback={<ActivityIndicator color={COLORS.black} size="large" />}>
      <Stack.Navigator
        initialRouteName={appRoutes.Splash}
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name={appRoutes.Splash} component={SplashScreen} />
          <Stack.Screen name={appRoutes.PreAuth} component={PreAuthScreen} />
          <Stack.Screen name={appRoutes.SignIn} component={SignInScreen} />
          <Stack.Screen name={appRoutes.Register} component={RegisterScreen} />
          <Stack.Screen name={appRoutes.AddUser} component={AddUserScreen} />
          <Stack.Screen name={appRoutes.Home} component={HomeScreen} />
          <Stack.Screen
            name={appRoutes.PrescriptionManager}
            component={PrescriptionManagercreen}
          />
          <Stack.Screen
            name={appRoutes.OrderPrescription}
            component={OrderPrescriptionScreen}
          />
          <Stack.Screen
            name={appRoutes.ThankOrder}
            component={ThankOrderScreen}
          />
          <Stack.Screen
            name={appRoutes.PrescriptionReminder}
            component={PrescriptionReminderScreen}
          />
          <Stack.Screen
            name={appRoutes.BookAService}
            component={BookAServiceScreen}
          />
          <Stack.Screen
            name={appRoutes.ThankService}
            component={ThankServiceScreen}
          />
          <Stack.Screen
            name={appRoutes.MedicineReminder}
            component={MedicineReminderScreen}
          />
          <Stack.Screen name={appRoutes.Locator} component={LocatorScreen} />
          <Stack.Screen
            name={appRoutes.MyPharmacy}
            component={MyPharmcyScreen}
          />
          <Stack.Screen name={appRoutes.User} component={UserScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
