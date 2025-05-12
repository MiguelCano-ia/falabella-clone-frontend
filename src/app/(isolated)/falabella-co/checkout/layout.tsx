import { getUser } from "@/actions/auth/helpers/getUser";
import { getCart } from "@/actions/basket/cart";
import { CheckoutStepper } from "@/components/checkout/CheckoutStepper";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();
  const cart = await getCart();

  if (!user) {
    redirect("/falabella-co");
  }

  if (Object.keys(cart).length === 0) {
    redirect("/falabella-co/basket");
  }

  return (
    <div className="relative min-h-screen bg-gray-100">
      <header className="py-4 mx-4 md:mx-20 flex justify-between items-center">
        <div className="flex items-center">
          <Link
            href="/falabella-co"
            className="text-lime-500 text-2xl font-bold"
          >
            <Image
              src="/icons/falabella-icon-header.svg"
              width={176}
              height={23}
              alt="falabella-co"
            />
          </Link>
        </div>
        <div className="text-sm text-gray-600 max-sm:w-40">
          ¿Necesitas ayuda para comprar? Llámanos al{" "}
          <span className="font-semibold">+57 601 587 8002</span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <CheckoutStepper />
        {children}
      </main>
    </div>
  );
}
