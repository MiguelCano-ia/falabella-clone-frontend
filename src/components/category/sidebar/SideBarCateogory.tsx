"use client";

import { Products } from "@/interfaces/categories/product";
import { formatSlugToTitle } from "@/lib/slugToTitle";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  slugs: string[];
  products: Products[];
}

export const SideBarCateogory = ({ products, slugs }: Props) => {
  return (
    <section className="flex flex-col min-w-[312px] bg-[#fff] rounded-[12px] px-6 ">
      <div className="flex flex-col w-full h-auto py-[10px] font-light">
        <Link
          href={`/falabella-co/products/${slugs[0]}`}
          className="text-left text-[#888] text-[24px]"
        >
          {formatSlugToTitle(slugs[0])}
        </Link>

        <span className="font-bold text-[#333] text-[18px]">
          <h1>
            {slugs.length >= 2 && formatSlugToTitle(slugs[1])}{" "}
            {slugs.length === 3 && " - " + slugs[2].split("_")}
          </h1>
        </span>
      </div>
      <span className="font-normal text-[#888] text-[12px]">
        Resultados ({products?.length || 0})
      </span>
      <div className="flex flex-col pt-[15px] pb-[44px] gap-[10px]">
        <div className="flex justify-between">
          <span className="font-bold text-[16px] text-[#333]">
            Filtro seleccionado
          </span>
          <X size={24} className="cursor-pointer text-[#333]" />
        </div>
        {/* <div className="flex items-center">
          <div className="flex items-center gap-2 border-2 border-[#343E49] px-1 rounded-[3px] cursor-pointer">
            <span className="text-[13.3px] text-[#3D3D3D]">Abrigos</span>
            <X size={16} />
          </div>
        </div> */}
      </div>
      <div className="text-[#F0F0F0] border-[1px]"></div>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col w-full min-h-[48px] mt-4 bg-[#F8F8F8] border-[1px] border-[#EDEDED] rounded-[8px] py-3 px-3 gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/icons/sidebar/envios-gratis.svg"
                width={24}
                height={16}
                alt="envio-gratis"
              />
              <span className="text-[16px] text-[#333] font-bold">
                Envío gratis
              </span>
            </div>
          </div>
          <div className="w-[195px] text-[12px] leading-[14px] text-[#4a4a4a]">
            <p>
              En productos seleccionados por compras desde{" "}
              <strong>$149.990</strong>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="pb-[23px] mt-2">
        <div className="flex flex-col w-full min-h-[48px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Image
                src="/icons/sidebar/envios.svg"
                width={35}
                height={35}
                alt="domicilio"
              />
              <span className="text-[16px] text-[#333] font-bold">
                Envío a domicilio
              </span>
            </div>
          </div>
          <div className="w-[120px] border-[1px] border-[#E0E0E0] m-[3px] px-[14px] py-[5px] h-[32px] rounded-[4px] text-[14px] font-normal text-[#333] cursor-pointer">
            Llega mañana
          </div>
        </div>
        <div className="text-[#F0F0F0] border-[1px] mt-3"></div>
        <div className="flex flex-col w-full min-h-[48px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Image
                src="/icons/sidebar/retiro.svg"
                width={40}
                height={41}
                alt="retiro"
              />
              <span className="text-[16px] text-[#333] font-bold">
                Retiro en un punto
              </span>
            </div>
          </div>
          <div className="w-[120px] border-[1px] border-[#E0E0E0] m-[3px] px-[14px] py-[5px] h-[32px] rounded-[4px] text-[14px] font-normal text-[#333] cursor-pointer">
            Retiro mañana
          </div>
        </div>
      </div>
    </section>
  );
};
