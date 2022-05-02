import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text} from 'react-native';

import Search from '../screens/Search';
import Setting from '../screens/Setting';
import {useQuery} from 'react-query';
import {getConfig} from '../api/config';
import List from '../screens/List';

const Tab = createMaterialTopTabNavigator();

function Tabs() {
  const {data, isLoading} = useQuery('config', getConfig);
  console.log('data', data);
  // const gnb = Object.entries(data.gnb);

  if (data) {
    return <Text>nope</Text>;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarItemStyle: {width: 77},
      }}>
      {/* {gnb.map(menu => (
        <Tab.Screen
          name={menu[1]}
          key={menu[0]}
          children={() => <List code={menu[0]} />}
        />
      ))} */}
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
