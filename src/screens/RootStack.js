import React from 'react';
import {Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DetailScreen from './DetailScreen';
import BottomNavigator from '../navigation/BottomNavigator';

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
        name="Detail"
        component={DetailScreen}
        options={{
          headerRight: () => (
            // <Button
            //   onPress={() => alert('This is a button!')}
            //   title="저장"
            //   color="#333"
            // />
            // todo : bookmark 아닐경우 : bookmark-border
            <Icon name="bookmark" size={24} color={'#333333'} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
