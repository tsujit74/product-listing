"use client";

import React from "react";
import { Product } from "../../types/product";

interface ColorFilterProps {
  products: Product[];
  selectedColors: string[];
  setSelectedColors: (colors: string[]) => void;
}

const getAllColors = (products: Product[]) => {
  const colors = products.flatMap((p) => p.colors || []);
  return Array.from(new Set(colors));
};

const ColorFilter: React.FC<ColorFilterProps> = ({
  products,
  selectedColors,
  setSelectedColors,
}) => {
  const allColors = getAllColors(products);

  const toggleColor = (color: string) => {
    const updated = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];
    setSelectedColors(updated);
  };

  return (
    <div className="bg-[#F6F7F8] rounded-md w-full p-6 mt-3 py-8">
      <h2 className="text-[20px] font-medium text-[#22262A] mb-3 pb-4">
        COLOR
      </h2>
      <div className="flex flex-wrap gap-2">
        {allColors.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => toggleColor(color)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleColor(color);
              }
            }}
            className={`w-8 h-8 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 border-3 ${
              selectedColors.includes(color)
                ? "border-yellow-400 border-4 scale-110"
                : "border-gray-300"
            }`}
            style={{ backgroundColor: color }}
            tabIndex={0}
            aria-pressed={selectedColors.includes(color)}
            aria-label={`Filter by color ${color}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;
