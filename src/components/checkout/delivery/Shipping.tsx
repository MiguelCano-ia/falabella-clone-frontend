import { getCartProducts } from "@/app/(main)/falabella-co/basket/page";
import { AddressElement } from "@/interfaces/checkout/delivery/address";
import { CircleAlert, MapPin, Pencil, Truck } from "lucide-react";

interface Props {
  address: AddressElement[];
  cartProducts: Record<string, number>;
}

export const Shipping = async ({ address, cartProducts }: Props) => {
  const idItems = Object.keys(cartProducts);
  const products = await getCartProducts(idItems, cartProducts);

  const soldBy: string[] = [];

  products.forEach((product) => {
    soldBy.push(product.sold_by);
  });

  const soldByUnique = [...new Set(soldBy)];

  return (
    <article className="flex flex-col col-span-2 gap-10 w-full">
      <section className="flex justify-between items-center p-4 rounded-[10px] border-solid border-b-[3px] border-b-black   w-full bg-white">
        <div className="flex items-center gap-2">
          <MapPin size={26} className="text-[#333] font-bold" />
          <p className="text-[#333] font-bold text-sm">
            Dirección -{" "}
            <span className="text-[#333] font-normal text-sm">
              {address[0]?.reference}, {address[0]?.complement_1},{" "}
              {address[0].neighborhood}, {address[0].department}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Pencil size={14} />
            <span className="text-[#333] font-normal text-[12px] underline underline-offset-1">
              Cambiar
            </span>
          </div>
          <CircleAlert size={20} className="text-[#333] ml-2" />
        </div>
      </section>
      {soldByUnique.map((soldBy) => (
        <section
          className="flex flex-col items-start px-6 py-4 bg-white rounded-xl shadow w-full"
          key={soldBy}
        >
          <div className="mb-4 w-full">
            <span className="text-sm font-semibold text-[#000]">
              Vendido por {soldBy}
            </span>
          </div>

          <div className="w-full">
            <div className="border rounded-sm p-4">
              <div className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#333]" />
                Envío a domicilio
              </div>
              <div className="flex flex-col gap-4 mt-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  {/* <input
                    type="radio"
                    name="delivery"
                    className="accent-[#333] w-4 h-4"
                    multiple
                  /> */}
                  <div className="flex flex-col">
                    <span className="text-[#333] text-sm">
                      Llega el{" "}
                      <span className="font-semibold">lunes 12 de may.</span>{" "}
                      <span className="text-xs text-[#888]">de 8 a 20 h</span>
                    </span>
                  </div>
                  <span className="ml-auto text-sm font-semibold">
                    $ 14.280
                  </span>
                </label>
              </div>
            </div>
          </div>
        </section>
      ))}
    </article>
  );
};
