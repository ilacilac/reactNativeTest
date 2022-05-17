import React, {useContext, useEffect, useState} from 'react';
import {SettingContext} from '../context/SettingProvider';
import LoadingScreen from './LoadingScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen from './IntroScreen';
import MainScreen from './MainScreen';
import InitSettingScreen from './InitSettingScreen';
import DetailScreen from './DetailScreen';
import storageManager from '../storages/storageManager';

const Stack = createNativeStackNavigator();

function RootScreen() {
  const [initialRouteName, setInitialRouteName] = useState('IntroScreen');
  const {setting} = useContext(SettingContext);

  // useEffect(() => {
  //   if (setting?.storages) {
  //     storageManager.remove();
  //   }
  // }, []);

  // useEffect(() => {
  //   if (!setting?.storages) {
  //     storageManager.set('c', 1);
  //   }
  // }, []);

  console.log(setting?.storages);

  // TODO initialRouteName
  return !setting ? (
    <LoadingScreen />
  ) : (
    <Stack.Navigator
      initialRouteName={setting.storages ? 'MainScreen' : 'IntroScreen'}>
      <Stack.Screen
        name="IntroScreen"
        component={IntroScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InitSettingScreen"
        component={InitSettingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        // options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootScreen;
