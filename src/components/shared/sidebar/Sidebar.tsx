import { SidebarDesktop } from "./desktop/SidebarDesktop";
import { SidebarMobile } from "./mobile/SidebarMobile";
import { Overlay } from "./Overlay";
import { categories } from "@/data/categories/categories.data";

export const Sidebar = () => {
  return (
    <>
      <Overlay />

      {/* Sidebar Mobile */}
      <SidebarMobile />

      {/* Sidebar Desktop */}

      <SidebarDesktop categories={categories} />
    </>
  );
};
