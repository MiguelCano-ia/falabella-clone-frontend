"use client";

import clsx from "clsx";
import { Closebar } from "../Closebar";
import { Categories } from "./Categories";
import { SubCategories } from "./SubCategories";
import { useUIStore } from "@/store/ui";
import { CategoryTitlte } from "./CategoryTitlte";
import { Category, Subcategory } from "@/interfaces/categories/category";
import { useState } from "react";

interface Props {
  categories: Category[];
}

export const SidebarDesktop = ({ categories }: Props) => {
  const [svg, setSvg] = useState("");
  const [subCategories, setSubCategories] = useState<Subcategory[]>([]);

  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);
  const categoryDesktop = useUIStore((state) => state.categoryDesktop);
  const setCategoryDesktop = useUIStore((state) => state.setCategoryDesktop);

  return (
    <div
      className={clsx(
        "fixed w-auto left-0 top-0 bottom-0 z-20 shadow-lg transition-transform duration-500 ease-in-out hidden lg:flex",
        {
          "translate-x-0": isSidebarOpen,
          "-translate-x-full": !isSidebarOpen,
        }
      )}
    >
      <div className="h-full w-[300px] max-w-[300px] bg-primary-foreground transition-transform duration-500 ease-in-out font-normal">
        <div className="flex justify-between items-center py-4 pl-6 pr-[13px] h-[56px] border-t-4 border-t-primary-theme-color border-b-[1px]">
          <Closebar title={"Hola!"} />
        </div>
        <div className="mb-[60px] py-4">
          {categories.map((category) => (
            <Categories
              key={category.name}
              categoryTitle={category.name}
              categoryDesktop={categoryDesktop}
              setCategoryDesktop={setCategoryDesktop}
              svg={category.svg}
              setSvg={setSvg}
              subCategories={category.subcategories}
              setSubCategories={setSubCategories}
            />
          ))}
        </div>
      </div>
      {categoryDesktop && (
        <div className="flex flex-col mt-[59px] rounded-tr-[20px] w-screen min-w-[468px] max-w-[674px] h-screen pt-6 pb-16 pl-8 mr-2 bg-primary-foreground xl:max-w-[904px]">
          <div className="overflow-y-scroll overflow-x-hidden">
            <CategoryTitlte title={categoryDesktop} icon={svg} />
            <SubCategories
              section={categoryDesktop}
              subCategories={subCategories}
            />
          </div>
        </div>
      )}
    </div>
  );
};
