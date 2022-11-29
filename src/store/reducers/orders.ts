import {setOrderToStorage} from '../../utils/localstorage';
import {OrderActionType, DeleteOrder, UpdateOrder} from '../action-types/order';

const reducer = (
  state: Jualind.Resources.Order[] = [],
  action: DeleteOrder | UpdateOrder,
) => {
  switch (action.type) {
    case OrderActionType.UPDATE: {
      if (Array.isArray(action.payload)) {
        action.payload.forEach(order => {
          const index = state.findIndex(
            ord => ord.product_name === order.product_name,
          );

          if (index !== -1) {
            state[index] = action.payload as Jualind.Resources.Order;
          } else {
            state.push(order);
          }
        });
      } else {
        const index = state.findIndex(
          order =>
            order.product_name ===
            (action.payload as Jualind.Resources.Order).product_name,
        );

        if (index !== -1) {
          state[index] = action.payload as Jualind.Resources.Order;
        }
      }

      setOrderToStorage(state ?? []);

      return state;
    }

    case OrderActionType.DELETE: {
      const index = state.findIndex(
        order => order.product_name === action.payload,
      );

      if (index !== -1) {
        state.splice(index, 1);
      }

      return state;
    }

    default:
      return state;
  }
};

export default reducer;
