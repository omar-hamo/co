"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-start py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">DevAgency</h2>
          <p className="text-gray-600 mb-4 md:w-full w-72 mx-auto">
            We build modern websites and scalable web apps to grow your
            business.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://linkedin.com"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link
                href="/how-to-start"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                How to Start
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Services</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link
                href="/services"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Website Development
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                eCommerce Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                SaaS Platforms
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Custom Web Apps
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Get In Touch
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a
                href="mailto:info@devagency.com"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                info@devagency.com
              </a>
            </li>
            <li>
              <a
                href="tel:+15551234567"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                +31 6 31104755
              </a>
            </li>
            <li>Netherlands, Amsterdam</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} DevAgency. All rights reserved. |{" "}
        <Link
          href="/privacy"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link
          href="/terms"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}
