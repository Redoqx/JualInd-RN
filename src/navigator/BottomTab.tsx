import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import ProductPage from '../screen/ProductPage';
import OrderPage from '../screen/OrderPage';
import ProfilePage from '../screen/ProfilePage';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  const colorGenerator = (isFocused: boolean): string =>
    isFocused ? '#8982F4' : '#C4C4C4';

  return (
    <Tab.Navigator
      initialRouteName="Product"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        component={ProductPage}
        name="Product"
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name="cart-shopping"
              size={20}
              color={colorGenerator(focused)}
              solid
            />
          ),
          tabBarLabelStyle: {fontSize: 13},
        }}
      />
      <Tab.Screen
        component={OrderPage}
        name="Order"
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name="bag-shopping"
              size={20}
              color={colorGenerator(focused)}
              solid
            />
          ),
          tabBarLabelStyle: {fontSize: 13},
        }}
      />
      <Tab.Screen
        component={ProfilePage}
        name="Profile"
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name="user"
              size={20}
              color={colorGenerator(focused)}
            />
          ),
          tabBarLabelStyle: {fontSize: 13},
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
