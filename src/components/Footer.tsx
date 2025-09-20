"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerSections = [
    {
      title: "Information",
      links: [
        "About Us",
        "Information",
        "Privacy Policy",
        "Terms & Conditions",
      ],
    },
    {
      title: "Service",
      links: [
        "About Us",
        "Information",
        "Privacy Policy",
        "Terms & Conditions",
      ],
    },
    {
      title: "My Account",
      links: [
        "About Us",
        "Information",
        "Privacy Policy",
        "Terms & Conditions",
      ],
    },
    {
      title: "Our Offers",
      links: [
        "About Us",
        "Information",
        "Privacy Policy",
        "Terms & Conditions",
      ],
    },
  ];

  return (
    <footer className="bg-[#BCDDFE] w-full pt-25 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 ">
            <Image src="/images/icon.svg" width={84} height={25} alt="Logo" />
            <span className="font-poppins font-bold text-[18px] leading-[100%]">
              E-Comm
            </span>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet earum
            alias maxime modi deserunt repellendus quo facilis distinctio, rerum
            nulla reiciendis cumque ipsa similique veritatis nostrum velit quasi
            id quidem!
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-md font-medium uppercase">Follow Us</h4>
          <p className="text-sm">
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </p>
          <div className="flex space-x-4">
            <Link href="#">
              <Image
                src="/images/social/facebook.svg"
                width={8}
                height={14}
                alt="Facebook"
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/social/twitter.svg"
                width={20}
                height={14}
                alt="Twitter"
              />
            </Link>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-md font-bold font-medium uppercase">
            Contact Us
          </h4>
          <div className="text-sm">
            <p>E-Comm, 4578</p>
            <p>Marmora Road,</p>
            <p>Glasgow D04 89GR</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        {footerSections.map((section) => (
          <div key={section.title} className="space-y-2">
            <h4 className="text-md font-normal uppercase">{section.title}</h4>
            <ul className="text-xs space-y-1 font-small">
              {section.links.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[#262626] font-normal">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-400 flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="mb-4 md:mb-0 text-[#C1C8CE]">
          © 2025 E-Commerce theme by bitterbitdev.com
        </p>
        <div className="flex space-x-2">
          <Image
            src="/images/payments/union.svg"
            width={40}
            height={25}
            alt="Mastercard"
          />
          <Image
            src="/images/payments/master.svg"
            width={40}
            height={25}
            alt="Mastercard"
          />
          <Image
            src="/images/payments/paypal.svg"
            width={40}
            height={25}
            alt="PayPal"
          />
          <Image
            src="/images/payments/visa.svg"
            width={40}
            height={25}
            alt="Visa"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
