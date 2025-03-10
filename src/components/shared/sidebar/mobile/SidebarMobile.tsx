"use client";

import clsx from "clsx";
import { Closebar } from "../Closebar";
import { CategoriesMobile } from "./CategoriesMobile";
import { MobileUserMenu } from "./MobileUserMenu";
import { useUIStore } from "@/store/ui/indext";
import { SubCategoriesMobile } from "./SubCategoriesMobile";
import { CategoryTitleMobile } from "./CategoryTitleMobile";

export const SidebarMobile = () => {
  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);
  const openCategory = useUIStore((state) => state.openCategory);
  const setOpenCategory = useUIStore((state) => state.setOpenCategory);
  const openSubCategory = useUIStore((state) => state.openSubCategory);
  const setOpenSubCategory = useUIStore((state) => state.setOpenSubCategory);

  return (
    <div
      className={clsx(
        "fixed top-0 bottom-0 left-0 w-4/5 max-w-[414px] bg-primary-foreground transition-transform duration-500 ease-in-out z-10 border-t-4 border-primary-theme-color h-screen shadow-lg lg:hidden",
        {
          "translate-x-0": isSidebarOpen,
          "-translate-x-full": !isSidebarOpen,
        }
      )}
    >
      {!openCategory && (
        <>
          <div className="flex items-center w-full min-w-full font-normal justify-between py-4 pl-6 pr-[13px] h-[56px] border-b-[1px]">
            <Closebar title={"Hola!"} />
          </div>
          <div className="flex flex-col justify-between mb-[60px]">
            <MobileUserMenu />
            <div className="relative py-5">
              <CategoriesMobile
                setCategory={setOpenCategory}
                category="Tecnologia"
              />
            </div>
          </div>
        </>
      )}
      {openCategory && (
        <>
          <div className="flex items-center w-full min-w-full font-normal justify-between pt-[17px] pb-[16px] pl-5 pr-[18px] h-[56px] border-b-[1px]">
            <Closebar title={"Volver al menú principal"} />
          </div>
          <CategoryTitleMobile
            title="Tecnologia"
            icon="/icons/categories/icninos.svg"
          />
          <div className="flex flex-col justify-between mb-[60px]">
            {!openSubCategory && (
              <CategoriesMobile
                setCategory={setOpenSubCategory}
                category="Computación"
              />
            )}
            {openSubCategory && <SubCategoriesMobile />}
          </div>
        </>
      )}
    </div>
  );
};
