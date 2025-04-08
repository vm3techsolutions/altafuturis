/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import {  FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
      <footer className=" text-gray-900 py-12 px-2 md:px-2 lg:px-16 shadow-[0px_-4px_6px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-4">
          {/* 1st Column: Logo and Content */}
          <div className="flex flex-col ml-2 md:ml-0">
            <Link href="/">
              <img
                src="/altra_logo.png"
                alt="Logo"
                width={120}
                height={20}
                className="object-contain ml-4"
              />
            </Link>
            <h6 className="text-md mt-2">
             
We provide innovative spectrum of Applied Artificial Intelligence, Data Engineering, Salesforce Development, Agentforce implementation, Blockchain Application Development, Data Loss Prevention using AI in Cybersurity services across the industry.

            </h6>
          </div>

          {/* 2nd Column: Quick Links */}
          <div className="flex flex-col lg:col-span-1 ml-2 lg:ml-12 md:ml-2">
            <h4 className="text-lg text-purpleColor font-bold">Quick Links</h4>
            <ul className="space-y-2 mt-4">
              <li>
                <Link href="/about" className="text-md hover:text-yellow-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-md hover:text-yellow-400"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/partnership"
                  className="text-md hover:text-yellow-400"
                >
                  Partnership
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-md hover:text-yellow-400"
                >
                  Case Study
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-md hover:text-yellow-400">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-md hover:text-yellow-400">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-md hover:text-yellow-400">
                  Privacy Policy
                </Link>
              </li>

              
              
              
            </ul>
          </div>

          {/* 3rd Column: Service Menu */}
          <div className="flex flex-col md:-ml-16">
            <h4 className="text-lg text-purpleColor font-bold">Our Services</h4>
            <ul className="space-y-2 mt-4">
            <li>
                <Link
                  href="/services/ai-coe-consulting"
                  className="text-md hover:text-yellow-400"
                >
                 AI COE consulting and development services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-app-dev"
                  className="text-md hover:text-yellow-400"
                >
                  Generative AI Application Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/salesforce-agentforce-consulting"
                  className="text-md hover:text-yellow-400"
                >
                  Salesforce Agentforce Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/salesforce-consulting"
                  className="text-md hover:text-yellow-400"
                >
                  Salesforce Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/data-loss-prevention"
                  className="text-md hover:text-yellow-400"
                >
                  DLP in Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-agent-developement-in-blockchain"
                  className="text-md hover:text-yellow-400"
                >
                  AI Agent Development in Blockchain
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th Column: Contact Us */}
          <div className="flex flex-col w-35">
            <h4 className="text-lg text-purpleColor font-bold">Contact Us</h4>

            <h6 className="text-md mt-4 flex items-center">
              <Mail className="w-4 h-4 text-purpleColor mr-2" />
              <a
                href="mailto:sales@altafuturis.com"
                className=" hover:text-yellow-400"
              >
                sales@altafuturis.com
              </a>
            </h6>

            <h6 className="text-md mt-2 flex items-center">
              <Phone className="w-4 h-4 text-purpleColor mr-2" />
              <a href="tel:+919764694844" className="hover:text-yellow-400">
                +91 97646 94844
              </a>
            </h6>

            <h6 className="text-md mt-2 flex items-center">
              <MapPin className="w-12 h-12 lg:w-7 lg:h-7 md:w-6 md:h-6 text-purpleColor mr-2" />
              1 Elizabeth ln, West Bridgewater,MA 02379, USA
            </h6>

            <h6 className="text-md mt-2 flex items-center">
              <MapPin className="w-16 h-16 lg:w-9 lg:h-9 md:w-9 md:h-9 text-purpleColor mr-2" />
              301, Anish, LMD Square, Bavdhan, Pune, Maharashtra 411023 INDIA
            </h6>
         

            <div className="flex flex-row justify- ml-5 items-start space-x-4 mt-4 ">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
               
                <FaXTwitter className="text-blue-400 text-xl hover:text-blue-600 transition duration-300" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
               
                <FaLinkedin className="text-blue-700 text-xl hover:text-blue-900 transition duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
      </footer>
      <div className="bg-gray-900 text-white py-2 px-2 md:px-2 lg:px-16">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Side: Copyright */}
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Copyright. Alta-Futuris
          </div>

          {/* Right Side: Developed By */}
          <div className="text-sm">
            Designed & Developed by{" "}
            <a
              href="http://vm3techsolution.com/"
              className="hover:text-yellow-400"
            >
              VM3 Tech Solutions LLP
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
