"use client";

import React from "react";
import Image from "next/image";

interface RatingProps {
  value: number;
  size?: number; 
}

const Rating: React.FC<RatingProps> = ({ value, size = 16 }) => {
  const fullStars = Math.floor(value);
  const halfStar = value % 1 >= 0.5;

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < fullStars) {
          return (
            <Image
              key={i}
              src="/images/star/full-star.svg"
              alt="Full Star"
              width={size}
              height={size}
            />
          );
        } else if (halfStar && i === fullStars) {
          return (
            <Image
              key={i}
              src="/images/star/half-star.svg"
              alt="Half Star"
              width={19}
              height={size}
            />
          );
        } else {
          return (
            <Image
              key={i}
              src="/images/star/empty-star.svg"
              alt="Empty Star"
              width={size}
              height={size}
            />
          );
        }
      })}

        <span className="text-sm text-left">
          {value}
        </span>
    </div>
  );
};

export default Rating;
