export interface Products {
  id_product: number;
  brand: string;
  title: string;
  price: string;
  discount_percentage: string;
  discount_price: string;
  special_discount_percentage: null | string;
  special_price: null | string;
  images: string[];
  specifications: Record<string, string | number>;
  category_slug: string;
  section_slug: string;
  subcategory_slug: string;
  sold_by: string;
  rating: string;
  description: string;
  stock: number;
  created_at: Date;
  updated_at: Date;
  cartQuantity?: string;
}
