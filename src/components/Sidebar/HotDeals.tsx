"use client";

import React, { useState } from "react";

interface HotDeal {
  id: number;
  label: string;
  count: number;
}

const hotDeals: HotDeal[] = [
  { id: 1, label: "Nike", count: 2 },
  { id: 2, label: "Airmax", count: 48 },
  { id: 3, label: "Nike", count: 14 },
  { id: 4, label: "Adidas", count: 15 },
  { id: 5, label: "Vans", count: 23 },
  { id: 6, label: "All Stars", count: 1 },
  { id: 7, label: "Adidas", count: 95 },
];

const HotDeals = () => {
  const [activeId, setActiveId] = useState<number | null>(2);
  const handleClick = (id: number) => {
    setActiveId(id);
  };

  return (
    <section className="space-y-9 bg-[#F6F7F8] p-3 mx-2 rounded">
      <h2
        id="hot-deals-title"
        className="text-[20px] font-semibold text-[#22262A] tracking-wide"
      >
        Hot Deals
      </h2>

      <ul className="space-y-9 ">
        {hotDeals.map((deal) => (
          <li key={deal.id}>
            <button
              type="button"
              onClick={() => handleClick(deal.id)}
              className={`flex justify-between items-center w-full text-[18px] focus:outline-none rounded px-1 py-0.5 ${
                activeId === deal.id
                  ? "text-[#33A0FF] font-medium"
                  : "text-[#262626] hover:text-[#33A0FF]"
              }`}
              aria-pressed={activeId === deal.id}
            >
              <span>{deal.label}</span>
              <span className="text-gray-500">{deal.count}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HotDeals;
