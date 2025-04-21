export const API = {
  add: "http://localhost:4000/cart/add_product",
  get: "http://localhost:4000/cart",
  del: "http://localhost:4000/cart/remove_product",
  put: "http://localhost:4000/cart/update_quantity",
};

interface Add {
  userId: string;
  productId: string;
  quantity: string;
}

interface Put {
  userId: number;
  productId: number;
  quantity: number;
}

interface Get {
  userId: string;
}

interface Delete {
  userId: string;
  productId: string;
}

export type Body = Add | Put | Get | Delete | null;
