import { Button, Input, Label } from "@/components";
import { CircleAlert, Pen } from "lucide-react";

export default function Page() {
  return (
    <>
      <div className="flex flex-col flex-wrap p-5 gap-8 bg-[#FFF] mb-3">
        <h1 className="text-[#333] font-normal text-[24px]">
          Datos personales
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-stretch min-h-[78px] w-[250px] mb-2">
            <Label
              htmlFor="name"
              className="text-start text-[12px] text-[#333] mb-1 h-4"
            >
              Nombre
            </Label>
            <div className="relative flex items-center">
              <Input
                id="name"
                className={`border-t-0 border-x-0 border-b-[1px] border-b-[#A6A6A6] rounded-none p-0 text-sm placeholder:text-[#BBBBBB] font-normal focus:outline-none focus-visible:ring-0 `}
                style={{
                  WebkitBoxShadow: "0 0 0px 1000px white inset",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch min-h-[78px] w-[250px] mb-2">
            <Label
              htmlFor="firstLastname"
              className="text-start text-[12px] text-[#333] mb-1 h-4"
            >
              Primer apellido
            </Label>
            <div className="relative flex items-center">
              <Input
                id="firstLastname"
                className={`border-t-0 border-x-0 border-b-[1px] border-b-[#A6A6A6] rounded-none p-0 text-sm placeholder:text-[#BBBBBB] font-normal focus:outline-none focus-visible:ring-0 `}
                style={{
                  WebkitBoxShadow: "0 0 0px 1000px white inset",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch min-h-[78px] w-[250px] mb-2">
            <Label
              htmlFor="secondLastname"
              className="text-start text-[12px] text-[#333] mb-1 h-4"
            >
              Segundo apellido
            </Label>
            <div className="relative flex items-center">
              <Input
                id="secondLastname"
                className={`border-t-0 border-x-0 border-b-[1px] border-b-[#A6A6A6] rounded-none p-0 text-sm placeholder:text-[#BBBBBB] font-normal focus:outline-none focus-visible:ring-0 `}
                style={{
                  WebkitBoxShadow: "0 0 0px 1000px white inset",
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-stretch min-h-[78px] w-[250px] mb-2">
            <Label className="text-start text-[12px] text-[#333] mb-1 h-4">
              Tipo de documento
            </Label>
            <div className="relative flex items-center mt-2">
              <span className="text-[14px] text-[#888]">
                Cédula de Ciudadanía 1088824405
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch min-h-[78px] w-[250px] mb-2">
            <Label className="text-start text-[12px] text-[#333] mb-1 h-4">
              Celular
            </Label>
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-[#888]">+57 3137111718</span>
              <Pen size={18} className="text-[#888]" />
            </div>
          </div>
          <div className="flex flex-col items-stretch min-h-[78px] w-[250px] mb-2">
            <Label className="text-start text-[12px] text-[#333] mb-1 h-4">
              Correo electrónico
            </Label>
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-[#888]">
                macanogiraldo2004@gmail.com
              </span>
              <CircleAlert size={18} className="text-[#888]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-5 bg-[#FFF]">
        <Button
          variant="register"
          className="rounded-[280px] font-semibold text-base cursor-pointer bg-icon-background text-primary-foreground w-[160px]"
        >
          Guardar
        </Button>
      </div>
    </>
  );
}
