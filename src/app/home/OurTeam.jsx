"use client";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Ganesh Shevade",
    designation: "Co-Founder & CEO",
    image: "/assets/ceo.png",
    linkedin: "https://linkedin.com/in/johndoe",
  },
  {
    name: "Mahesh Mutalik",
    designation: "Co-Founder",
    image: "/assets/coFounder.png",
    linkedin: "https://linkedin.com/in/janesmith",
  },
  {
    name: "Rahul Kulhalli",
    designation: "AI & Data Eng Architect",
    image: "/assets/architect.png",
    linkedin: "https://linkedin.com/in/davidlee",
  },
  {
    name: "Pratiksha Shevade",
    designation: "Solution Architect - Salesforce",
    image: "/assets/sales.png",
    linkedin: "https://linkedin.com/in/sarahbrown",
  },
];

const OurTeam = () => {
  return (
    <section className="container py-12 pb-40 bg-[#f7f4fb]">
      {/* Section Header */}

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center py-6">
        <div className="max-w-4xl flex-shrink-0 mb-4 sm:mb-0 sm:mr-12">
          <button className="px-4 py-2 border-2 md:mr-44 border-brownColor rounded-full text-black shadow-sm transition-all duration-300 ease-in-out font-bold">
            Our Team
          </button>
        </div>
        <div className="max-w-4xl text-center sm:text-left">
          <h2 className="text-2xl md:mr-32 sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
            Passionate Minds, Extraordinary
            Results!
          </h2>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 py-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group transform transition-transform duration-300 hover:translate-y-[-20px]"
          >
            {/* Team Member Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[40vh] object-cover rounded-lg shadow-lg"
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
  );
};

export default OurTeam;
