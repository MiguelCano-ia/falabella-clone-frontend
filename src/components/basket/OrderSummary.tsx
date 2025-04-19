"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const OrderSummary = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="w-auto h-auto bg-white rounded-[10px] shadow-sm px-[22.5px] py-[16px] flex flex-col gap-5">
      <div className="text-sm text-[#333] space-y-2">
        <div className="flex justify-between border-b-[1px] pb-4">
          <span className="text-[#333] font-bold text-[14px]">
            Productos (5)
          </span>
          <span className="font-bold">$17.739.200</span>
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="descuentos" className="border-0">
            <AccordionTrigger
              className={`justify-between [&>svg]:hidden hover:no-underline py-0 pb-2 ${
                accordionOpen ? "border-b-0" : "border-b-[1px]"
              }`}
              onClick={() => setAccordionOpen(!accordionOpen)}
            >
              <span className="text-[#333] font-bold text-[14px]">
                Descuentos (3)
              </span>
              <div className="flex items-center">
                <span className="text-[#30871F] font-semibold text-sm">
                  -$7.349.700
                </span>
                <ChevronDown className="w-7 h-7" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 text-[14px] border-b-[1px]">
              <div className="flex justify-between">
                <span className="text-[#333]">
                  Minibar Electrolux 47L Gris ERD50W3HUS
                </span>
                <span className="text-[#30871F] font-bold">- $250.000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[14px] text-[#333]">
                  Portátil ASUS Vivobook Go 15
                </span>
                <span className="text-[#30871F] font-bold">- $1.610.000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[14px] text-[#333]">
                  PORTÁTIL ASUS INTEL I5‑12500H
                </span>
                <span className="text-[#30871F] font-bold">- $5.489.700</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex justify-between pt-2">
          <span className="text-[#333]">Total:</span>
          <span className="text-[14px]">$10.389.500</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-[14px] font-bold">Total con Falabella:</span>
          <div className="flex items-center gap-1">
            <Image
              src="/images/category/specialdiscount.png"
              alt="cmr"
              width={61}
              height={20}
            />
            <span className="text-[#D60303] font-bold text-[14px]">
              $10.018.600
            </span>
          </div>
        </div>
      </div>

      <div className="pb-[18px]">
        <Button className="bg-[#343E49] hover:bg-[#2F3842] text-white text-[18px] rounded-full w-full h-[42px] font-bold">
          Continuar compra
        </Button>
      </div>
    </div>
  );
};
