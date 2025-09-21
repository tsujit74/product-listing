"use client";

import React, { useState, useEffect, useRef } from "react";
import { products } from "@/data/product";

interface PriceRange {
  min: number;
  max: number;
}

interface MultiRangeSliderProps {
  min: number;
  max: number;
  onChange: (range: PriceRange) => void;
}

const MultiRangeSlider: React.FC<MultiRangeSliderProps> = ({
  min,
  max,
  onChange,
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const range = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (range.current) {
      const minPercent = ((minVal - min) / (max - min)) * 100;
      const maxPercent = ((maxVal - min) / (max - min)) * 100;
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, maxVal, min, max]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxVal - 1);
    setMinVal(value);
    onChange({ min: value, max: maxVal });
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minVal + 1);
    setMaxVal(value);
    onChange({ min: minVal, max: value });
  };

  return (
    <div className="relative w-full h-10 py-4">
      <div className="absolute w-full h-1 bg-gray-300 rounded" />
      <div
        ref={range}
        className="absolute h-1 bg-blue-500 rounded"
        style={{ left: "0%", width: "100%" }}
      />

      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={handleMinChange}
        className="absolute w-full h-1 appearance-none bg-transparent pointer-events-auto"
        style={{ zIndex: 3 }}
      />

      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={handleMaxChange}
        className="absolute w-full h-1 appearance-none bg-transparent pointer-events-auto"
        style={{ zIndex: 4 }}
      />
    </div>
  );
};

export const PriceFilter: React.FC<{
  onFilterChange?: (range: PriceRange) => void;
}> = ({ onFilterChange }) => {
  const prices = products.map((p) => p.price);
  const MIN_PRICE = Math.min(...prices);
  const MAX_PRICE = Math.max(...prices);

  const [priceRange, setPriceRange] = useState<PriceRange>({
    min: MIN_PRICE,
    max: MAX_PRICE,
  });

  useEffect(() => {
    onFilterChange && onFilterChange(priceRange);
  }, [priceRange, onFilterChange]);

  return (
    <div className="bg-[#F6F7F8] rounded p-4 mt-3 ">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">PRICE</h2>

      <div className="flex justify-between items-center text-gray-600 mb-4">
        <span className="text-base font-normal">Range:</span>
        <span className="font-normal text-base text-gray-900">
          ${priceRange.min.toFixed(2)} - ${priceRange.max.toFixed(2)}
        </span>
      </div>

      <MultiRangeSlider
        min={MIN_PRICE}
        max={MAX_PRICE}
        onChange={({ min, max }) => setPriceRange({ min, max })}
      />
    </div>
  );
};
