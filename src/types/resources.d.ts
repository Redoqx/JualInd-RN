import {RESOURCE_NAME, USER_ROLE} from '../utils/constant';

export type UserRole = typeof USER_ROLE[keyof typeof USER_ROLE];

export type ResourceName = typeof RESOURCE_NAME[keyof typeof RESOURCE_NAME];

export type User = {
  ID: number;
  Name: string;
  Password: string;
  Email: string;
  ImageLoc: {
    String: string;
    Valid: boolean;
  };
};

export type Order = {
  buyer_name: string;
  product_name: string;
  product_price: number;
  amount: number;
  date: string;
  id_product: number;
  confirmation_link: {
    String: string;
    Valid: boolean;
  };
};

export type Product = {
  ID: number;
  OwnerID: number;
  Name: string;
  Price: number;
  Description: string;
  CurrentQuantity: number;
  Quantity: number;
  ImageLoc: {
    String: string;
    Valid: boolean;
  };
};

export type ResourceMap = {
  [RESOURCE_NAME.ORDER]: Order;
  [RESOURCE_NAME.PRODUCT]: Product;
  [RESOURCE_NAME.USER]: User;
};

export type Resources = {
  [RESOURCE_NAME.ORDER]: Order[];
  [RESOURCE_NAME.PRODUCT]: Record<number, Product>;
  [RESOURCE_NAME.USER]: Record<number, User>;
};

export type ResourceResponse<T extends ResourceName> = {
  msg: string;
  body: ResourceMap[T];
};

export type ResourcesResponse<T extends ResourceName> = {
  msg: string;
  body: ResourceMap[T][];
};
