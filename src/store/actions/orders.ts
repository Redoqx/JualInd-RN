import moment from 'moment';
import axios from '../axios';
import {getProductById} from './products';
import {DeleteOrder, UpdateOrder, OrderActionType} from '../action-types/order';
import {RESOURCE_NAME} from '../../utils/constant';
import {AppDispatch} from '..';

export const updateOrdersStore = (
  payload: Jualind.Resources.Order | Jualind.Resources.Order[],
): UpdateOrder => ({
  type: OrderActionType.UPDATE,
  payload,
});

export const deletOrdersStore = (payload: string): DeleteOrder => ({
  type: OrderActionType.DELETE,
  payload,
});

export const createOrder =
  (payload: Pick<Jualind.Resources.Order, 'amount' | 'id_product'>) =>
  async (dispatch: AppDispatch) => {
    const newPayload = new FormData();
    newPayload.append('amount', payload.amount);
    newPayload.append('id_product', payload.id_product);

    await axios.post<{msg: string; body: number}>('/order/create', newPayload, {
      headers: {
        'Content-Type': 'multipart/form-data',
        resourceName: RESOURCE_NAME.PRODUCT,
      },
    });

    const product = await getProductById(payload.id_product)();

    const order = {
      ...payload,
      date: moment().format('YYYY-MM-DD'),
      buyer_name: '',
      product_name: product.body.Name,
      confirmation_link: {
        String: '',
        Valid: false,
      },
      product_price: product.body.Price,
    };

    dispatch(updateOrdersStore(order));

    return order;
  };
