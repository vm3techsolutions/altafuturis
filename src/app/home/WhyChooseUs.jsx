"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

export default function WhyChooseUs() {
  // Track mouse position
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform values to position blur circle at the tip of the cursor
  const xTransform = useTransform(mouseX, (x) => x - 10);
  const yTransform = useTransform(mouseY, (y) => y - 10);

  const handleMouseMove = (event) => {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  };

  return (
    <section className="py-6 px-6 md:px-12 lg:px-24 relative">
      {/* Glowing Blur Circle (Now at cursor tip) */}
      <motion.div
        className={`absolute w-20 h-20 bg-purple-500 opacity-40 rounded-full pointer-events-none transition-opacity duration-300 ${
          hoveredIndex !== null ? "opacity-70" : "opacity-0"
        }`}
        style={{
          x: xTransform,
          y: yTransform,
          filter: "blur(20px)", // Adjusted for brightness
        }}
      />

      <div className="flex justify-center items-center py-6 px-6">
        <div className="flex-shrink-0 md:mr-12">
          <button className="px-3 py-1 border-2 border-brownColor rounded-full text-black shadow-sm  transition-all duration-300 ease-in-out font-bold">
            Why choose us?
          </button>
        </div>
        <div>
          <h2 className="text-start text-2xl lg:text-4xl font-bold text-gray-900 leading-snug">
            Accelerate business growth <br /> in emerging technologies
          </h2>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
        {/* Left Section (Image + Button) */}
        <div className="relative flex flex-col items-center">
          <img
            src="/assets/WhyChooseUs.png"
            alt="Team Meeting"
            className="rounded-lg shadow-lg w-[30vw] h-[75vh] object-cover"
          />

          <a href="/" className="flex justify-start mt-6 mr-11 md:mr-16">
            <button className="px-4 py-2 bg-blueColor text-white rounded-xl shadow-md hover:bg-brownColor flex items-center transition-all duration-300 ease-in-out group">
              Know More
              <span className="ml-2 bg-brownColor group-hover:bg-blueColor text-white px-1 rounded-md duration-300">
                &gt;&gt;
              </span>
            </button>
          </a>
        </div>

        {/* Right Section (Text + List) */}
        <motion.div
          className="mt-0 space-y-10 p-2 relative"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { id: "01", text: "Partnering with client" },
            { id: "02", text: "Research Driven" },
            { id: "03", text: "Highly focused on delivering outcome on daily basis" },
            { id: "04", text: "Providing highest quality output and high level of business satisfaction." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative grid items-start gap-2 p-3 rounded-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onMouseMove={handleMouseMove}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="w-10 text-xl font-bold text-[#6328A6] px-2 py-1 rounded-lg border border-brownColor"
                animate={{
                  borderColor: hoveredIndex === index ? "#ff9900" : "#6328A6",
                  boxShadow:
                    hoveredIndex === index
                      ? "0px 0px 15px rgba(255, 153, 0, 0.7)"
                      : "none",
                }}
                transition={{ duration: 0.3 }}
              >
                {item.id}
              </motion.span>
              <p className="text-gray-800 text-xl font-bold">{item.text}</p>
              {/* Horizontal Line */}
              <hr className="border-t-1 border-brownColor" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
