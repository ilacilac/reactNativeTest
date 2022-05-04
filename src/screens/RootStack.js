import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WriteScreen from './WriteScreen';
import BottomNavigator from '../navigation/BottomNavigator';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
