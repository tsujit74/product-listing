"use client";

import React from "react";
import HotDeals from "./HotDeals";
import { PriceFilter } from "./PriceFilter";
import ColorFilter from "./ColorFilter";
import { products } from "@/data/product";
import Brand from "./Brand";
import More from "./More";

interface SidebarProps {
  activeBrand: string | null;
  setActiveBrand: (brand: string | null) => void;
  onPriceChange: (range: { min: number; max: number }) => void;
  onColorChange: (colors: string[]) => void;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  onPriceChange,
  onColorChange,
  onClose,
}) => {
  return (
    <div className="space-y-6 relative">
      {/* Mobile close button */}
      {onClose && (
        <button
          className="absolute top-2 right-2 text-gray-600 font-bold text-md hover:text-black md:hidden"
          onClick={onClose}
        >
          ✕
        </button>
      )}

      <HotDeals />
      <PriceFilter onFilterChange={onPriceChange} />
      <ColorFilter products={products} onFilterChange={onColorChange} />
      <Brand />
      <More />
    </div>
  );
};

export default Sidebar;
