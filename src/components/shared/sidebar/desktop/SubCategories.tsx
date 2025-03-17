"use client";

import { Subcategory } from "@/interfaces/categories/category";
import { toSlug } from "@/lib/toSlug";
import { useUIStore } from "@/store/ui";
import Link from "next/link";

interface Props {
  subCategories: Subcategory[];
}

export const SubCategories = ({ subCategories }: Props) => {
  const closeSidebar = useUIStore((state) => state.closeSidebar);

  return (
    <>
      <div className="flex justify-between mt-[-8px]">
        <div className="flex flex-col flex-wrap items-start justify-start h-auto max-h-[1410px] xl:max-h-[715px]">
          {subCategories.map((subCategory) => (
            <ul
              key={subCategory.name}
              className="w-[186px] min-w-[186px] mt-8 mr-8"
            >
              <li className="text-[19px] font-bold leading-[22.8px] text-[#68717D] mb-2 hover:text-[#0C2941] transition-colors">
                <Link
                  href={`/falabella-co/category/${toSlug(subCategory.name)}`}
                  onClick={closeSidebar}
                >
                  {subCategory.name}
                </Link>
              </li>
              {subCategory.items.map((item) => (
                <li
                  key={item}
                  className={`text-[14px] leading-[16px] text-primary mb-3 text-[#68717D] hover:text-[#0C2941] transition-colors ${
                    item === "Ver todo" &&
                    "font-bold text-[#0C2941] hover:text-[#68717D] transition-colors"
                  }`}
                >
                  <Link
                    href={`/falabella-co/subcategory/${toSlug(item)}`}
                    className="text-inherit"
                    onClick={closeSidebar}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};
