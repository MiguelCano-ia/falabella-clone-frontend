import { getUser } from "@/actions/auth/helpers/getUser";
import { getCart } from "@/actions/basket/cart";
import { getCartProducts } from "@/app/(main)/falabella-co/basket/page";
import { DeliveryType } from "@/components/checkout/delivery/DeliveryType";
import { NotAuthenticated } from "@/components/checkout/delivery/NotAuthenticated";
import { getDepartmentsAndCities } from "@/components/shared/header/Header";

export default async function Page() {
  const user = await getUser();
  const cart = await getCart();
  const departmentsAndCities = await getDepartmentsAndCities();

  const idItems = Object.keys(cart);

  const products = await getCartProducts(idItems, cart);

  return (
    <>
      {!user ? (
        <div className="container mx-auto mt-8 bg-white rounded-md shadow py-8 px-6 max-w-7xl w-[890px]">
          <NotAuthenticated />
        </div>
      ) : (
        <DeliveryType
          products={products}
          departmentsAndCities={departmentsAndCities}
        />
      )}
    </>
  );
}
