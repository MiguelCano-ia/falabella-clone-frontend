import { Button } from "@/components";
import { ChevronRight } from "lucide-react";

export default function Page() {
  return (
    <>
      <div className="flex flex-col flex-wrap p-10 gap-8 bg-[#FFF] mb-3 rounded-[5px]">
        <div className="flex flex-col mb-4 w-full rounded-[16px] border-[1px] border-[#fafafa] shadow-md p-4">
          <h1 className="text-[18px] text-[#333] font-normal">Mis favoritos</h1>
          <span className="text-[14px] text-[#999] font-normal">
            Aún no agregas productos a tu lista
          </span>
          <div className="flex justify-end items-center">
            <div className="text-[14px] text-[#4A4A4A]">Revisar lista</div>
            <ChevronRight size={12} />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-8 w-full bg-[#FFF] rounded-[5px]">
        <Button
          variant="register"
          className="w-[250px] rounded-[280px] font-bold text-base cursor-pointer bg-icon-background text-primary-foreground text-[16px] mt-5 mb-5"
        >
          Crear lista
        </Button>
      </div>
    </>
  );
}
