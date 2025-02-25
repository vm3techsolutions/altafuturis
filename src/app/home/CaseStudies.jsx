'use client';

import Image from 'next/image';
import { motion } from "framer-motion"; // Import motion for animation

const PortfolioSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center -mt-5">
      {/* Left Section */}
      <div className="md:w-1/3 flex flex-col items-center md:items-start h-full relative">

        {/* Animated Circular Image */}
        <motion.div
          className="absolute"
          animate={{
            y: [-500, 210], // Moves from top to bottom
            rotate: [0, 360] // Rotates in every angle
          }}
          transition={{
            duration: 20, // Slower speed (increase for even slower movement)
            repeat: Infinity, // Infinite loop
            repeatType: "reverse", // Moves back up after reaching bottom
            ease: "linear" // Smooth motion
          }}
        >
          <Image src="/assets/animateCicle.png" width={446} height={196} alt="Circular Animation" className="-ml-32" />
        </motion.div>

      </div>

      {/* Right Section */}
      <div className="md:w-2/3 space-y-6 p-20">

        {/* Portfolio Items */}
        <div className="space-y-4">
          <div className="pb-4">
            <Image src="/assets/Portfolio1.png" width={600} height={150} alt="CloudSense" className="rounded-lg" />
            <h3 className="font-bold text-2xl grid">CloudSense Implementation Consultancy for Leading Media House in USA</h3>
            <a href="#" className="text-purpleColor text-sm font-semibold">READ MORE &gt;&gt;</a>
          </div>
          <hr className="border-[#D4B301] border" />

          <section className="flex items-center justify-center">
            <div className="max-w-5xl flex flex-col md:flex-row items-center w-full gap-5">
              <Image src="/assets/Portfolio2.png" width={370} height={150} alt="Salesforce Development" className="rounded-lg" />
              <div className="grid grid-cols">
                <h3 className="font-bold text-2xl pr-16">Salesforce Development for Leading K-12 School Chain in USA</h3>
                <button className="flex pt-3">
                  <a href="#" className="text-purpleColor text-sm font-bold">READ MORE &gt;&gt;</a>
                </button>
              </div>
            </div>
          </section>
          <hr className="border-[#D4B301] border -mt-5 w-" />

          <section className="flex items-center justify-center">
            <div className="max-w-5xl flex flex-col md:flex-row items-center w-full gap-5 ">
              <Image src="/assets/Portfolio3.png" width={455} height={150} alt="Salesforce Development" className="rounded-lg " />
              <div className="grid grid-cols">
                <h3 className="font-bold text-2xl pr-9">Research on Clustering of Devanagari Script Based Documents Containing Img</h3>
                <button className="flex pt-3">
                  <a href="#" className="text-purpleColor text-sm font-bold">READ MORE &gt;&gt;</a>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
