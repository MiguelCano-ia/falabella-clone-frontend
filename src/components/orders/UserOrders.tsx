import Link from "next/link";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

export const UserOrders = () => {
  return (
    <div className="flex w-full">
      <div className="min-w-full h-full bg-[#f5f5f5] text-[#374151]">
        <div className="flex flex-col bg-[#fff]">
          <div className="flex items-center pt-[21px] ml-[57px] mb-[28px] font-light text-[26px] leading-[34px] text-[#333]">
            Mis compras
          </div>
          <div className="flex items-start ml-[57px] mb-[10px] bg-[#fff]">
            <Link href="#" className="text-inherit">
              <div className="font-bold bg-[#fff] text-[18px] leading-[22px] text-[#333] mr-[62px]">
                Compras online
              </div>
              <hr className="rounded-[2px] w-[123px] h-1 mt-1 bg-[#343E49] border-[1px] border-[#d5d3d5]" />
            </Link>
            <Link href="#" className="text-inherit">
              <div className="relative mr-[62px] font-normal text-[18px] leading-[22px] bg-[#fff] text-[#636363]">
                Compras en Linio
                <div className="relative">
                  <span className="absolute w-[271px] h-[84px] text-left pl-[15px] py-[15px] bg-[#fff] shadow-md font-normal text-[16px] leading-[19px] text-[#333] z-1 mt-[24px] ml-[-145px]">
                    <div className="">
                      Si tienes compras en linio.co, Te redirigiremos a su
                      página para que las puedas gestionar.
                    </div>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex bg-[#fff] w-full pt-5 pb-[25px] mt-[8px] justify-between items-center">
          <div className="flex h-[42px] bg-[#fff] text-[#333] items-center ml-[58px] flex-shrink">
            <div className="flex px-[10px] items-center min-w-[388px]">
              <Input placeholder="Buscar por N de pedido" />
              <Search size={20} />
            </div>
          </div>
          <div className="flex flex-col min-w-[300px]">
            <div className="text-[#333] text-[14px] font-medium min-w-[125px] leading-normal">
              Filtrar por fecha :
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
