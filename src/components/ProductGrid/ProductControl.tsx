"use client";

import { products } from "@/data/product";
import Image from "next/image";

const ProductControl = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#F6F7F8] p-2 mt-3 mb-3 gap-4 rounded">
      <div className="flex flex-col md:flex-row items-center gap-15 w-full px-2">
        <span className="text-[#22262A] text-sm font-medium">{products.length} Items</span>

        <div className="flex items-center gap-5">
          <label
            htmlFor="sortBy"
            className="text-[#22262A] text-sm font-medium"
          >
            Sort By
          </label>
          <select
            id="sortBy"
            className="border-2 border-[#F1F3F4] rounded px-2 py-2 text-sm w-[142px]"
          >
            <option value="Name">Name</option>
            <option value="Price">Price</option>
            <option value="Date">Date</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label
            htmlFor="showCount"
            className="text-[#22262A] text-sm font-medium  "
          >
            Show
          </label>
          <select
            id="showCount"
            className=" rounded px-2 py-2 text-sm w-[142px] border-2 border-[#F1F3F4]"
          >
            <option value={6}>6</option>
            <option value={12}>12</option>
            <option value={24}>24</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-2">
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
