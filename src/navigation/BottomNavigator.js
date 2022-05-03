import React, {useContext, useEffect, useState} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import News from '../screens/News';
import SelectCategoryPage from '../screens/SelectCategoryPage';
import {IntroContext} from '../context/intro';
import categoriesStorage from '../storages/categoriesStorage';

const Tab = createBottomTabNavigator();

function SearchScreen() {
  return <Text>Search</Text>;
}
function SettingScreen() {
  return <Text>Setting</Text>;
}

// todo
// 이곳에서 intro로 판별하기보다는 상위로 옮기는 방향

function BottomNavigator() {
  const [category, setCategory] = useState(false);

  const {intro} = useContext(IntroContext);

  useEffect(() => {
    (async () => {
      const isCategories = await categoriesStorage.get();
      setCategory(isCategories);
    })();
  }, [category]);

  return !intro ? (
    <SelectCategoryPage />
  ) : (
    <Tab.Navigator initialRouteName="News">
      <Tab.Screen
        name="News"
        component={News}
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
  );
}

export default BottomNavigator;
