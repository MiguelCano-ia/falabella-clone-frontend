"use client";

import { useUIStore } from "@/store/ui/indext";

export const Overlay = () => {
  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);
  const closeSidebar = useUIStore((state) => state.closeSidebar);

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed w-full h-full bg-[#4A4A4A80] z-8"
          onClick={closeSidebar}
        />
      )}
    </>
  );
};
