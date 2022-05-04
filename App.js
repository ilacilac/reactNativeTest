import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigator from './src/navigation/BottomNavigator';
import {QueryClientProvider, QueryClient} from 'react-query';
import {IntroProvider} from './src/context/intro';
import {ThemeColorProvider} from './src/context/ThemeColorProvider';
// import RootStack from './src/screens/RootStack';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeColorProvider>
        <IntroProvider>
          <NavigationContainer>
            <SafeAreaView />
            {/* <RootStack />r */}
            <BottomNavigator />
          </NavigationContainer>
        </IntroProvider>
      </ThemeColorProvider>
    </QueryClientProvider>
  );
}
