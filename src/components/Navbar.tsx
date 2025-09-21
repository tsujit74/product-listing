"use client";

import React, { useState } from "react";
import Image from "next/image";

interface NavbarProps {
  logoSrc: string;
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc }) => {
  const navItems = ["Home", "Bag", "Sneakers", "Belt", "Contact"];
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-white border-b-4 border-[#FAFAFB] sticky top-0 z-11">
      <div className="flex items-center">
        <Image src={logoSrc} width={182} height={44} alt="Logo" />
      </div>

      <div
        className="flex items-center justify-between flex-nowrap overflow-x-auto hidden md:flex"
        style={{ width: "804px", height: "40px" }}
      >
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            aria-current={active === item ? "page" : undefined}
            className={`group flex-1 flex justify-center items-center relative text-[20px] font-medium uppercase transition-colors duration-300 tracking-[0%] leading-[100%] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
              ${
                active === item
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
          >
            {item}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-2 text-sm text-gray-500 mt-2 sm:mt-0 hidden md:flex">
        <div className="flex items-center">
          <Image src="/images/cart.svg" width={31} height={34} alt="Cart" />
        </div>
        <span className="text-[20px]">Items:</span>
        <span className="text-gray-800 text-[20px]">$0.00</span>
      </div>

      <button
        className="md:hidden p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        onClick={() => setMenuOpen(true)}
        aria-label="Open navigation menu"
      >
        <Image src="/images/bar.svg" alt="Menu" width={28} height={28} />
      </button>

      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-50 flex flex-col p-6">
          <button
            className="self-end mb-6 text-3xl text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 absolute"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            ✕
          </button>

          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActive(item);
                  setMenuOpen(false);
                }}
                aria-current={active === item ? "page" : undefined}
                className={`text-[20px] font-medium uppercase text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
                  ${
                    active === item
                      ? "text-blue-600"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
              >
                {item}
              </button>
            ))}

            <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
              <Image src="/images/cart.svg" width={28} height={28} alt="Cart" />
              <span className="text-[18px]">Items:</span>
              <span className="text-gray-800 text-[18px]">$0.00</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
