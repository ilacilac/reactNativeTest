import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClientProvider, QueryClient} from 'react-query';
import {SettingProvider} from './src/context/SettingProvider';
import RootScreen from './src/screens/RootScreen';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SettingProvider>
          <RootScreen />
        </SettingProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
