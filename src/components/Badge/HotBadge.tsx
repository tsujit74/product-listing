"use client";

import React from "react";

interface HotBadgeProps {
  text?: string;         
  color?: string;      
  className?: string;
}

const HotBadge: React.FC<HotBadgeProps> = ({
  text = "HOT",
  color = "#FF4858",
  className = "",
}) => {
  return (
    <span
      className={`px-2 py-1 text-xs font-bold uppercase rounded inline-block text-white w-fit absolute top-2 left-2 w-fit ${className}`}
      style={{ backgroundColor: color }}
    >
      {text}
    </span>
  );
};

export default HotBadge;
