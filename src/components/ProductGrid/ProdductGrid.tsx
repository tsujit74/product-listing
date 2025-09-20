"use client";

import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../types/product";
import Hero from "../Hero";
import ProductControl from "../ProductControl/ProductControl";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div>
      <Hero />
      <ProductControl />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
