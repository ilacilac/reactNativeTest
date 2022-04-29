import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import News from '../screens/News';

const Tab = createBottomTabNavigator();

function SearchScreen() {
  return <Text>Search</Text>;
}
function SettingScreen() {
  return <Text>Setting</Text>;
}

function BottomNavigator() {
  return (
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
