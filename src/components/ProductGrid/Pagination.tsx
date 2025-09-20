"use client";

import React from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const current = Math.min(Math.max(1, currentPage), totalPages);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Pagination"
      className="flex justify-center items-center bg-[#F7F7F9] rounded-lg font-sans mt-3"
    >
      <div className="flex">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`
              px-6 py-4 text-[18px] font-medium transition-colors duration-200 
              ${
                page === current
                  ? "bg-[#40BFFF] text-white pointer-events-none"
                  : "text-[#22262A] hover:bg-gray-200"
              }
            `}
          >
            {page}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
