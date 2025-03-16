"use client";

import {
  Breadcrumbs,
  CategoryList,
  ProductSection,
  SideBarCateogory,
} from "@/components";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Breadcrumbs />
      <div className="flex flex-col bg-[#F1F1F1] w-full h-full justify-center items-center">
        <CategoryList />
        <div className="flex pt-[15px] max-w-[1280px] w-full">
          {/* Sidebar */}
          <SideBarCateogory />
          {/* Derecha */}
          <ProductSection />
        </div>
      </div>
    </div>
  );
}
