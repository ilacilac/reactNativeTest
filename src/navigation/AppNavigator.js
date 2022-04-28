import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import First from '../screens/First';
import Second from '../screens/Second';
import Third from '../screens/Third';

const Tab = createMaterialTopTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarItemStyle: {width: 80},
      }}>
      <Tab.Screen name="추천" component={First} />
      <Tab.Screen name="코로나19" component={Second} />
      <Tab.Screen name="정치" component={Third} />
      <Tab.Screen name="경제" component={Third} />
      <Tab.Screen name="사회" component={Third} />
      <Tab.Screen name="국제" component={Third} />
      <Tab.Screen name="연애" component={Third} />
      <Tab.Screen name="스포츠" component={Third} />
      <Tab.Screen name="IT" component={Third} />
      <Tab.Screen name="문화" component={Third} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Tabs />
    // </NavigationContainer>
  );
}
