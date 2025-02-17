"use client"; // Ensures interactivity

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { EnvelopeIcon, PhoneIcon, ChevronDoubleRightIcon, Bars3Icon } from "@heroicons/react/24/solid";

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50">
        {/* Top Bar */}
        <div className="menuBar text-gray-900 z-50">
          <div className="container mx-auto flex justify-between items-center">
            {/* Left side - Logo */}
            <Link href="/">
              <Image
                src="/altra_logo.png" // Path to logo in public folder
                alt="MyBrand Logo"
                width={110} // Adjust width
                height={15} // Adjust height
                className="object-contain"
              />
            </Link>

            {/* Right side - Email, Phone, Country Flag, CTA */}
            <div className="flex space-x-6 items-center">
              <span className="hidden lg:flex items-center text-sm hover:text-gray-700">
                <EnvelopeIcon className="w-4 h-4 mr-1 text-blueColor fill-current" /> {/* Email icon */}
                <a href="mailto:sales@altafuturis.com">sales@altafuturis.com</a>
              </span>
              <span className="hidden lg:flex items-center text-sm hover:text-gray-700">
                <PhoneIcon className="w-4 h-4 mr-1 text-blueColor" /> {/* Phone icon */}
                <a href="tel:9764694844">+91 97646 94844</a>
              </span>
              <span className="flex space-x-2">
                <Image src="/us.png" alt="US" width={24} height={16} />
                <Image src="/in.png" alt="India" width={24} height={16} />
              </span>
              <a href="/" className="flex justify-end mr-11 md:mr-16">
              <button className="px-4 py-2 bg-blueColor text-white font-bold  rounded-xl shadow-md hover:bg-brownColor flex items-center transition-all duration-300 ease-in-out group">
                Get In Touch
                <span className="ml-2 bg-brownColor group-hover:bg-blueColor text-white px-1 rounded-md duration-300">
                  &gt;&gt;
                </span>
              </button>
            </a>
            </div>

            {/* Mobile menu button */}
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

        {/* Menu Bar */}
        <nav className="hidden lg:block bg-white sticky top-[42px] z-40 shadow-md">
          <div className="container mx-auto p-4 flex justify-center items-center">
            {/* Desktop Menu */}
            <ul className="menu hidden lg:flex space-x-6 text-sm font-bold-md uppercase">
              <li>
                <Link href="/" className="hover:text-gray-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-gray-600">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:text-gray-600">
                  Partnerships 
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-gray-600">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-gray-600">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-gray-600">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-600">
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <ul className="lg:hidden flex flex-col items-center space-y-4 text-sm font-bold-md uppercase mt-4">
                <li>
                  <Link href="/" className="hover:text-gray-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-gray-600">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="hover:text-gray-600">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/partnerships" className="hover:text-gray-600">
                    Partnerships 
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="hover:text-gray-600">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-gray-600">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/career" className="hover:text-gray-600">
                    Career
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-600">
                    Contact Us
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Menu;
