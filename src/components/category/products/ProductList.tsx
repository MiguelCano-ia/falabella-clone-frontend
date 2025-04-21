import { Products } from "@/interfaces/categories/product";
import { ProductCard } from "./ProductCard";
import { CartModal } from "@/components/basket/cart/CartModal";
import { getCart } from "@/actions/basket/cart";

interface Props {
  products: Products[];
}

export const ProductList = async ({ products }: Props) => {
  const cart = await getCart();

  return (
    <>
      <div className="flex w-full flex-wrap items-start">
        {products?.map((product) => (
          <ProductCard key={product.id_product} product={product} />
        ))}
      </div>

      <CartModal cart={cart} />
    </>
  );
};
