"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[#40BFFF] h-[350px] flex flex-col md:flex-row items-center p-8 md:p-16">
      
      <div className="flex-1 text-center md:text-left mb-6 md:mb-0 text-white max-w-sm">
        <h1 className="font-medium text-[30px] leading-tight mb-1">
          Adidas Men Running
        </h1>
        <h1 className="font-medium text-[30px] leading-tight">
          Sneakers
        </h1>

        <p className="text-[14px] mb-6">
          Performance and design. Taken right to the edge.
        </p>

        <Link
          href="/#"
          className="inline-block px-6 border-b-2 border-white font-semibold text-[12px] uppercase hover:text-gray-200 transition-colors"
        >
          Shop Now
        </Link>
      </div>

    
      <div className="flex-1 flex justify-center md:justify-end">
        <Image
          src="/images/Hero.svg"
          alt="Adidas running sneakers"
          width={400}
          height={250}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
