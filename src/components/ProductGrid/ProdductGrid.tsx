"use client";

import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../types/product";
import Hero from "../Hero";
import ProductControl from "../ProductControl/ProductControl";
import Pagination from "../Pagination/Pagination";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [currPage, setCurrPage] = useState(1);
  const itemsPerPage = 6;

  const startIdx = (currPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const showProd = products.slice(startIdx, endIdx);

  return (
    <div>
      <Hero />
      <ProductControl />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {showProd.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currPage}
        totalItems={products.length}
        onPageChange={setCurrPage}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default ProductGrid;
