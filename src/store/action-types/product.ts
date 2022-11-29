export enum ProductActionType {
  SET = 'product.set',
  UPDATE = 'product.update',
  OVERWRITE = 'product.overwrite',
  DELETE = 'product.delete',
}

export type SetProduct = {
  type: ProductActionType.SET;
  payload: Jualind.Resources.Product | Jualind.Resources.Product[];
};

export type UpdateProduct = {
  type: ProductActionType.UPDATE;
  payload: {
    ID: number;
    data: Partial<Jualind.Resources.Product>;
  };
};

export type OverwriteProduct = {
  type: ProductActionType.OVERWRITE;
  payload: Jualind.Resources.Product | Jualind.Resources.Product[];
};

export type DeleteProduct = {
  type: ProductActionType.DELETE;
  payload: number;
};
