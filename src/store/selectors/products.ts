import {AppState} from '..';

export const getProducts = (state: AppState) => state.products;

export const getProductById = (productId: number) => (state: AppState) =>
  getProducts(state)[productId];
