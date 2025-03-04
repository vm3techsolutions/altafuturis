"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { EnvelopeIcon, PhoneIcon, Bars3Icon } from "@heroicons/react/24/solid";
import MegaMenu from "./MegaMenu";

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-md w-full">
        {/* Top Bar */}
        <div className="menuBar border-b py-2">
          <div className="container mx-auto px-4 md:px-2 lg:px-12 flex flex-wrap items-center justify-between">
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
            <div className="hidden md:flex lg:flex space-x-6 items-center">
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
                <button className="px-4 py-2 bg-blueColor text-white  rounded-xl shadow-md hover:bg-brownColor flex items-center transition-all duration-300 ease-in-out group">
                  Get In Touch{" "}
                  <span className="ml-2 bg-brownColor group-hover:bg-blueColor text-white px-1 rounded-md duration-300">
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
        <nav className="hidden lg:block border-b bg-white relative">
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
                  <div className="absolute normal-case left-0 right-0">
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

        {/* Mobile Menu - Slide from Left */}
        <div
          className={`lg:hidden fixed top-0 left-0 h-full w-3/4 max-w-xs  bg-white shadow-md z-50 transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 ease-in-out`}
        >
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-2 right-4 text-2xl font-bold"
          >
            ×
          </button>

          <ul className="flex flex-col items-start space-y-3   p-6">
            <li>
              <Link href="/" className="hover:text-brown-600 ">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-brown-600">
                About Us
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                className="hover:text-brown-600 w-full text-left "
              >
                Services {isServicesMenuOpen ? "▲" : "▼"}
              </button>
              {isServicesMenuOpen && (
                <ul className="bg-gray-100 text-left py-0 rounded-md ml-4">
                  <li className="px-4 py-2 border-b border-gray-800 hover:bg-gray-200">
                    <Link href="/services/web-development">
                      Generative AI Application Development
                    </Link>
                  </li>
                  <li className="px-4 py-2 border-b border-gray-800 hover:bg-gray-200">
                    <Link href="/services/app-development">
                      Salesforce Agentforce Consulting
                    </Link>
                  </li>
                  <li className="px-4 py-2 border-b border-gray-800 hover:bg-gray-200">
                    <Link href="/services/digital-marketing">
                      Salesforce Consulting
                    </Link>
                  </li>
                  <li className="px-4 py-2 border-b border-gray-800 hover:bg-gray-200">
                    <Link href="/services/seo">
                      Generative AI Agents for data loss prevention (DLP) in
                      Cybersecurity
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link href="/services/ui-ux-design">
                      AI Agent development in Blockchain
                    </Link>
                  </li>
                </ul>
              )}
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
        </div>

        {/* Overlay to Close Menu */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
      </div>
    </>
  );
};

export default Menu;
