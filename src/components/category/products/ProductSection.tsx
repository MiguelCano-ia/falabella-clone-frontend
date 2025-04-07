"use client";

import { Pagination } from "@/components/ui/Pagination";
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
      <div className="w-full p-4 ml-[10px] my-[10px] rounded-[12px] bg-[#fff]">
        <div className="flex items-center justify-between w-3/5">
          <span className="text-[#333] text-[12px] font-bold">
            {products?.length || 0} Resultados
          </span>
          <div className="mb-3">
            <Pagination
              itemsPerPage={48}
              totalItems={products?.length || 1}
              onPageChange={(page) => page}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
