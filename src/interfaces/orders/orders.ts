import { Products } from "../categories/product";

export interface Orders {
  orders: Order[];
}

export interface Order {
  id: number;
  purchase_date: Date;
  total_price: string;
  payment_status: string;
  payment_id: string;
  products: ProductElement[];
}

export interface ProductElement {
  id: number;
  quantity: number;
  unit_price: string;
  product: Products;
}
