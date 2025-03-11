"use client";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Ganesh Shevade",
    designation: "Co-Founder & CEO",
    image: "/assets/ceo.png",
    linkedin: "https://www.linkedin.com/in/ganeshshevade/",
  },
  {
    name: "Mahesh Mutalik",
    designation: "Co-Founder",
    image: "/assets/coFounder.png",
    linkedin: "https://www.linkedin.com/in/mahesh-mutalik-9a06a69/",
  },
  {
    name: "Shweta Pawar",
    designation: "Agents, LLMs & GenAI Expert",
    image: "/assets/ShwetaPawarimg.jpeg",
    linkedin: "https://www.linkedin.com/in/aishweta/",
  },
  {
    name: "Pratiksha Shevade",
    designation: "Solution Architect - Salesforce",
    image: "/assets/sales.png",
    linkedin: "https://www.linkedin.com/in/pratiksha-shevade-2669458/",
  },
];

const Team = () => {
  return (
  <>
    {/* Section Header */}
    <section className="relative flex items-center justify-center pt-12">
      <section className="container flex items-center justify-center md:mt-0">

        <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start lg:items-start justify-between w-full space-y-8 md:space-y-0">
          {/* Left Side - Button */}
          <div className="max-w-4xl flex-shrink-0 md:mr-12">
            <button className="text-xl px-5 py-3 border-2 border-brownColor rounded-full text-black  shadow-sm  transition-all duration-300 ease-in-out font-bold">
            Partnership
            </button>
          </div>
  
          {/* Right Side - Content */}
          <div className="max-w-4xl text-center md:text-left">
            <h1 className="md:mr-10 text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Highlighting our valued partners</h1>
            
          </div>
        </div>
      </section>
      </section>



     
    </>
  );
};

export default Team;
