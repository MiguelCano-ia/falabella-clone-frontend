"use client";

import { useUIStore } from "@/store/ui/indext";
import { ChevronLeft, X } from "lucide-react";

interface Props {
  title: string;
}

export const Closebar = ({ title }: Props) => {
  const closeSidebar = useUIStore((state) => state.closeSidebar);
  const openCategory = useUIStore((state) => state.openCategory);
  const openSubCategory = useUIStore((state) => state.openSubCategory);
  const setOpenCategory = useUIStore((state) => state.setOpenCategory);
  const setOpenSubCategory = useUIStore((state) => state.setOpenSubCategory);

  return (
    <>
      <div
        className={`${
          title !== "Hola!"
            ? "text-[14px] leading-[17px] text-foreground"
            : "text-[19px] leading-[22.8px] text-primary"
        } flex items-center    font-bold  lg:block`}
        onClick={
          openSubCategory
            ? () => setOpenSubCategory("")
            : openCategory
            ? () => setOpenCategory("")
            : undefined
        }
      >
        {openCategory && title !== "Hola!" && (
          <ChevronLeft width={24} height={24} className="mr-[5px]" />
        )}
        {title}
      </div>

      <div className="cursor-pointer" onClick={closeSidebar}>
        <X size={20} />
      </div>
    </>
  );
};
