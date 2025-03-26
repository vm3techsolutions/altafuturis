/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { EnvelopeIcon, PhoneIcon, Bars3Icon } from "@heroicons/react/24/solid";
import MegaMenu from "./MegaMenu";
import InsightMegaMenu from "./InsightMegaMenu";

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen1, setIsMobileMenuOpen1] = useState(false);
  const [isMegaMenuOpen1, setIsMegaMenuOpen1] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={` menuBar shadow-md w-full top-0 z-50 bg-white transition-all duration-300 ease-in-out ${
          isScrolled ? "h-20 shadow-lg" : "h-20"
        }`}
      >
        {/* Top Bar */}
        <div className=" border-b py-2">
          <div className=" mx-auto px-4 md:px-2 lg:px-12 flex flex-wrap items-center justify-between">
            {/* Left Side - Logo & Tagline */}
            <div className="flex items-center space-x-7">
              <Link href="/">
                <img
                  src="/altra_logo.png"
                  alt="MyBrand Logo"
                  width={110}
                  height={15}
                  className="object-contain"
                />
              </Link>
              <span className="hidden lg:flex  text-sm font-bold uppercase hover:text-gray-700">
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
                <img src="/us.png" alt="US" width={24} height={16} />
                <img src="/in.png" alt="India" width={24} height={16} />
              </div>
              {/* <Link href="/contact">
                <button className="px-4 py-2 bg-blueColor text-white  rounded-xl shadow-md hover:bg-brownColor flex items-center transition-all duration-300 ease-in-out group">
                  Get In Touch{" "}
                  <span className="ml-2 bg-brownColor group-hover:bg-blueColor text-white px-1 rounded-md duration-300">
                    &gt;&gt;
                  </span>
                </button>
              </Link> */}
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
        <nav className="hidden lg:block border-b bg-white relative ">
          <div className="container mx-auto px-4">
            <ul className="flex justify-around text-sm font-bold uppercase">
              <li
                className="relative py-4 group"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                <Link href="" className="hover:text-blueColor">
                  Services
                </Link>
                {isMegaMenuOpen && (
                  <div className=" normal-case bg-white left-0 right-0">
                    <MegaMenu />
                  </div>
                )}
              </li>
              <li className="py-4">
                <Link href="/solutions" className="hover:text-blueColor">
                  Solutions
                </Link>
              </li>
              <li className="py-4">
                <Link href="/partnership" className="hover:text-blueColor">
                  Partnerships
                </Link>
              </li>

              {/* <li
      className="relative py-4 group"
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <Link href="#" className="hover:text-blueColor">
        Insights
      </Link>

      {isMenuOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200">
          <ul className="py-2">
            <li>
              <Link
                href="/case-studies"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Case Study
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/podcast"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Podcast
              </Link>
            </li>
          </ul>
        </div>
      )}
    </li> */}

              <li
                className="relative py-4 group"
                onMouseEnter={() => setIsMegaMenuOpen1(true)}
                onMouseLeave={() => setIsMegaMenuOpen1(false)}
              >
                <Link href="" className="hover:text-blueColor">
                  Insights
                </Link>
                {isMegaMenuOpen1 && (
                  <div className=" normal-case bg-white left-0 right-0">
                    <InsightMegaMenu />
                  </div>
                )}
              </li>

              <li className="py-4">
                <Link href="/about" className="hover:text-blueColor">
                  About Us
                </Link>
              </li>
              <li className="py-4">
                <Link href="/career" className="hover:text-blueColor">
                  Career
                </Link>
              </li>
              <li className="py-4 ">
                <Link
                  href="/contact"
                  className="text-white px-3 py-3 bg-blueColor rounded-xl hover:bg-brownColor"
                >
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

          <ul className="flex flex-col items-start space-y-3 p-6">
            <li>
              <Link
                href="/"
                className="hover:text-blueColor"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-blueColor"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>

            <li>
              <button
                onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                className="hover:text-blueColor w-full text-left"
              >
                Services {isServicesMenuOpen ? "▲" : "▼"}
              </button>
              {isServicesMenuOpen && (
                <ul className="bg-gray-100 text-left py-0 rounded-md ml-4">
                  <li className="px-4 py-2 border-b border-gray-800 hover:bg-gray-200">
                    <Link
                      href="/services/ai-coe-consulting"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AI COE consulting and development services
                    </Link>
                  </li>
                  <li className="px-4 py-2 border-b border-gray-800 hover:bg-gray-200">
                    <Link
                      href="/services/ai-app-dev"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Generative AI Application Development
                    </Link>
                  </li>
                  <li className="px-4 py-2 border-b border-gray-800 hover:bg-gray-200">
                    <Link
                      href="/services/salesforce-agentforce-consulting"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Salesforce Agentforce Consulting
                    </Link>
                  </li>
                  <li className="px-4 py-2 border-b border-gray-800 hover:bg-gray-200">
                    <Link
                      href="/services/salesforce-consulting"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Salesforce Consulting
                    </Link>
                  </li>
                  <li className="px-4 py-2 border-b border-gray-800 hover:bg-gray-200">
                    <Link
                      href="/services/data-loss-prevention"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Generative AI Agents for Data Loss Prevention (DLP) in
                      Cybersecurity
                    </Link>
                  </li>
                  <li className="px-4 py-2 border-b border-gray-800 hover:bg-gray-200">
                    <Link
                      href="/services/ai-agent-developement-in-blockchain"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AI Agent Development in Blockchain
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/solutions"
                className="hover:text-brown-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/partnership"
                className="hover:text-brown-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Partnerships
              </Link>
            </li>

            <li>
              <button
                onClick={() => setIsMobileMenuOpen1(!isMobileMenuOpen1)}
                className="hover:text-blueColor w-full text-left"
              >
                Insights {isMobileMenuOpen1 ? "▲" : "▼"}
              </button>
              {isMobileMenuOpen1 && (
                <ul className="bg-gray-100 text-left py-0 rounded-md ml-4">
                  <li className="px-4 py-2 border-b border-gray-800 hover:bg-gray-200">
                    <Link
                      href="/case-studies"
                      onClick={() => setIsMobileMenuOpen1(false)}
                    >
                      Case Study
                    </Link>
                  </li>
                  <li className="px-4 py-2 border-b border-gray-800 hover:bg-gray-200">
                    <Link
                      href="/blog"
                      onClick={() => setIsMobileMenuOpen1(false)}
                    >
                      Blogs
                    </Link>
                  </li>
                  <li className="px-4 py-2 border-b border-gray-800 hover:bg-gray-200">
                    <Link
                      href="/podcast"
                      onClick={() => setIsMobileMenuOpen1(false)}
                    >
                      Podcast
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/career"
                className="hover:text-brown-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-brown-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
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
