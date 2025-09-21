"use client";

import React from "react";
import HotDeals from "./HotDeals";
import { PriceFilter } from "./PriceFilter";

interface SidebarProps {
  activeBrand: string | null;
  setActiveBrand: (brand: string | null) => void;
  onPriceChange: (range: { min: number; max: number }) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeBrand, setActiveBrand, onPriceChange }) => {
  return (
    <div className="space-y-6">
      <HotDeals />
      <PriceFilter onFilterChange={onPriceChange} />
    </div>
  );
};

export default Sidebar;
