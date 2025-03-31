import { Button } from "@/components";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col flex-wrap p-5 gap-16 bg-[#FFF] mb-3 rounded-[5px]">
      <h1 className="text-[#333] font-normal text-[24px]">Direcciones</h1>
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/icons/user-information/adress.svg"
            width={149}
            height={148}
            alt="address"
          />
          <div className="flex flex-col items-center text-[#717171] text-[24px] font-normal">
            <p>¡Anímate a agregar tu dirección!</p>
            <p>Te facilitará tu compra.</p>
          </div>
        </div>
        <Button
          variant="register"
          className="w-[267px] mb-10 rounded-[55px] text-base cursor-pointer bg-icon-background text-primary-foreground h-[46px] text-[20px] leading-[26px] font-normal"
        >
          Agregar dirección
        </Button>
      </div>
    </div>
  );
}
