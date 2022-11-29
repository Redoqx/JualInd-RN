import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import MainRoute from './src/navigator/MainRoute';

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <MainRoute />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
};

const ComponentReactor = () => {
  return <View></View>;
};

export default App;
