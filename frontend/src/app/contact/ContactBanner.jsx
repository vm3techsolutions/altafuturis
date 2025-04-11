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
      className="relative w-full mt-20 h-[30vh] sm:h-[34vh] md:mt-22 lg:mt-32 md:h-[44vh] lg:h-[40vh] xl:h-[55vh] 2xl:h-[65vh] bg-cover bg-center flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image */}
      <Image
        src="/assets/ContactBanner2.png"
        alt="contact Banner"
        width={1400}
        height={500}
        className="w-full h-full object-cover object-right"
        loading="lazy"
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
