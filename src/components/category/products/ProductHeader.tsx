"use client";

import { Pagination } from "@/components/ui/Pagination";
import { SortDropdown } from "../filters/SortDropdown";

export const ProductHeader = () => {
  return (
    <div className="pl-[10px] w-full">
      <div className="flex items-center justify-between rounded-[12px] px-[30px] py-5 mb-[10px] bg-[#fff] max-lg:flex-col max-lg:items-start max-lg:justify-start">
        <SortDropdown />
        <Pagination
          totalItems={1524}
          itemsPerPage={48}
          onPageChange={(page) => page}
        />
      </div>
    </div>
  );
};
