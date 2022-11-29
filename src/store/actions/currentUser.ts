import {AppDispatch} from '..';
import axios from '../axios';
import {
  CurrentUserActionType,
  DeleteCurrentUser,
  UpdateCurrentUser,
} from '../action-types/currentUser';
import {setToken} from '../../utils/localstorage';

export const updateCurrentUserStore = (
  payload: Partial<Jualind.Resources.User>,
): UpdateCurrentUser => ({
  type: CurrentUserActionType.UPDATE,
  payload,
});

export const deleteCurrentUserStore = (): DeleteCurrentUser => ({
  type: CurrentUserActionType.DELETE,
});

export const getCurrentUser = () => async (dispatch: AppDispatch) => {
  const {data} = await axios.get<{
    msg: string;
    body: {
      token: string;
      user: Jualind.Resources.User;
    };
  }>(`/user/token`);

  await setToken(data.body.token);

  dispatch(updateCurrentUserStore(data.body.user));

  return data.body.user;
};

export const loginUser =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    const payload = new FormData();
    payload.append('email', email);
    payload.append('password', password);

    const {data} = await axios.post<{
      msg: string;
      body: {
        token: string;
      };
    }>('/login', payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    await setToken(data.body.token);

    const user = await getCurrentUser()(dispatch);

    return user;
  };
