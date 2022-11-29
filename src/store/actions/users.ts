import axios from '../axios';
import {
  DeleteUser,
  OverwriteUser,
  SetUser,
  UpdateUser,
  UserActionType,
} from '../action-types/user';
import {RESOURCE_NAME} from '../../utils/constant';

export const setUsersStore = (
  payload: Jualind.Resources.User | Jualind.Resources.User[],
): SetUser => ({
  type: UserActionType.SET,
  payload,
});

export const updateUsersStore = (
  userId: number,
  data: Jualind.Resources.User,
): UpdateUser => ({
  type: UserActionType.UPDATE,
  payload: {
    ID: userId,
    data,
  },
});

export const overwriteUsersStore = (
  payload: Jualind.Resources.User | Jualind.Resources.User[],
): OverwriteUser => ({
  type: UserActionType.OVERWRITE,
  payload,
});

export const deletUsersStore = (payload: number): DeleteUser => ({
  type: UserActionType.DELETE,
  payload,
});

export const getUserById =
  (id: number, query = '', overwrite = false) =>
  async () => {
    const {data} = await axios.get<Jualind.Resources.ResourceResponse<'user'>>(
      `/user?id=${id}&${query}`,
      {
        headers: {
          resourceName: RESOURCE_NAME.USER,
          overwrite,
        },
      },
    );

    return data;
  };
