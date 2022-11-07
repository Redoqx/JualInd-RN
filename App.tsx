import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainRoute from './src/navigator/MainRoute';

const App = () => {
  return (
    <NavigationContainer>
      <MainRoute />
    </NavigationContainer>
  );
};

export default App;
