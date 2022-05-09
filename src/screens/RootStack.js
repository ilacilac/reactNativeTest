import React from 'react';
import {Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BottomNavigator from '../navigation/BottomNavigator';
import DetailScreen from './DetailScreen';
import SelectCategoryScreen from './SelectCategoryScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BottomNavigator">
      <Stack.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectCategoryScreen"
        component={SelectCategoryScreen}
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
