"use client";

import { useState, useEffect } from 'react';

const testimonials = [
  {
    heading: "Exceptional Commitment to Salesforce Custom Development",
    text: "Navigating through complex technical development challenges can be tough, but the Salesforce Consulting Team at Alta-Futuris Solutions has consistently delivered top-notch contributions. Their relentless effort and dedication have made a remarkable impact on our long-term project. Hats off to the team for their outstanding performance!",
    
    title: "Director, Spring Education Group, California, USA"
  },
  {
    heading: "Outstanding NLP Development Support for Healthcare",
    text: "We are highly impressed with the NLP (Natural Language Processing) development support provided by Alta-Futuris Solutions. Their expertise significantly contributed to our research and development segment, especially in the Healthcare sector for Dentistry. Given the complex compliance and privacy constraints, the team did an excellent job in designing and defining AI algorithms that adhere to all necessary regulations. This level of precision and expertise added immense value to our project. Thank you for your incredible support!",
   
    title: " Program Head, Dental Association of a Midwest State, USA"
  },
  // {
  //   heading: "Exceptional Commitment to Salesforce Custom Development",
  //   text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is ",
  //   name: "",
  //   title: "Manager - DEF"
  // }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % testimonials.length);
    }, 3000); // Increased delay for better readability
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative py-5 px-5 sm:px-10 md:px-20 lg:px-40 ">
      <h2 className="text-[7vh] sm:text-[16vh] md:text-[22vh] lg:text-[34vh] text-purple-200 absolute font-extrabold opacity-50 top-0 left-0 w-full text-center -mt-12 md:-mt-32 lg:-mt-40 2xl:-mt-48 sm:-mt-20">Testimonials</h2>

      <div className="flex justify-center mb-8 mt-10 sm:mt-20 md:mt-24 lg:mt-26">
        <h4 className="text-xl px-4 py-2 border-2 border-brownColor rounded-full text-black shadow-sm transition-all duration-300 ease-in-out font-bold">
          Hear from our customers
        </h4>
      </div>

      <div className="mt-12 text-center">
      <h1 className="text-8xl font-bold text-gray-800 mb- px-4 "> “</h1>
      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-black opacity-75">{testimonials[current].heading}</p>
        <p className="text-lg sm:text-xl md:text-xl lg:text-2xl font-medium text-gray-800 mb-4 px-4 sm:px-10 mt-5">{testimonials[current].text}</p>
        
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#6328A6] opacity-75">{testimonials[current].title}</p>
      </div>

      <div className="flex justify-center mt-10">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${index === current ? 'bg-[#D4B301]' : 'bg-gray-300'}`}
          ></span>
        ))}
      </div>
    </div>
  );
}
