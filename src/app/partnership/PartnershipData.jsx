"use client";
import React from "react";

const partners = [
  {
    imgSrc: "/assets/Partnershipcard1.png",
    description:"We are utilizing various services under Azure Artificial Intelligence and Data Engineering to provide solutions for our clients under Microsoft for Startups program. Focused to provide solutions in Edge AI, Generative AI and Geo-spatial/ remote sensing AI for our clients.",
  }
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

      <div className="grid grid-col md:grid-row gap-16 justify-center items-center p-6 md:ml-36 2xl:ml-36">
      {partners.map((partner, index) => (
        <div
          key={index}
           className="md:w-[100vh] md:h-80 border-2 border-[#D4B301] rounded-xl shadow-lg overflow-hidden 
              bg-gradient-to-b from-gray-100 via-gray-100 via-60% to-blue-500"
        >
          <img
  src={partner.imgSrc}
  alt={partner.title}
  className="w-auto h-48 bg-gray-100 p-10 mx-auto flex justify-center items-center "
/>

          <div className="px-5 -mt-5 text-center pb-5">
            <h2 className="text-xl font-semibold ">{partner.title}</h2>
            <p className="text-base text-gray-600 mt-2">{partner.description}</p>
          </div>
        </div>
      ))}


<div  className="md:w-[100vh] md:h-80 border-2 border-[#D4B301] rounded-xl shadow-lg overflow-hidden bg-gray-100" >
          <img  src="/assets/Partnershipcard2.png"  
           className="w-auto h-64 bg-gray-100 p-10 mx-auto flex justify-center items-center "/>

          <div className=" text-center p-5 md:p-0">
            <h2 className="text-xl font-semibold ">Salesforce Partner</h2>           
          </div>
        </div>
    </div>



     
    </>
  );
};

export default Team;
