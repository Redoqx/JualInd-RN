import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../screen/LoginPage';
import BottomTab from './BottomTab';
import ProductCard from '../component/ProductCard';

const MainRoute = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ProductCard}
        name="Login"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={BottomTab}
        name="BottomTab"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainRoute;
