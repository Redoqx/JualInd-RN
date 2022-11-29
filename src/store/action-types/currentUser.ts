export enum CurrentUserActionType {
  UPDATE = 'current-user.update',
  DELETE = 'current-user.delete',
}

export type UpdateCurrentUser = {
  type: CurrentUserActionType.UPDATE;
  payload: Partial<Jualind.Resources.User>;
};

export type DeleteCurrentUser = {
  type: CurrentUserActionType.DELETE;
};
