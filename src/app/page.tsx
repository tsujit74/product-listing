"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar/Sidebar";
import ProductGrid from "@/components/ProductGrid/ProdductGrid";
import { products as allProducts } from "@/data/product";
import { Product } from "../types/product";

export default function Page() {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });
  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredProducts: Product[] = useMemo(() => {
    return allProducts.filter((p) => {
      const inPrice = p.price >= priceRange.min && p.price <= priceRange.max;

      const matchBrand = activeBrand
        ? p.name.split(" ")[0] === activeBrand
        : true;

      const matchColor =
        selectedColors.length > 0
          ? p.colors?.some((c) => selectedColors.includes(c))
          : true;

      return inPrice && matchBrand && matchColor;
    });
  }, [priceRange, activeBrand, selectedColors]);

  return (
    <main className="min-h-screen">
      <Navbar logoSrc="/images/logo.svg" />

      <div className="flex min-h-screen bg-white p-4 gap-6">
        <div className="hidden md:block w-1/4">
          <Sidebar
            activeBrand={activeBrand}
            setActiveBrand={setActiveBrand}
            onPriceChange={setPriceRange}
            onColorChange={setSelectedColors}
            onClose={() => setIsSidebarOpen(false)}
          />
        </div>

        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 flex">
            <div className="w-3/4 sm:w-1/2 bg-white p-6 overflow-y-auto">
              <Sidebar
                activeBrand={activeBrand}
                setActiveBrand={setActiveBrand}
                onPriceChange={setPriceRange}
                onColorChange={setSelectedColors}
                onClose={() => setIsSidebarOpen(false)}
              />
            </div>
            <div
              className="flex-1"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          </div>
        )}
        <div className="flex-1">
          <button
            className="md:hidden fixed px-4 py-2 bg-gray-300 text-black rounded z-9"
            onClick={() => setIsSidebarOpen(true)}
          >
            &gt;&gt;
          </button>

          <ProductGrid products={filteredProducts} />
        </div>
      </div>

      <Footer />
    </main>
  );
}
