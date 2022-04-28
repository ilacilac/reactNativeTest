import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import First from '../screens/First';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return <Text>News</Text>;
}
function SearchScreen() {
  return <Text>Search</Text>;
}
function NotificationScreen() {
  return <Text>Notification</Text>;
}
function MessageScreen() {
  return <Text>Message</Text>;
}

function BottomNavigator() {
  return (
    <Tab.Navigator initialRouteName="News">
      <Tab.Screen name="News" component={First} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
    </Tab.Navigator>
  );
}

export default BottomNavigator;
