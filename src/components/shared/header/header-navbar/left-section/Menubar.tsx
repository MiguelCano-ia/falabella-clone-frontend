"use client";

import { useUIStore } from "@/store/ui/indext";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

export const Menubar = () => {
  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);
  const openSidebar = useUIStore((state) => state.openSidebar);

  return (
    <button
      type="button"
      title="button"
      className="flex items-center ml-5 mr-4 xl:ml-10 xl:mr-[30px] max-lg:ml-3 max-lg:mr-0"
      onClick={openSidebar}
    >
      <div
        className={clsx("mr-2 transition-transform duration-300 ease-in-out", {
          "rotate-180": isSidebarOpen,
        })}
      >
        {isSidebarOpen ? <X size={30} /> : <Menu size={30} />}
      </div>
      <div className="max-lg:hidden">
        <span className="mt-3 font-bold text-[22px]">Menú</span>
      </div>
    </button>
  );
};
