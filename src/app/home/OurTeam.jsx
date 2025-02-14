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
    <section className="py-12 bg-[#FAF7E6]">
      {/* Section Header */}
      <div className="flex justify-center items-center py-8 mb-4 px-6">
        <div className="flex-shrink-0 md:mr-12">
          <button className="px-3 py-1 border-2 border-brownColor rounded-full text-black shadow-sm hover:bg-brownColor transition-all duration-300 ease-in-out font-bold">
            Our Team
          </button>
        </div>
        <div>
          <h2 className="text-start text-2xl lg:text-4xl font-bold text-gray-900 leading-snug">
            Passionate Minds, <br /> Extraordinary Results!
          </h2>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6">
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
                className="text-blueColor text-2xl p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
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
