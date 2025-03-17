"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  totalItems: number; // Número total de elementos
  itemsPerPage: number; // Cantidad de elementos por página
  onPageChange: (page: number) => void; // Callback para pasar la página seleccionada
}

export const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const [pageCount, setPageCount] = useState(0);
  const [, setCurrentPage] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(totalItems / itemsPerPage));
  }, [totalItems, itemsPerPage]);

  const handlePageClick = (event: { selected: number }) => {
    const newPage = event.selected + 1;
    setCurrentPage(event.selected);
    onPageChange(newPage);
  };

  return (
    <div className="flex justify-center mt-4">
      <ReactPaginate
        previousLabel={<ChevronLeft className="h-6 w-6" />}
        nextLabel={<ChevronRight className="h-6 w-6" />}
        breakLabel="..."
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName="flex items-center gap-4"
        pageClassName="text-[#333333] rounded-[15px] py-1 rounded-md cursor-pointer"
        activeClassName="text-[15px] w-[30px] h-[30px] text-center rounded-[15px] bg-[#495867] text-white hover:bg-[#495867]"
        previousClassName="py-1 cursor-pointer"
        nextClassName="py-1 rounded-md cursor-pointer"
        disabledClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
};
