"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function HomeBanner() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  return (
    <div
      className="relative w-full mt-20 h-[50vh] md:mt-32 lg:mt-32 md:h-[30vh] lg:h-[40vh] xl:h-[55vh] 2xl:h-[65vh] bg-cover bg-center flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image */}
      <Image
        src="/assets/HomeBanner3.png"
        alt="Home Banner"
        width={1400}
        height={500}
        className="absolute inset-0 w-full h-full object-auto object-center"
        loading="lazy"
      />

      {/* Light Effect */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: mouseX - 100,
          top: mouseY - 100,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 90%)",
        }}
        animate={{ x: mouseX - 100, y: mouseY - 100 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      />

      {/* Text Content (Centered Over Image) */}
      <div className="absolute inset-0 flex items-center justify-start text-white text-center px-5">
        {/* <h1 className="font-bold md:text-4xl lg:text-5xl max-w-3xl">
          Bringing future automation vision of Enterprises in the current world
          with AI Agents
        </h1> */}
      </div>
    </div>
  );
}
