"use client";

import React from "react";
import HotDeals from "./HotDeals";
import { PriceFilter } from "./PriceFilter";
import ColorFilter from "./ColorFilter";
import { products } from "@/data/product";

interface SidebarProps {
  activeBrand: string | null;
  setActiveBrand: (brand: string | null) => void;
  onPriceChange: (range: { min: number; max: number }) => void;
  onColorChange: (colors: string[]) => void; 
}

const Sidebar: React.FC<SidebarProps> = ({
  onPriceChange,
  onColorChange,
}) => {
  return (
    <div className="space-y-6">
      <HotDeals />
      <PriceFilter onFilterChange={onPriceChange} />
      <ColorFilter products={products} onFilterChange={onColorChange} />
    </div>
  );
};

export default Sidebar;
