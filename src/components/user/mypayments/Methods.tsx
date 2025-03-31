import { Button } from "@/components/ui/button";
import Image from "next/image";

const OTHER_METHODS = [
  {
    text: "Tarjeta CMR Falabella",
    mainText: "No tienes tarjetas CMR disponibles",
    textButton: "+ Agregar tarjeta CMR",
  },
  {
    text: "Otras tarjetas de crédito",
    mainText: "No tienes tarjetas de crédito disponibles",
    textButton: "+ Agregar Otras tarjetas de crédito",
  },
  {
    text: "Tarjeta Débito Banco Falabella",
    mainText: "No tienes tarjetas de débito disponibles",
    textButton: "+ Agregar tarjeta Débito Banco Falabella",
  },
  {
    text: "Otras tarjeta de débito",
    mainText: "No tienes tarjetas de débito disponibles",
    textButton: "+ Agregar Otras tarjeta de débito",
  },
];

export const Methods = () => {
  return (
    <>
      {OTHER_METHODS.map(({ text, mainText, textButton }) => (
        <div
          key={text}
          className="flex flex-col flex-wrap p-5 gap-2 bg-[#FFF] mb-3 rounded-[5px]"
        >
          {text === "Tarjeta CMR Falabella" && (
            <h1 className="text-[#333] font-normal text-[24px]">
              Medios de pago
            </h1>
          )}
          <span className="text-[18px] text-[#000]">{text}</span>
          <div className="flex flex-col items-center justify-center gap-12">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/icons/user-information/card.svg"
                width={125}
                height={125}
                alt="address"
              />
              <div className="flex flex-col items-center text-[#bbb] text-[18px] font-normal">
                <p>{mainText}</p>
              </div>
            </div>
            <Button
              variant="login"
              className="w-full mb-4 rounded-[55px] border-[1px] border-[#333]  cursor-pointer bg-[#FFF] text-[#333] h-[44px] text-[16px] font-bold  tracking-[1px]"
            >
              {textButton}
            </Button>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-center p-5 bg-[#FFF]">
        <Button
          variant="register"
          className="w-[300px] rounded-[280px] font-semibold text-base cursor-pointer bg-icon-background text-primary-foreground"
        >
          Guardar
        </Button>
      </div>
    </>
  );
};
