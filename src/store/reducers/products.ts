import _ from 'lodash';
import {
  ProductActionType,
  DeleteProduct,
  OverwriteProduct,
  SetProduct,
  UpdateProduct,
} from '../action-types/product';

const reducer = (
  state: Jualind.Resources.Resources['product'] = {},
  action: DeleteProduct | UpdateProduct | SetProduct | OverwriteProduct,
) => {
  switch (action.type) {
    case ProductActionType.SET: {
      const data = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      return {
        ...state,
        ..._.keyBy(data, 'ID'),
      };
    }

    case ProductActionType.UPDATE: {
      return {
        ...state,
        [action.payload.ID]: {
          ...state[action.payload.ID],
          ...action.payload.data,
        },
      };
    }

    case ProductActionType.OVERWRITE: {
      const data = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      return {
        ..._.keyBy(data, 'ID'),
      };
    }

    case ProductActionType.DELETE: {
      return {
        ..._.omit(state, [action.payload]),
      };
    }

    default:
      return state;
  }
};

export default reducer;
