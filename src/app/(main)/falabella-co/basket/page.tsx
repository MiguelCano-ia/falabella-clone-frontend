"use server";

import { getUser } from "@/actions/auth/helpers/getUser";
import { ShoppingCart } from "@/components/basket/ShoppingCart";
import { Products } from "@/interfaces/categories/product";
import { getTotalItems } from "@/components/shared/header/header-navbar/right-section/Cart";
import { NotAuthenticated } from "@/components/basket/auth/NotAuthenticated";
import { getCart } from "@/actions/basket/cart";
import { EmptyCart } from "@/components/basket/cart/EmptyCart";
import { getProduct } from "../product/[id]/page";

export default async function Page() {
  const user = await getUser();
  const cart = await getCart();

  const idItems = Object.keys(cart);
  const totalItems = getTotalItems(cart);

  const products: Products[] = await Promise.all(
    idItems.map(async (id) => {
      const product = await getProduct(+id);
      return {
        ...product,
        cartQuantity: cart[id],
      };
    })
  );

  return (
    <>
      {!user && <NotAuthenticated />}
      <main className="bg-[#f1f1f1] w-full h-full">
        <section className="container mx-auto my-5 bg-[#fff] max-w-[1280px] mb-48">
          {idItems.length === 0 && <EmptyCart user={user} />}
          {idItems.length > 0 && (
            <ShoppingCart products={products} totalItems={totalItems} />
          )}
        </section>
      </main>
    </>
  );
}
