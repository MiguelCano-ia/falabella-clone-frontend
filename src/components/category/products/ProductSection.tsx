import { PaginationProducts } from "./PaginationProducts";
import { ProductHeader } from "./ProductHeader";
import { ProductList } from "./ProductList";
import { Products } from "@/interfaces/categories/product";

interface Props {
  products: Products[];
}

export const ProductSection = ({ products }: Props) => {
  return (
    <section className="flex flex-col w-[78%]">
      <ProductHeader products={products} />
      <ProductList products={products} />
      <PaginationProducts products={products} />
    </section>
  );
};
