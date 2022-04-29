import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Search from './Search';
import Setting from './Setting';

const Tab = createMaterialTopTabNavigator();

// todo : GNB API 요청 후 뿌려주기
// GNB 데이터 redux 관리
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

function News() {
  return <Tabs />;
}

export default News;
