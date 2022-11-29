export enum OrderActionType {
  UPDATE = 'order.update',
  DELETE = 'order.delete',
}

export type UpdateOrder = {
  type: OrderActionType.UPDATE;
  payload: Jualind.Resources.Order | Jualind.Resources.Order[];
};

export type DeleteOrder = {
  type: OrderActionType.DELETE;
  payload: Jualind.Resources.Order['product_name'];
};
