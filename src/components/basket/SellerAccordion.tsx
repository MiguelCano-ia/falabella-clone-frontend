"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Products } from "@/interfaces/categories/product";
import { ProductsList } from "./ProductsList";
import Image from "next/image";

interface Props {
  seller: string;
  products: Products[];
}

export const SellerAccordion = ({ seller, products }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectAll, setSelectAll] = useState(true);

  console.log(products);

  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-[#fff] px-3 py-2 shadow-sm text-[14px] text-[#333] hover:no-underline  ${
            !isOpen ? "rounded-[10px]" : "rounded-none rounded-t-[10px]"
          }`}
        >
          <div className="flex items-center gap-1">
            Vendido por{" "}
            {seller === "Falabella" ? (
              <Image
                src="/icons/basket/falabella.svg"
                width={56}
                height={21}
                alt="falabella"
              />
            ) : (
              <strong>{seller}</strong>
            )}
          </div>
        </AccordionTrigger>
        <AccordionContent className="bg-[#fff] px-3 py-2 shadow-sm rounded-b-[10px]">
          <div className="bg-white rounded-b-[10px]">
            <div className="flex items-center px-4 py-3 border-b">
              <Checkbox
                id={`select-all-${seller}`}
                className="mr-2"
                checked={selectAll}
                onCheckedChange={(checked) => setSelectAll(!!checked)}
              />
              <label
                htmlFor={`select-all-${seller}`}
                className="text-sm font-medium"
              >
                Seleccionar todos
              </label>
            </div>

            <ProductsList products={products} parentChecked={selectAll} />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
