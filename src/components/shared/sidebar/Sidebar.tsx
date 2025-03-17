"use client";

import { useEffect } from "react";
import { SidebarDesktop } from "./desktop/SidebarDesktop";
import { SidebarMobile } from "./mobile/SidebarMobile";
import { Overlay } from "./Overlay";
import { categories } from "@/data/categories/categories.data";
import { useUIStore } from "@/store/ui";

export const Sidebar = () => {
  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <>
      <Overlay />

      {/* Sidebar Mobile */}
      <SidebarMobile categories={categories} />

      {/* Sidebar Desktop */}

      <SidebarDesktop categories={categories} />
    </>
  );
};
