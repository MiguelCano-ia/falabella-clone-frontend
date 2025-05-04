import { Products } from "@/interfaces/categories/product";
import {
  ProductFeedback,
  SimilarOptions,
  Specifications,
} from "@/components/product";
import { getCart } from "@/actions/basket/cart";
import { ProductDetailPage } from "@/components/product/product-details/ProductDetailPage";

export const getProduct = async (id: number): Promise<Products> => {
  const response = await fetch(`${process.env.API_URL}/product/${id}`).then(
    (res) => res.json()
  );
  return response;
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const cart = await getCart();
  const product = await getProduct(id);

  console.log(product);

  return (
    <div className="w-full min-h-screen bg-gray-100 py-2">
      <ProductDetailPage product={product} cart={cart} />
      <Specifications specifications={product.specifications} />
      {/* <CarousselOtherProducts /> */}
      <SimilarOptions />
      {/* <YouMightAlsoLike /> */}
      <ProductFeedback />
    </div>
  );
}
