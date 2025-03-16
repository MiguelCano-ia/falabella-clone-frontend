import { Pagination } from "@/components/ui/Pagination";
import { ProductHeader } from "./ProductHeader";
import { ProductList } from "./ProductList";

export const ProductSection = () => {
  return (
    <section className="flex flex-col w-[78%]">
      <ProductHeader />
      <ProductList />
      <div className="w-full p-4 ml-[10px] my-[10px] rounded-[12px] bg-[#fff]">
        <div className="flex items-center justify-between w-3/5">
          <span className="text-[#333] text-[12px] font-bold">
            145 - 192 de 3075 Resultados
          </span>
          <div className="mb-3">
            <Pagination
              itemsPerPage={48}
              totalItems={1524}
              onPageChange={(page) => page}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
