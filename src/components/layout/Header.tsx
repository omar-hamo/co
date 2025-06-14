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
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="w-full xl:px-6 md:py-2 bg-[#f0f0f0] shadow-sm relative z-50">
      <div className="xl:mx-20 mx-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Company Logo" width={60} height={60} />
          <div className="text-primary font-bold leading-5">ARO-TECH</div>
        </Link>

        {/* زر الهامبرغر للموبايل */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
              className={`hover:text-primary transition ${
                path === href ? "text-primary font-bold" : "text-blue-950"
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
