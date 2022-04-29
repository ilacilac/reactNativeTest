import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Search from '../screens/Search';
import Setting from '../screens/Setting';

const Tab = createMaterialTopTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarItemStyle: {width: 77},
      }}>
      <Tab.Screen name="추천" component={Search} />
      <Tab.Screen name="코로나19" component={Setting} />
      <Tab.Screen name="정치" component={Search} />
      <Tab.Screen name="경제" component={Setting} />
      <Tab.Screen name="사회" component={Search} />
      <Tab.Screen name="국제" component={Setting} />
      <Tab.Screen name="연애" component={Search} />
      <Tab.Screen name="스포츠" component={Setting} />
      <Tab.Screen name="IT" component={Search} />
      <Tab.Screen name="문화" component={Setting} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return <Tabs />;
}
