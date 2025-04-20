export const API = {
  add: "/cart/add_product",
  get: "/cart",
  del: "/cart/remove_product",
  put: "/cart/update_product",
};

interface AddAndPut {
  userId: string;
  productId: string;
  quantity: string;
}

interface Get {
  userId: string;
}

interface Delete {
  userId: string;
  productId: string;
}

export type Body = AddAndPut | Get | Delete | null;
