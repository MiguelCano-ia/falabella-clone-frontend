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
import Image from "next/image";
import { useSelectionStore } from "@/store/basket/selection.store";
import { ProductsList } from "./ProductsList";

const EMPTY_MAP: Record<string, boolean> = {};

interface Props {
  seller: string;
  products: Products[];
}

export const SellerAccordion = ({ seller, products }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAll = useSelectionStore((s) => s.toggleAll);

  const rawSelMap = useSelectionStore((s) => s.selections[seller]);
  const selMap = rawSelMap ?? EMPTY_MAP;

  const productIds = products.map((p) => p.id_product.toString());
  const allChecked = productIds.every((id) => selMap[id]);
  const anyChecked = productIds.some((id) => selMap[id]);

  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-[#fff] px-3 py-2 shadow-sm text-[14px] text-[#333] hover:no-underline ${
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
              <strong>{seller.at(0)?.toUpperCase() + seller.slice(1)}</strong>
            )}
          </div>
        </AccordionTrigger>
        <AccordionContent className="bg-[#fff] px-3 py-2 shadow-sm rounded-b-[10px]">
          <div className="bg-white rounded-b-[10px]">
            <div className="flex items-center px-4 py-3 border-b">
              <Checkbox
                id={`select-all-${seller}`}
                className={`mr-2 ${
                  allChecked ? "bg-[#495867] text-white" : "bg-white"
                }`}
                checked={allChecked}
                data-state={!allChecked && anyChecked}
                onCheckedChange={(v) => toggleAll(seller, productIds, !!v)}
              />
              <label
                htmlFor={`select-all-${seller}`}
                className="text-sm font-medium"
              >
                Seleccionar todos
              </label>
            </div>
            <ProductsList products={products} seller={seller} />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
