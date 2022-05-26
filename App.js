import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClientProvider, QueryClient} from 'react-query';
import {SettingProvider} from './src/context/SettingProvider';
import RootScreen from './src/screens/RootScreen';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './src/modules';
import {composeWithDevTools} from 'redux-devtools-extension';

const queryClient = new QueryClient();
const store = createStore(rootReducer, composeWithDevTools());

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <SettingProvider>
            <RootScreen />
          </SettingProvider>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}
