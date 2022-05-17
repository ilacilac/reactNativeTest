import React, {useContext, useEffect, useState} from 'react';
import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DetailScreen from './DetailScreen';
import InitSettingScreen from './InitSettingScreen';
import IntroScreen from './IntroScreen';
import MainScreen from './MainScreen';
import categoriesStorage from '../storages/categoriesStorage';
import {ThemeColorContext} from '../context/ThemeColorProvider';
import {IntroContext} from '../context/intro';
import {useQuery} from 'react-query';
import {getConfig} from '../api/config';

const Stack = createNativeStackNavigator();

function RootStack() {
  const {intro} = useContext(IntroContext);
  const {isDark, colors, setScheme} = useContext(ThemeColorContext);
  const {data, isLoading} = useQuery('config', getConfig);
  const [category, setCategory] = useState(intro);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <Stack.Navigator initialRouteName="MainScreen">
      {!category ? (
        <Stack.Screen
          name="IntroScreen"
          component={() => <IntroScreen data={data} />}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name="BottomNavigator"
          component={MainScreen}
          options={{headerShown: false}}
        />
      )}
      <Stack.Screen
        name="SelectCategoryScreen"
        component={InitSettingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerRight: () => (
            // todo : bookmark 아닐경우 : bookmark-border
            <Icon name="bookmark" size={24} color={'#333333'} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
