import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigator from './src/navigation/BottomNavigator';
import {QueryClientProvider, QueryClient} from 'react-query';
import {IntroProvider} from './src/context/intro';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IntroProvider>
        <NavigationContainer>
          <SafeAreaView />
          <BottomNavigator />
        </NavigationContainer>
      </IntroProvider>
    </QueryClientProvider>
  );
}
