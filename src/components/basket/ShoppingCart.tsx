import { Products } from "@/interfaces/categories/product";
import { SellerAccordion } from "./SellerAccordion";
import { OrderSummary } from "./OrderSummary";

interface Props {
  products: Products[];
  totalItems: number | string;
}
export const ShoppingCart = ({ products, totalItems }: Props) => {
  const bySeller = products.reduce((acc, prod) => {
    const key = prod.sold_by;
    if (!acc[key]) acc[key] = [];
    acc[key].push(prod);
    return acc;
  }, {} as Record<string, Products[]>);

  const sellerGroups = Object.entries(bySeller).map(([seller, products]) => ({
    seller,
    products,
  }));

  return (
    <div className="grid grid-cols-3 gap-8 bg-[#f1f1f1] ">
      <section className="col-span-2">
        <div className="flex items-center pb-5 pt-4 gap-1">
          <p className="font-bold text-[24px] text-[#333]">Carro</p>
          <p className="text-[#4A4A4A] text-[18px]">({totalItems} productos)</p>
        </div>
        <div className="flex flex-col justify-center w-full gap-5">
          {sellerGroups.map(({ seller, products }) => (
            <SellerAccordion key={seller} seller={seller} products={products} />
          ))}
        </div>
      </section>
      <section>
        <p className="font-bold text-[24px] text-[#333] pb-5 pt-4">
          Resumen de la orden
        </p>
        <OrderSummary />
      </section>
    </div>
  );
};
