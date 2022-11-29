export enum UserActionType {
  SET = 'user.set',
  UPDATE = 'user.update',
  OVERWRITE = 'user.overwrite',
  DELETE = 'user.delete',
}

export type SetUser = {
  type: UserActionType.SET;
  payload: Jualind.Resources.User | Jualind.Resources.User[];
};

export type UpdateUser = {
  type: UserActionType.UPDATE;
  payload: {
    ID: number;
    data: Partial<Jualind.Resources.User>;
  };
};

export type OverwriteUser = {
  type: UserActionType.OVERWRITE;
  payload: Jualind.Resources.User | Jualind.Resources.User[];
};

export type DeleteUser = {
  type: UserActionType.DELETE;
  payload: number;
};
