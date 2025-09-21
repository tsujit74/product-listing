"use client";

import React, { useState, useEffect, useMemo } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../../types/product";
import Hero from "../Hero";
import ProductControl from "./ProductControl";
import Pagination from "./Pagination";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [currPage, setCurrPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [sortBy, setSortBy] = useState("");

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      if (sortBy === "Name") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "Price") {
        return a.price - b.price;
      }
      return 0;
    });
  }, [products, sortBy, itemsPerPage]);

  const startIdx = (currPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const showProd = sortedProducts.slice(startIdx, endIdx);

  useEffect(() => {
    setCurrPage(1);
  }, [products]);

  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <ProductControl
        totalItems={products.length}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onShowCountChange={setItemsPerPage}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {showProd.length > 0 ? (
          showProd.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 mt-4">
            No products match your filters.
          </p>
        )}
      </div>

      {products.length > itemsPerPage && (
        <Pagination
          currentPage={currPage}
          totalItems={products.length}
          onPageChange={setCurrPage}
          itemsPerPage={itemsPerPage}
        />
      )}
    </div>
  );
};

export default ProductGrid;
