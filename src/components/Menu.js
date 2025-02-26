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
      <div className="sticky top-0 z-50 bg-white shadow-md">
        {/* Top Bar */}
        <div className="menuBar text-gray-900 z-50 border-b">
          <div className="container flex-container mx-auto px-16 justify-between items-center">
            {/* Left side - Logo */}
            <div className="flex flex-row justify-start items-center">
              <Link href="/">
                <Image
                  src="/altra_logo.png"
                  alt="MyBrand Logo"
                  width={110}
                  height={15}
                  className="object-contain"
                />
              </Link>
              <span className="ml-4 hidden lg:flex text-sm font-bold uppercase hover:text-gray-700">
                BASED IN TEXAS, SERVING GLOBALLY!
              </span>
            </div>

            {/* Right side - Contact Details */}
            <div className="hidden lg:flex space-x-6 items-center">
              <span className="flex items-center text-sm hover:text-gray-700">
                <EnvelopeIcon className="w-4 h-4 mr-1 text-blueColor" />
                <a href="mailto:sales@altafuturis.com">sales@altafuturis.com</a>
              </span>
              <span className="flex items-center text-sm hover:text-gray-700">
                <PhoneIcon className="w-4 h-4 mr-1 text-blueColor" />
                <a href="tel:9764694844">+91 97646 94844</a>
              </span>
              <span className="flex space-x-2">
                <Image src="/us.png" alt="US" width={24} height={16} />
                <Image src="/in.png" alt="India" width={24} height={16} />
              </span>
              <Link href="/">
                <button className="px-4 py-2 bg-blueColor text-white font-bold rounded-xl shadow-md hover:bg-brownColor flex items-center transition-all duration-300">
                  Get In Touch{" "}
                  <span className="ml-2 bg-brownColor text-white px-1 rounded-md">
                    &gt;&gt;
                  </span>
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-blueColor focus:outline-none"
              >
                <Bars3Icon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:block bg-white relative">
          <div className="flex justify-center">
            <ul className="menu flex space-x-28 text-sm font-bold uppercase">
              <li
                className="relative py-4 group"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                <Link href="/services" className="hover:text-brownColor">
                  Services
                </Link>
                {isMegaMenuOpen && (
                  <div className="relative left-0 right-0 -top-1 ">
                    <MegaMenu />
                  </div>
                )}
              </li>
              <li className="py-4">
                <Link href="/solutions" className="hover:text-brownColor">
                  Solutions
                </Link>
              </li>
              <li className="py-4">
                <Link href="/partnerships" className="hover:text-brownColor">
                  Partnerships
                </Link>
              </li>
              <li className="py-4">
                <Link href="/case-studies" className="hover:text-brownColor">
                  Case Studies
                </Link>
              </li>
              <li className="py-4">
                <Link href="/blog" className="hover:text-brownColor">
                  Blogs
                </Link>
              </li>
              <li className="py-4">
                <Link href="/about" className="hover:text-brownColor">
                  About Us
                </Link>
              </li>
              <li className="py-4">
                <Link href="/career" className="hover:text-brownColor">
                  Career
                </Link>
              </li>
              <li className="py-4">
                <Link href="/contact" className="hover:text-brownColor">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="lg:hidden flex flex-col items-center space-y-4 text-sm font-bold uppercase mt-4">
            <li>
              <Link href="/" className="hover:text-brownColor">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-brownColor">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-brownColor">
                Services
              </Link>
            </li>
            <li>
              <Link href="/solutions" className="hover:text-brownColor">
                Solutions
              </Link>
            </li>
            <li>
              <Link href="/partnerships" className="hover:text-brownColor">
                Partnerships
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="hover:text-brownColor">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-brownColor">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/career" className="hover:text-brownColor">
                Career
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brownColor">
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
