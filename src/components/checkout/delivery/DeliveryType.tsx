import { OrderSummary } from "@/components/basket/cart/OrderSummary";
import { Products } from "@/interfaces/categories/product";
import { CalendarDays, Clock, MapPinHouse, Truck } from "lucide-react";
import { DepartmentAndCities } from "@/interfaces/location/location";
import { RenderDeliveryOption } from "./RenderDeliveryOption";
import { getAddress } from "@/actions/checkout/delivery/getAddress";
import { Shipping } from "./Shipping";
import { getCart } from "@/actions/basket/cart";
import { OpenDeliveryModal } from "./OpenDeliveryModal";
const DELIVERY_OPTIONS = [
  {
    id: 1,
    icon: <MapPinHouse className="text-[#bbb]" />,
    title: "Retira tu pedido",
    description: "Ingresa tu dirección para conocer disponibilidad",
    disabled: true,
  },
  {
    id: 2,
    icon: <Clock className="text-[#333]" />,
    title: "Envio Express",
    description: "Ingresa tu dirección para conocer disponibilidad",
    disabled: false,
  },
  {
    id: 3,
    icon: <Truck className="text-[#bbb]" />,
    title: "Envio en fecha programada",
    description: "Ingresa tu dirección para conocer disponibilidad",
    disabled: true,
  },
  {
    id: 4,
    icon: <CalendarDays className="text-[#bbb]" />,
    title: "Envio en rango de fechas",
    description: "Ingresa tu dirección para conocer disponibilidad",
    disabled: true,
  },
];

interface Props {
  products: Products[];
  departmentsAndCities: DepartmentAndCities[] | undefined;
}

export const DeliveryType = async ({
  products,
  departmentsAndCities,
}: Props) => {
  const [address, cartProducts] = await Promise.all([getAddress(), getCart()]);
  return (
    <main className="container grid grid-cols-3 mx-auto max-w-7xl w-full gap-10 mt-10">
      {address!.addresses.length === 0 ? (
        <section className="flex flex-col col-span-2 items-start px-12 py-8 bg-white rounded-xl shadow gap-2 w-full">
          <h1 className="text-2xl text-[#333] font-normal mb-2">
            Elige un tipo de entrega
          </h1>
          <div className="flex flex-col gap-5 w-full">
            {DELIVERY_OPTIONS.map((option) => (
              <RenderDeliveryOption key={option.id} option={option} />
            ))}
          </div>
        </section>
      ) : (
        <Shipping address={address!.addresses} cartProducts={cartProducts} />
      )}

      <OpenDeliveryModal departmentsAndCities={departmentsAndCities} />

      <section>
        <h1 className="text-2xl text-[#4A4A4A] font-bold mb-5 text-start">
          Resumen de la compra
        </h1>
        <OrderSummary products={products} address={address} />
      </section>
    </main>
  );
};
