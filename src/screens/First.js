import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Second from '../screens/Second';
import Third from '../screens/Third';

const Tab = createMaterialTopTabNavigator();

// todo : GNB API 요청 후 뿌려주기
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarItemStyle: {width: 77},
      }}>
      <Tab.Screen name="추천" component={Second} />
      <Tab.Screen name="코로나19" component={Third} />
      <Tab.Screen name="정치" component={Second} />
      <Tab.Screen name="경제" component={Third} />
      <Tab.Screen name="사회" component={Second} />
      <Tab.Screen name="국제" component={Third} />
      <Tab.Screen name="연애" component={Second} />
      <Tab.Screen name="스포츠" component={Third} />
      <Tab.Screen name="IT" component={Second} />
      <Tab.Screen name="문화" component={Third} />
    </Tab.Navigator>
  );
}

function First() {
  return <Tabs />;
}

export default First;
