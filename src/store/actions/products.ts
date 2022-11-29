import axios from '../axios';
import {
  DeleteProduct,
  OverwriteProduct,
  SetProduct,
  UpdateProduct,
  ProductActionType,
} from '../action-types/product';
import {RESOURCE_NAME} from '../../utils/constant';
import {AppDispatch} from '..';

export const setProductsStore = (
  payload: Jualind.Resources.Product | Jualind.Resources.Product[],
): SetProduct => ({
  type: ProductActionType.SET,
  payload,
});

export const updateProductsStore = (
  productId: number,
  data: Jualind.Resources.Product,
): UpdateProduct => ({
  type: ProductActionType.UPDATE,
  payload: {
    ID: productId,
    data,
  },
});

export const overwriteProductsStore = (
  payload: Jualind.Resources.Product | Jualind.Resources.Product[],
): OverwriteProduct => ({
  type: ProductActionType.OVERWRITE,
  payload,
});

export const deletProductsStore = (payload: number): DeleteProduct => ({
  type: ProductActionType.DELETE,
  payload,
});

export const getProductById =
  (id: number, query = '', overwrite = false) =>
  async () => {
    const {data} = await axios.get<
      Jualind.Resources.ResourceResponse<'product'>
    >(`/product?id=${id}&${query}`, {
      headers: {
        resourceName: RESOURCE_NAME.PRODUCT,
        overwrite,
      },
    });

    return data;
  };

export const getAllProduct =
  (query = '', overwrite = false) =>
  async () => {
    const {data} = await axios.get<
      Jualind.Resources.ResourcesResponse<'product'>
    >(`/products?${query}`, {
      headers: {
        resourceName: RESOURCE_NAME.PRODUCT,
        overwrite,
      },
    });

    return data;
  };
