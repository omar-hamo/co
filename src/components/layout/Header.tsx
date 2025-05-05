"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../assets/logo.jpg";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi"; // React Icons

const Header: React.FC = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/how-to-start", label: "How To Start" },
    { href: "/services", label: "Services" },
    { href: "/technologies", label: "Technologies" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="w-full px-6 py-4 bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Company Logo" width={60} height={60} />
          <div className="text-orange-600 font-bold leading-5">
            COURTNEY
            <br />
            LANKA
          </div>
        </Link>

        {/* زر الهامبرغر للموبايل */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <HiX className="h-6 w-6 text-blue-950" />
          ) : (
            <HiMenu className="h-6 w-6 text-blue-950" />
          )}
        </button>

        {/* الروابط في الديسكتوب */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-orange-500 transition ${
                path === href
                  ? "text-orange-500 font-semibold"
                  : "text-blue-950"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* قائمة الموبايل المنبثقة */}
      {isOpen && (
        <nav className="md:hidden absolute top-full inset-x-0 bg-white shadow-md">
          <ul className="flex flex-col divide-y divide-gray-100">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 text-sm font-medium transition hover:bg-orange-50 ${
                    path === href ? "text-orange-500" : "text-blue-950"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
