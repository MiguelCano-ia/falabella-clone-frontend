import { getCartProducts } from "@/app/(main)/falabella-co/basket/page";
import { OrderSummary } from "@/components/basket/cart/OrderSummary";
import { getCart } from "@/actions/basket/cart";
import { PaymentOptions } from "@/components/checkout/payment/PaymentOptions";
import { getAddress } from "@/actions/checkout/delivery/getAddress";
import { redirect } from "next/navigation";
export default async function Page() {
  const cart = await getCart();
  const address = await getAddress();
  const idItems = Object.keys(cart);
  const products = await getCartProducts(idItems, cart);

  if (address?.addresses?.length === 0) {
    redirect("/falabella-co");
  }

  return (
    <main className="container grid grid-cols-3 mx-auto max-w-7xl w-full gap-10 mt-10">
      <section className="flex flex-col col-span-2 items-start w-full">
        <PaymentOptions />
      </section>
      <section>
        <h1 className="text-2xl text-[#4A4A4A] font-bold mb-5 text-start">
          Resumen de la compra
        </h1>
        <OrderSummary products={products} />
      </section>
    </main>
  );
}
