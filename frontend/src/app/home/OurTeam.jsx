"use client";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Ganesh Shevade",
    designation: "Co-Founder & CEO",
    image: "/assets/ceo.jpg",
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
    image: "/assets/shwetaPawar.jpg",
    linkedin: "https://www.linkedin.com/in/aishweta/",
  },
  {
    name: "Pratiksha Shevade",
    designation: "Solution Architect - Salesforce",
    image: "/assets/sales.jpg",
    linkedin: "https://www.linkedin.com/in/pratiksha-shevade-2669458/",
  },
];

const OurTeam = () => {
  return (
  <>
    {/* Section Header */}
    <section className="relative flex items-center justify-center bg-[#f7f4fb] pt-14">
      <section className="container flex items-center justify-center md:mt-0">

        <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full space-y-8 md:space-y-0">
          {/* Left Side - Button */}
          <div className="max-w-4xl flex-shrink-0 md:mr-12">
            <heading className="text-xl px-5 py-3 md:mb-10 border-2 border-brownColor rounded-full text-black  shadow-sm  transition-all duration-300 ease-in-out font-bold">
            Our Team
            </heading>
          </div>
  
          {/* Right Side - Content */}
          <div className="max-w-4xl text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Passionate Minds, Extraordinary Results!            </h1>
            
          </div>
        </div>
      </section>
      </section>



        {/* Team Grid */}
        <section className="relative flex items-center justify-center bg-[#f7f4fb] ">
    <section className="container flex items-center justify-center md:mt-0  py-12 pb-40 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 px-6 md:px-2 py-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group border-[.2rem] border-brownColor rounded-2xl transform transition-transform duration-300 hover:translate-y-[-20px]"
          >
            {/* Team Member Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[40vh] object-cover rounded-xl shadow-lg"
            />

            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/50 via-[#FAF7E6] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg flex flex-col justify-center items-center">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl p-3 bg-blue-600 rounded-full"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* Name & Designation */}
            <div className="absolute bottom-0 left-0 w-full text-white text-center py-2 rounded-b-lg ">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm">{member.designation}</p>
            </div>
          </div>
        ))}
      </div>
      </section>

    </section>
    </>
  );
};

export default OurTeam;
