"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { EnvelopeIcon, PhoneIcon, Bars3Icon } from "@heroicons/react/24/solid";
import MegaMenu from "./MegaMenu";

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-md w-full">
        {/* Top Bar */}
        <div className="menuBar border-b py-2">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-wrap items-center justify-between">
            {/* Left Side - Logo & Tagline */}
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Image
                  src="/altra_logo.png"
                  alt="MyBrand Logo"
                  width={110}
                  height={15}
                  className="object-contain"
                />
              </Link>
              <span className="hidden lg:flex text-sm font-bold uppercase hover:text-gray-700">
                BASED IN TEXAS, SERVING GLOBALLY!
              </span>
            </div>

            {/* Right Side - Contact Details */}
            <div className="hidden lg:flex space-x-6 items-center">
              <span className="flex items-center text-sm hover:text-gray-700">
                <EnvelopeIcon className="w-4 h-4 mr-1 text-blue-500" />
                <a href="mailto:sales@altafuturis.com">sales@altafuturis.com</a>
              </span>
              <span className="flex items-center text-sm hover:text-gray-700">
                <PhoneIcon className="w-4 h-4 mr-1 text-blue-500" />
                <a href="tel:9764694844">+91 97646 94844</a>
              </span>
              <div className="flex space-x-2">
                <Image src="/us.png" alt="US" width={24} height={16} />
                <Image src="/in.png" alt="India" width={24} height={16} />
              </div>
              <Link href="/">
                <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-brown-600 flex items-center transition-all duration-300">
                  Get In Touch{" "}
                  <span className="ml-2 bg-brown-600 text-white px-1 rounded-md">
                    &gt;&gt;
                  </span>
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-blue-500 focus:outline-none"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:block bg-white relative">
          <div className="container mx-auto px-4">
            <ul className="flex justify-center space-x-6 md:space-x-10 lg:space-x-24 xl:space-x-20 text-sm font-bold uppercase">
              <li
                className="relative py-4 group"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                <Link href="/services" className="hover:text-brown-600">
                  Services
                </Link>
                {isMegaMenuOpen && (
                  <div className="absolute left-0 right-0">
                    <MegaMenu />
                  </div>
                )}
              </li>
              <li className="py-4">
                <Link href="/solutions" className="hover:text-brown-600">
                  Solutions
                </Link>
              </li>
              <li className="py-4">
                <Link href="/partnerships" className="hover:text-brown-600">
                  Partnerships
                </Link>
              </li>
              <li className="py-4">
                <Link href="/case-studies" className="hover:text-brown-600">
                  Case Studies
                </Link>
              </li>
              <li className="py-4">
                <Link href="/blog" className="hover:text-brown-600">
                  Blogs
                </Link>
              </li>
              <li className="py-4">
                <Link href="/about" className="hover:text-brown-600">
                  About Us
                </Link>
              </li>
              <li className="py-4">
                <Link href="/career" className="hover:text-brown-600">
                  Career
                </Link>
              </li>
              <li className="py-4">
                <Link href="/contact" className="hover:text-brown-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="lg:hidden flex flex-col items-center space-y-3 bg-white shadow-md w-full py-4">
            <li>
              <Link href="/" className="hover:text-brown-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-brown-600">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-brown-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="/solutions" className="hover:text-brown-600">
                Solutions
              </Link>
            </li>
            <li>
              <Link href="/partnerships" className="hover:text-brown-600">
                Partnerships
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="hover:text-brown-600">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-brown-600">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/career" className="hover:text-brown-600">
                Career
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brown-600">
                Contact Us
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Menu;
