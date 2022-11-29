import {
  CurrentUserActionType,
  DeleteCurrentUser,
  UpdateCurrentUser,
} from '../action-types/currentUser';

const reducer = (
  state = {} as Jualind.Resources.User,
  action: DeleteCurrentUser | UpdateCurrentUser,
) => {
  switch (action.type) {
    case CurrentUserActionType.UPDATE: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case CurrentUserActionType.DELETE: {
      return {} as Jualind.Resources.User;
    }
    default:
      return state;
  }
};

export default reducer;
