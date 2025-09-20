"use client";

import React from "react";
import Image from "next/image";
import { Product } from "../../types/product";
import Rating from "../Rating/Rating";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg border-[3px] border-[#F6F7F8] w-[328px] h-[408px] flex flex-col">
      <div className="w-full mb-4 relative">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={326}
          height={286}
          className="object-contain mx-auto"
        />
      </div>

      <div className="flex flex-col flex-1 px-4 text-center">
        <h3 className="font-bold text-[#223263] text-[18px] leading-7 tracking-[0.5px] text-gray-900 mb-2">
          {product.name}
        </h3>
        
       <div className="flex justify-center items-center">
         <Rating value={product.ratingValue}/>
       </div>

        <div className="flex justify-center items-center space-x-6 py-2 leading-6">
          <span className="text-[#40BFFF] font-bold text-[16px]">
            ${product.discountPrice}
          </span>

          <span className="line-through text-[#9098B1] text-sm font-normal">
            ${product.price}
          </span>
          <span className="text-[#FB7181] text-sm font-bold">
            {product.discountPercent}% Off
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
