import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigator from './src/navigation/BottomNavigator';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <SafeAreaView />
        <BottomNavigator />
      </NavigationContainer>
    </>
  );
}
