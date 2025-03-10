import { SidebarDesktop } from "./desktop/SidebarDesktop";
import { SidebarMobile } from "./mobile/SidebarMobile";
import { Overlay } from "./Overlay";

const categories = [
  "Tecnologia",
  "Celulares y accesorios",
  "Electrohogar",
  "Moda mujer",
  "Moda hombre",
];

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
