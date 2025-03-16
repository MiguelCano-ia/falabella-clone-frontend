import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const ProductCard = () => {
  return (
    <div className="w-[239px] pl-[10px] mb-[10px] h-[556px]">
      <Link
        href="#"
        className="flex flex-col border-[1px] border-[#F0F0F0] w-full h-full bg-[#FFF] rounded-[12px]"
      >
        <Image
          src="/images/category/computers/dell-computer.avif"
          alt="dell"
          width={227}
          height={227}
        />
        <div className="flex flex-col pt-[22px] px-[15px] pb-[7px] border-[1px] border-[#F0F0F0]">
          <span className="leading-[16px] text-[13px] tracking-normal text-[#767676]">
            DELL
          </span>
          <span className="font-bold text-[16px] w-[198px] mt-[7px] text-[#4A4A4A] line-clamp-3">
            PORTATIL INSPIRON INTEL CORE I7-1165G7 SSD 2TB RAM 24GB 15,6 FHD
          </span>
          <span className="text-[13px] leading-[16px] text-[#333] mt-[8px]">
            Por Compumarket Bga{" "}
          </span>
        </div>
        <div className="flex flex-col px-[15px] h-full">
          <div className="flex flex-col mb-[12px]">
            <div className="flex items-center gap-2 font-normal leading-[22px]">
              <span className=" text-[#e4022d] text-[18px] ">$ 3.679.900 </span>
              <span className="bg-[#e4022d] text-white px-[5px] rounded-[3px] font-bold text-[12px] ">
                -34%
              </span>
            </div>
            <span className="text-[#717171] text-[18px]">$ 3.799.900 </span>
            <span className="text-[#717171] text-[14px] line-through">
              $ 5.549.900{" "}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-end h-full">
          <div className="flex items-end justify-center min-h-[34px]">
            <div className="py-[12px]">
              <Button
                variant="register"
                className="bg-[#343E49] text-white h-[40px] rounded-[30px] font-bold text-[20px] w-[190px]"
              >
                Agregar al Carro
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
