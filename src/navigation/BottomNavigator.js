import React, {useContext, useEffect, useState} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, StatusBar, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NewsScreen from '../screens/NewsScreen';

import categoriesStorage from '../storages/categoriesStorage';
import SettingScreen from '../screens/SettingScreen';

import {IntroContext} from '../context/intro';
import {ThemeColorContext} from '../context/ThemeColorProvider';
import SearchScreen from '../screens/SearchScreen';
import IntroScreen from '../screens/IntroScreen';

const Tab = createBottomTabNavigator();

// todo
// 이곳에서 intro로 판별하기보다는 상위로 옮기는 방향

function BottomNavigator() {
  const {intro} = useContext(IntroContext);
  const {isDark, colors, setScheme} = useContext(ThemeColorContext);
  const [category, setCategory] = useState(intro);

  useEffect(() => {
    (async () => {
      const isCategories = await categoriesStorage.get();
      setCategory(isCategories);
    })();
  }, [category, intro]);

  const styles = StyleSheet.create({
    tabMenu: {
      backgroundColor: colors.background,
    },
  });

  return !category ? (
    <IntroScreen />
  ) : (
    <>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      {/* <Tab.Navigator initialRouteName="News"> */}
      <Tab.Navigator>
        <Tab.Screen
          name="News"
          component={NewsScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="text-snippet" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="search" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="settings" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default BottomNavigator;
