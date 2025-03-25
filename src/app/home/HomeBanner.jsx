"use client";
import { motion } from "framer-motion";
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
      className="relative w-full h-[70vh] md:h-[95vh] lg:h-[95vh] bg-cover bg-center flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image */}
      <img
        src="/assets/HomeBanner2.png"
        alt="Home Banner"
        className="absolute inset-0 w-full h-full object-cover object-center"
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
        <h1 className="font-bold md:text-4xl lg:text-5xl max-w-3xl">
          Bringing future automation vision of Enterprises in the current world
          with AI Agents
        </h1>
      </div>
    </div>
  );
}
