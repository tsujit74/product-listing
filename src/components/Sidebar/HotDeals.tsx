"use client";

import React, { useState } from "react";
import { products } from "../../data/product";

const HotDeals = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const brandCounts = products
    .map((p) => p.brand)
    .filter((brand, index, self) => self.indexOf(brand) === index)
    .map((brand, index) => ({
      id: index + 1,
      label: brand,
      count: products.filter((p) => p.brand === brand).length,
    }));

  return (
    <section className="space-y-9 bg-[#F6F7F8] p-3 rounded">
      <h2
        id="hot-deals-title"
        className="text-[20px] font-semibold text-[#22262A] tracking-wide"
      >
        Hot Deals
      </h2>

      <ul className="space-y-9">
        {brandCounts.map((deal) => (
          <li key={deal.id}>
            <button
              type="button"
              onClick={() => setActiveId(deal.id)}
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
