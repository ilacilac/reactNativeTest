import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigator from './src/navigation/BottomNavigator';
import {QueryClientProvider, QueryClient} from 'react-query';
import {IntroProvider} from './src/context/intro';
import {ThemeColorProvider} from './src/context/ThemeColorProvider';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import RootStack from './src/screens/RootStack';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <ThemeColorProvider>
          <IntroProvider>
            <RootStack />
          </IntroProvider>
        </ThemeColorProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
