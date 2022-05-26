import React, {useContext, useEffect, useState} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, StatusBar, StyleSheet} from 'react-native';
import storageManager from '../storages/storageManager';
import {SettingContext} from '../context/SettingProvider';
import {useSelector} from 'react-redux';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import NewsScreen from '../screens/NewsScreen';
//
// import categoriesStorage from '../storages/categoriesStorage';
// import SettingScreen from '../screens/SettingScreen';
//
// import {IntroContext} from '../context/intro';
// import {ThemeColorContext} from '../context/ThemeColorProvider';
// import SearchScreen from '../screens/SearchScreen';
// import IntroScreen from '../screens/IntroScreen';

const Tab = createBottomTabNavigator();

function MainScreen() {
  const {userSettings} = useSelector(({userSettings}) => ({
    userSettings,
  }));
  // const {isDark, colors, setScheme} = useContext(ThemeColorContext);
  // const styles = StyleSheet.create({
  //   tabMenu: {
  //     backgroundColor: colors.background,
  //   },
  // });

  useEffect(() => {
    (async () => {
      await storageManager.set('init', userSettings);
    })();
  }, [userSettings]);

  console.log('intro', userSettings);
  console.log('getAsyncStorage', storageManager.get());

  // console.log('!! userSettings', userSettings);
  return (
    // <>
    //   <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
    //   <Tab.Navigator>
    //     <Tab.Screen
    //       name="News"
    //       component={NewsScreen}
    //       options={{
    //         tabBarIcon: ({color, size}) => (
    //           <Icon name="text-snippet" size={size} color={color} />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="Search"
    //       component={SearchScreen}
    //       options={{
    //         tabBarIcon: ({color, size}) => (
    //           <Icon name="search" size={size} color={color} />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="Setting"
    //       component={SettingScreen}
    //       options={{
    //         tabBarIcon: ({color, size}) => (
    //           <Icon name="settings" size={size} color={color} />
    //         ),
    //       }}
    //     />
    //   </Tab.Navigator>
    // </>
    <Text>BottomNavigator</Text>
  );
}

export default MainScreen;
