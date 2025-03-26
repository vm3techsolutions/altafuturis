"use client";
import React from "react";

const partners = [
  {
    imgSrc: "/assets/Partnershipcard1.png",
    description:
      "We are utilizing various services under Azure Artificial Intelligence and Data Engineering to provide solutions for our clients under Microsoft for Startups program. Focused to provide solutions in Edge AI, Generative AI and Geo-spatial/ remote sensing AI for our clients.",
  },
  {
    imgSrc: "/assets/fotinetPartner.png",
    description:
      "As a Fortinet partner, we are fully-qualified to take care of your various data security use cases, including preventing data loss from exfiltration and accidental loss, monitoring for insider threats, securing data in SaaS applications, and educating users on proper data handling with the help from FortiDLP.  With FortiDLP, we can support and proactively monitor the integrity of your network constantly checking for potential threats and taking appropriate action to keep your network safe.",
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
            <div className="max-w-3xl flex-shrink-0 md:mr-12">
              <button className="text-xl px-5 py-3 border-2 border-brownColor rounded-full text-black  shadow-sm  transition-all duration-300 ease-in-out font-bold">
                Partnership
              </button>
            </div>

            {/* Right Side - Content */}
            <div className="max-w-4xl text-center md:text-left">
              <h1 className="md:mr-10 text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
                Highlighting our valued partners
              </h1>
            </div>
          </div>
        </section>
      </section>

      <section className="flex flex-row items-center justify-center px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="border-2 border-[#D4B301] rounded-xl shadow-lg overflow-hidden bg-gray-100 p-5"
            >
              <div className="flex justify-center items-center">
                <img
                  src={partner.imgSrc}
                  alt={partner.title}
                  className="w-auto h-48 bg-gray-100 p-5"
                />
              </div>
              <div className="px-5 -mt-5 text-center pb-5">
                <h2 className="text-xl font-semibold">{partner.title}</h2>
                <p className="text-base text-gray-600 mt-2">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}

          {/* Salesforce Partner Card */}
          <div className="border-2 border-[#D4B301] rounded-xl shadow-lg overflow-hidden bg-gray-100 p-5">
            <div className="flex justify-center items-center">
              <img
                src="/assets/Partnershipcard2.png"
                className="w-auto h-64 bg-gray-100 p-5"
              />
            </div>
            <div className="text-center p-5">
              <h2 className="text-xl font-semibold">Salesforce Partner</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
