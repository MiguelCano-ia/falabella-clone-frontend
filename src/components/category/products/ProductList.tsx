import { Products } from "@/interfaces/categories/product";
import { ProductCard } from "./ProductCard";

interface Props {
  products: Products[];
}

export const ProductList = ({ products }: Props) => {
  return (
    <div className="flex w-full flex-wrap items-start">
      {products.map((product) => (
        <ProductCard key={product.id_product} product={product} />
      ))}
    </div>
  );
};
