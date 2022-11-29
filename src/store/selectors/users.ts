import {AppState} from '..';

export const getUsers = (state: AppState) => state.users;

export const getProductById = (productId: number) => (state: AppState) =>
  getUsers(state)[productId];
