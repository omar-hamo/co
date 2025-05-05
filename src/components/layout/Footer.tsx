"use client";

import { useState } from "react";
import Image from "next/image";
import solo from "../assets/solo.webp";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="border-t bg-white pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">DevAgency</h2>
            <p className="text-gray-600 mb-4">
              We build modern websites and scalable web apps to grow your
              business.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-linkedin"></i>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-github"></i>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-twitter"></i>
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Portfolio</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="#">Website Development</Link>
              </li>
              <li>
                <Link href="#">eCommerce Solutions</Link>
              </li>
              <li>
                <Link href="#">SaaS Platforms</Link>
              </li>
              <li>
                <Link href="#">Custom Web Apps</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: info@devagency.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Location: New York, USA</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 py-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} DevAgency. All rights reserved.
        </div>
      </footer>{" "}
    </>
  );
}
