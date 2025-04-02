"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/navigation"; // Import router

const PortfolioSection = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const router = useRouter(); // Initialize router

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/case_study?_embed`);
        const data = response.data.slice(0, 3).map((study) => ({
          slug: study.slug, // Use slug instead of id
          title: study.title.rendered,
          image_url: study._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/assets/placeholder.png",
        }));
        setCaseStudies(data);
      } catch (error) {
        console.error("Error fetching case studies:", error);
      }
    };

    fetchCaseStudies();
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center -mt-5">
      {/* Left Section */}
      <div className="md:w-1/3 lg:w-1/3 flex flex-col items-center md:items-start h-full relative">
        <motion.div
          className="absolute"
          animate={{
            y: [-600, 210],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <img src="/assets/animateCicle.png" width={420} height={180} alt="Circular Animation" className="-ml-32" />
        </motion.div>
      </div>

      {/* Right Section */}
      <div className="md:w-2/3 space-y-6 py-12 px-6">
        <div className="space-y-4 md:-ml-32 2xl:-ml-5">
          {caseStudies.map((study, index) => (
            <div key={study.slug} className="pb-4">
              {index === 0 ? (
                <>
                  {/* First case study - Title below image */}
                  <Image src={study.image_url} width={1000} height={120} alt="Case Study Image" className="rounded-lg" />
                  <h3 className="font-bold text-xl md:text-3xl pt-4 text-left" dangerouslySetInnerHTML={{ __html: study.title }} />
                  <button
                    onClick={() => router.push(`/case-studies/${study.slug}`)}
                    className="text-purpleColor text-sm font-semibold block text-left hover:text-brownColor"
                  >
                    READ MORE &gt;&gt;
                  </button>
                </>
              ) : (
                <div className="flex items-center space-x-6">
                  {/* Image */}
                  <Image src={study.image_url} width={500} height={150} alt="Case Study Image" className="rounded-lg" />
                  {/* Title & Read More beside the image */}
                  <div>
                    <h3 className="font-bold text-2xl md:text-3xl" dangerouslySetInnerHTML={{ __html: study.title }} />
                    <button
                      onClick={() => router.push(`/case-studies/${study.slug}`)}
                      className="text-purpleColor text-sm font-semibold hover:text-brownColor"
                    >
                      READ MORE &gt;&gt;
                    </button>
                  </div>
                </div>
              )}
              {/* Horizontal Line */}
              {index !== caseStudies.length - 1 && <hr className="border-[#D4B301] border mt-4" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
