"use client";

import React from "react";

const PortfolioSection = () => {
  return (
    <section className="container flex items-center justify-between pt-16  ">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col justify-between md:flex-row items-center w-full">
        {/* Left Side */}
        

        <div className="md:w-1/3 w-full flex justify-center md:justify-start mb-4 md:mb-0 mt-10 md:mt-0">
          <heading className="text-xl px-5 py-3 border-2 border-brownColor rounded-full text-black  shadow-sm  transition-all duration-300 ease-in-out font-bold">
            Reach Out
          </heading>
        </div>

        {/* Right Side */}
        <div className="max-w-3xl w-full text-center md:text-left ">
          <h2 className="text-3xl md:text-5xl font-bold text-black  leading-tight">
          Any queries regarding services we offer
          </h2>
        </div>
      </div>
      

    </section>
  );
};

export default PortfolioSection;
