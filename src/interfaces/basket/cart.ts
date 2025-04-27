export const API = {
  add: `${process.env.API_URL}/cart/add_product`,
  get: `${process.env.API_URL}/cart`,
  del: `${process.env.API_URL}/cart/remove_product`,
  put: `${process.env.API_URL}/cart/update_quantity`,
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
