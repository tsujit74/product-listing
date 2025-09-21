"use client";

import Image from "next/image";
import React from "react";

interface ProductControlProps {
  totalItems: number;
  sortBy: string;
  onSortChange: (sortBy: string) => void;
  onShowCountChange: (count: number) => void;
}

const ProductControl: React.FC<ProductControlProps> = ({
  totalItems,
  sortBy,
  onSortChange,
  onShowCountChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#F6F7F8] p-2 mt-3 mb-3 gap-4 rounded">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 w-full px-2 flex-wrap">
        <span className="text-[#22262A] text-sm font-medium">
          {totalItems} Items
        </span>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 w-full sm:w-auto">
          <label
            htmlFor="sortBy"
            className="text-[#22262A] text-sm font-medium"
          >
            Sort By
          </label>
          <select
            id="sortBy"
            value={sortBy}
            className="border-2 border-[#F1F3F4] rounded px-2 py-2 text-sm w-full sm:w-[142px]"
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Name">Name</option>
            <option value="Price">Price</option>
          </select>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
          <label
            htmlFor="showCount"
            className="text-[#22262A] text-sm font-medium"
          >
            Show
          </label>
          <select
            id="showCount"
            className="rounded px-2 py-2 text-sm w-full sm:w-[142px] border-2 border-[#F1F3F4]"
            onChange={(e) => onShowCountChange(Number(e.target.value))}
          >
            <option value={6}>6</option>
            <option value={12}>12</option>
            <option value={24}>24</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-2 md:mt-0">
        <button className="p-2 rounded text-blue-600 hover:bg-gray-100">
          <Image
            src="/images/rectangle.svg"
            alt="Grid View"
            width={24}
            height={21}
          />
        </button>
        <button className="p-2 hover:bg-gray-100">
          <Image src="/images/bar.svg" alt="List View" width={22} height={17} />
        </button>
      </div>
    </div>
  );
};

export default ProductControl;
