import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Search from './Search';
import Setting from './Setting';
import AppNavigator from '../navigation/AppNavigator';

const Tab = createMaterialTopTabNavigator();

// todo : GNB API 요청 후 뿌려주기
// GNB 데이터 redux 관리

function News() {
  return <AppNavigator />;
}

export default News;
