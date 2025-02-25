"use client";

import { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is ",
    name: "Lorem Ipsum",
    title: "CEO - ABC"
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is ",
    name: "John Doe",
    title: "Founder - XYZ"
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is ",
    name: "Jane Smith",
    title: "Manager - DEF"
  }
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
    <div className="relative py-5  px-5 sm:px-10 md:px-20 lg:px-40">
      <h2 className="text-[7vh] md:text-[35vh] text-purple-200 absolute font-extrabold opacity-50 top-0 left-0 w-full text-center -mt-18 md:-mt-48 sm:-mt-36">Testimonials</h2>

      <div className="flex justify-center mb-8 mt-28">
        <button className="px-4 py-2 border-2 border-brownColor rounded-full text-black shadow-sm transition-all duration-300 ease-in-out font-bold">
          Hear from our customers
        </button>
      </div>

      <div className="mt-12 text-center">
      <h1 className="text-8xl font-bold text-gray-800 mb- px-4 "> “</h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 px-4 sm:px-10">{testimonials[current].text}</p>
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#6328A6] opacity-75">{testimonials[current].name}</p>
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
