import React, {useContext} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {IntroContext} from '../context/intro';
import {useQuery} from 'react-query';
import {getConfig} from '../api/config';
import categoriesStorage from '../storages/categoriesStorage';

import List from '../components/List';
import SearchScreen from '../screens/SearchScreen';
import SettingScreen from '../screens/SettingScreen';
import {ThemeColorContext} from '../context/ThemeColorProvider';
import styled from 'styled-components/native';

const Tab = createMaterialTopTabNavigator();

function Tabs() {
  const {data, isLoading} = useQuery('config', getConfig);
  const {changeState} = useContext(IntroContext);
  const {colors} = useContext(ThemeColorContext);

  const gnb = data && Object.entries(data.gnb).sort();

  const removeStorage = () => {
    categoriesStorage.remove();
    changeState();
  };

  if (!data) {
    // todo
    return <Text>데이터가 없습니다.</Text>;
  }

  return (
    <>
      {/*<TouchableOpacity onPress={() => removeStorage()}>*/}
      {/*  <Text>Remove Storage</Text>*/}
      {/*</TouchableOpacity>*/}
      {/*<Tab.Navigator*/}
      {/*  screenOptions={{*/}
      {/*    tabBarScrollEnabled: true,*/}
      {/*    tabBarItemStyle: {width: 77},*/}
      {/*  }}>*/}
      {/*  {gnb.map(menu => (*/}
      {/*    <Tab.Screen*/}
      {/*      name={menu[1]}*/}
      {/*      key={menu[0]}*/}
      {/*      children={() => <List codeName={menu[1]} code={menu[0]} />}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</Tab.Navigator>*/}
      <Text>Tabs</Text>
    </>
  );
}

export default function AppNavigator() {
  return <Tabs />;
}
