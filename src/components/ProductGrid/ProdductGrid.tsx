"use client";

import React, { useState, useEffect } from "react";
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
  const itemsPerPage = 6;

  const startIdx = (currPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const showProd = products.slice(startIdx, endIdx);

  useEffect(() => {
    setCurrPage(1); // Reset page on filter change
  }, [products]);

  return (
    <div>
      <Hero />
      <ProductControl />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {showProd.length > 0 ? (
          showProd.map((product) => <ProductCard key={product.id} product={product} />)
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
