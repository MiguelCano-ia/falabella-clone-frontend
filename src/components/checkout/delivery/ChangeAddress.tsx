"use client";

import { useCheckoutStore } from "@/store/checkout";
import { Pencil } from "lucide-react";

export const ChangeAddress = () => {
  const setIsAddressModalOpen = useCheckoutStore(
    (state) => state.setIsAddressModalOpen
  );

  return (
    <div
      className="flex items-center gap-1 cursor-pointer"
      onClick={() => setIsAddressModalOpen(true)}
    >
      <Pencil size={14} />
      <span className="text-[#333] font-normal text-[12px] underline underline-offset-1">
        Cambiar
      </span>
    </div>
  );
};
