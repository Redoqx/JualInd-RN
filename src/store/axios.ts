import {API_URL} from '@env';
import axios from 'axios';
import _ from 'lodash';
import {AppDispatch} from '.';
import {RESOURCE_NAME} from '../utils/constant';
import {getToken} from '../utils/localstorage';
import {
  overwriteUsersStore,
  setUsersStore,
  updateUsersStore,
} from './actions/users';
import {
  overwriteProductsStore,
  setProductsStore,
  updateProductsStore,
} from './actions/products';
import {updateOrdersStore} from './actions/orders';

const instance = axios.create({
  baseURL: API_URL,
});

export const applyInterceptors = (dispatch: AppDispatch) => {
  instance.interceptors.request.use(
    async config => {
      const token = await getToken();

      if (config.headers) {
        config.headers.Authorization = token ? `Bearer ${token}` : '';

        if (_.isString(config.headers.resourceName)) {
          config.resourceName = <Jualind.Resources.ResourceName>(
            config.headers.resourceName
          );
        }

        if (_.isBoolean(config.headers.overwrite)) {
          config.overwrite = config.headers.overwrite;
        }
      }

      return config;
    },
    err => Promise.reject(err),
  );

  instance.interceptors.response.use(
    response => {
      const {data, config} = response;

      if (!config.resourceName) return response;

      if (config.overwrite) {
        switch (config.resourceName) {
          case RESOURCE_NAME.USER:
            dispatch(overwriteUsersStore(data));
            break;

          case RESOURCE_NAME.PRODUCT:
            dispatch(overwriteProductsStore(data));
            break;

          case RESOURCE_NAME.ORDER:
            dispatch(updateOrdersStore(data));
            break;
        }
      } else if (config.method === 'put') {
        switch (config.resourceName) {
          case RESOURCE_NAME.USER:
            dispatch(updateUsersStore(data.ID, data));
            break;

          case RESOURCE_NAME.PRODUCT:
            dispatch(updateProductsStore(data.ID, data));
            break;

          case RESOURCE_NAME.ORDER:
            dispatch(updateOrdersStore(data));
            break;
        }
      } else {
        switch (config.resourceName) {
          case RESOURCE_NAME.USER:
            dispatch(setUsersStore(data));
            break;

          case RESOURCE_NAME.PRODUCT:
            dispatch(setProductsStore(data));
            break;

          case RESOURCE_NAME.ORDER:
            dispatch(updateOrdersStore(data));
            break;
        }
      }

      return response;
    },
    err => Promise.reject(err),
  );
};

export default instance;
