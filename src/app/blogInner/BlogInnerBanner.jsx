"use client";
import Image from "next/image";
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
      className="relative w-full h-[30vh] md:h-[95vh] lg:h-[95vh] bg-cover bg-center flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image */}
      <Image
        src="/assets/BloginnerBanner.png"
        alt="Home Banner"
        layout="fill"
        className="object-cover object-center"
        priority
      />

      {/* Light Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-90 pointer-events-none"
        style={{
          left: mouseX - 100,
          top: mouseY - 100,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 90%)",
        }}
        animate={{ x: mouseX - 100, y: mouseY - 100 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      />



     
    </div>
  );
}
