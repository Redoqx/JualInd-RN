import _ from 'lodash';
import {
  UserActionType,
  DeleteUser,
  OverwriteUser,
  SetUser,
  UpdateUser,
} from '../action-types/user';

const reducer = (
  state: Jualind.Resources.Resources['user'] = {},
  action: DeleteUser | UpdateUser | SetUser | OverwriteUser,
) => {
  switch (action.type) {
    case UserActionType.SET: {
      const data = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      return {
        ...state,
        ..._.keyBy(data, 'ID'),
      };
    }

    case UserActionType.UPDATE: {
      return {
        ...state,
        [action.payload.ID]: {
          ...state[action.payload.ID],
          ...action.payload.data,
        },
      };
    }

    case UserActionType.OVERWRITE: {
      const data = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      return {
        ..._.keyBy(data, 'ID'),
      };
    }

    case UserActionType.DELETE: {
      return {
        ..._.omit(state, [action.payload]),
      };
    }

    default:
      return state;
  }
};

export default reducer;
