import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';

export const getToken = () => AsyncStorage.getItem('accessToken');

export const setToken = (token: string) =>
  AsyncStorage.setItem('accessToken', token);

export const getOrderFromStorage = async () => {
  const orders = await AsyncStorage.getItem('orders');

  if (!orders) return [] as Jualind.Resources.Order[];

  try {
    return JSON.parse(orders) as Jualind.Resources.Order[];
  } catch {
    return [] as Jualind.Resources.Order[];
  }
};

export const setOrderToStorage = (
  orders: Jualind.Resources.Order | Jualind.Resources.Order[],
) => {
  const data = _.isArray(orders) ? orders : [orders];

  AsyncStorage.setItem('orders', JSON.stringify(data));
};
