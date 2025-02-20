"use client";

import React from "react";

const PortfolioSection = () => {
  return (
    <section className="flex items-center justify-center   md:ml-20 pt-16  ">
      <div className="max-w-5xl flex flex-col md:flex-row items-center w-full">
        {/* Left Side */}
        

        <div className="md:w-1/3 w-full flex justify-center md:justify-start mb-4 md:mb-0">
          <button className="px-4 py-2 border-2 border-brownColor rounded-full text-black  shadow-sm  transition-all duration-300 ease-in-out font-bold">
            Case Studies
          </button>
        </div>

        {/* Right Side */}
        <div className="md:w-2/3 w-full text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-black  leading-tight">
            Our portfolio of <br />
            proven solutions!
          </h2>
        </div>
      </div>
      

    </section>
  );
};

export default PortfolioSection;
