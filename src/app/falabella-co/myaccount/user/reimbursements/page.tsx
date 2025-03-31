"use client";

import { Button, Input, Label, useOutsideClick } from "@/components";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [documentType, setDocumentType] = useState("");
  const [isIdentityFieldOpen, setIdentity] = useState(false);

  const handleIdentityField = () => {
    setIdentity(!isIdentityFieldOpen);
  };

  const closeIdentityField = () => {
    setIdentity(false);
  };

  const identityRef = useOutsideClick(() => {
    closeIdentityField();
  });

  return (
    <>
      <div className="flex flex-col flex-wrap p-5 gap-4 bg-[#FFF] mb-3 rounded-[5px]">
        <h1 className="text-[#333] font-normal text-[24px]">
          Datos para reembolso
        </h1>
        <div className="text-[15px] text-[#000]">
          Ingresa una cuenta bancaria asociada a la{" "}
          <b>cédula de cuidadanía o extranjería registrada en falabella.com</b>{" "}
          para futuros reembolsos.
        </div>
        <form action="" className="flex items-center justify-around gap-20">
          <div className="relative flex flex-col items-stretch min-h-[78px] w-full mb-2">
            <Label
              htmlFor="id_number"
              className="text-start text-[12px] mb-1 h-4"
            >
              Banco
            </Label>
            <div
              className={`flex items-center border-b-[1px] border-b-[#A6A6A6]`}
            >
              <Input
                type="text"
                id="id_number"
                className="border-0 rounded-none p-0 text-sm placeholder:text-[#BBBBBB] font-normal focus:outline-none focus-visible:ring-0"
                style={{
                  WebkitBoxShadow: "0 0 0px 1000px white inset",
                }}
              />
              <div
                className="flex items-center justify-end cursor-pointer"
                onClick={handleIdentityField}
              >
                <ChevronDown size={16} className="mr-1" />
              </div>

              <input type="hidden" name="documentType" value={documentType} />
            </div>
            {isIdentityFieldOpen && (
              <div
                className="absolute top-0 left-0 right-auto bottom-auto translate-y-[68px] z-10"
                ref={identityRef}
              >
                <div className="flex flex-col gap-3 font-medium border-[1px] bg-primary-foreground py-2 text-[14px] min-w-[254px] sm:min-w-[343px] rounded-sm cursor-pointer">
                  <div
                    onClick={() => {
                      setDocumentType("CC");
                      closeIdentityField();
                    }}
                    className="hover:bg-[#f1f1f1] transition-colors mx-2"
                  >
                    <span className="px-2">CC (Cédula de ciudadanía)</span>
                  </div>
                  <div
                    onClick={() => {
                      setDocumentType("CE");
                      closeIdentityField();
                    }}
                    className="hover:bg-[#f1f1f1] transition-colors mx-2"
                  >
                    <span className="px-2">CE (Cédula de Extranjería)</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="relative flex flex-col items-stretch min-h-[78px] w-full mb-2">
            <Label
              htmlFor="id_number"
              className="text-start text-[12px] mb-1 h-4"
            >
              Tipo de cuenta
            </Label>
            <div
              className={`flex items-center border-b-[1px] border-b-[#A6A6A6]`}
            >
              <Input
                type="text"
                id="id_number"
                className="border-0 rounded-none p-0 text-sm placeholder:text-[#BBBBBB] font-normal focus:outline-none focus-visible:ring-0"
                style={{
                  WebkitBoxShadow: "0 0 0px 1000px white inset",
                }}
              />
              <div
                className="flex items-center justify-end cursor-pointer"
                onClick={handleIdentityField}
              >
                <ChevronDown size={16} className="mr-1" />
              </div>

              <input type="hidden" name="documentType" value={documentType} />
            </div>
            {isIdentityFieldOpen && (
              <div
                className="absolute top-0 left-0 right-auto bottom-auto translate-y-[68px] z-10"
                ref={identityRef}
              >
                <div className="flex flex-col gap-3 font-medium border-[1px] bg-primary-foreground py-2 text-[14px] min-w-[254px] sm:min-w-[343px] rounded-sm cursor-pointer">
                  <div
                    onClick={() => {
                      setDocumentType("CC");
                      closeIdentityField();
                    }}
                    className="hover:bg-[#f1f1f1] transition-colors mx-2"
                  >
                    <span className="px-2">CC (Cédula de ciudadanía)</span>
                  </div>
                  <div
                    onClick={() => {
                      setDocumentType("CE");
                      closeIdentityField();
                    }}
                    className="hover:bg-[#f1f1f1] transition-colors mx-2"
                  >
                    <span className="px-2">CE (Cédula de Extranjería)</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
        <div className="flex items-center justify-around gap-20 mb-10">
          <div className="flex flex-col items-stretch min-h-[78px] w-full mb-2">
            <Label
              htmlFor="name"
              className="text-start text-[12px] text-[#333] mb-1 h-4"
            >
              Número de cuenta bancaria
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
          <div className="flex flex-col items-stretch min-h-[78px] w-full mb-2">
            <Label
              htmlFor="name"
              className="text-start text-[12px] text-[#333] mb-1 h-4"
            >
              Confirma tu número de cuenta bancaria
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
