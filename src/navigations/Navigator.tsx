import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import LandingPage from '../screens/LandingPage';
import EditHolidayScreen from '../screens/EditHolidayScreen';
import {RootStackParamList} from './types';

export const navigationRef = createNavigationContainerRef();

const Stack = createStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="LandingPage">
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{title: 'Bank Holidays'}}
        />
        <Stack.Screen
          name="EditHoliday"
          component={EditHolidayScreen}
          options={{title: 'Edit Holiday'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
