"use client";

import { CategoriesMobile } from "./CategoriesMobile";
import { Category } from "@/interfaces/categories/category";
import { CategoryTitleMobile } from "./CategoryTitleMobile";
import { Closebar } from "../Closebar";
import { MobileUserMenu } from "./MobileUserMenu";
import { SubCategoriesMobile } from "./SubCategoriesMobile";
import { useUIStore } from "@/store/ui";
import clsx from "clsx";

interface Props {
  categories: Category[];
}

export const SidebarMobile = ({ categories }: Props) => {
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
              {categories.map((category) => (
                <CategoriesMobile
                  key={category.name}
                  setCategory={setOpenCategory}
                  category={category.name}
                />
              ))}
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
            title={openCategory}
            icon={categories.find((c) => c.name === openCategory)!.svg}
          />
          <div className="flex flex-col justify-between mb-[60px]">
            {!openSubCategory &&
              categories
                .find((c) => c.name === openCategory)!
                .subcategories.map((subCategory) => (
                  <CategoriesMobile
                    key={subCategory.name}
                    setCategory={setOpenSubCategory}
                    category={subCategory.name}
                  />
                ))}
            {openSubCategory && (
              <SubCategoriesMobile
                items={
                  categories
                    .find((c) => c.name === openCategory)!
                    .subcategories.find((sc) => sc.name === openSubCategory)!
                    .items
                }
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};
