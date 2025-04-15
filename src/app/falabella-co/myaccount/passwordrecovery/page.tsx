import { Button, Input, Label } from "@/components";
import { LockKeyhole } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-[#eee]">
      <div className="container m-auto flex items-stretch justify-center pt-5 pb-3 w-full">
        <div className="flex flex-col gap-5 w-[520px] bg-white rounded-[6px] shadow-sm px-10 py-8">
          <div className="flex items-center gap-2">
            <LockKeyhole size={24} className="text-[#888]" />
            <p className="font-normal text-[24px] text-[#000]">
              Restablecer contraseña
            </p>
          </div>
          <span className="text-[15px] text-[#888]">
            Ingresa tu correo electrónico y te enviaremos las instrucciones para
            una nueva contraseña.
          </span>
          <div className="flex flex-col items-stretch min-h-[78px] w-full mb-2">
            <Label htmlFor="email" className="text-start text-[15px] mb-2 h-4">
              Correo electrónico
            </Label>
            <div className="relative flex items-center">
              <Input
                id="email"
                placeholder="Ingresa tu correo electrónico"
                className={`border-t-0 border-x-0 border-b-[1px] border-b-[#A6A6A6] rounded-none p-0 text-sm placeholder:text-[#BBBBBB] font-normal focus:outline-none focus-visible:ring-0 w-[432px]`}
                style={{
                  WebkitBoxShadow: "0 0 0px 1000px white inset",
                }}
              />
            </div>
          </div>
          <Button
            variant="login"
            className="bg-primary-foreground text-gray-400 cursor-not-allowed w-[432px] text-[14px] h-[55px]"
          >
            Continuar
          </Button>
          <span className="text-[14px] text-[#888] underline underline-offset-1 text-center">
            Ya tengo el código verificador
          </span>
        </div>
      </div>
    </div>
  );
}
