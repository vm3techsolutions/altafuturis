"use client";

import React from "react";

const PortfolioSection = () => {
  return (
    <section className="container flex items-center justify-between   md:ml- pt-16  ">
      <div className="max-w-7xl flex flex-col justify-between md:flex-row items-center w-full">
        {/* Left Side */}
        

        <div className="md:w-1/3 w-full flex justify-center md:justify-start mb-4 md:mb-0">
          <button className="px-5 py-3 border-2 border-brownColor rounded-full text-black  shadow-sm  transition-all duration-300 ease-in-out font-bold">
            Case Studies
          </button>
        </div>

        {/* Right Side */}
        <div className="max-w-4xl w-full text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-black  leading-tight">
            Our portfolio of 
            proven solutions!
          </h2>
        </div>
      </div>
      

    </section>
  );
};

export default PortfolioSection;
