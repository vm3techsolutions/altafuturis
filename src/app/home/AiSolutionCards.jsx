"use client";
import { motion } from "framer-motion";


const services = [
  {
    title: "Generative AI Application Development",
    description:
      "Commit to new frontiers of growth & supporting long-term digital transformation with AI services.",
    icon: "/assets/h1c1.png",
  },
  {
    title: "Salesforce Agentforce Consulting",
    description:
      "Commit to new frontiers of growth & supporting long-term digital transformation with AI services.",
    icon: "/assets/h1c1.png",
  },
  {
    title: "Salesforce Consulting",
    description:
      "Commit to new frontiers of growth & supporting long-term digital transformation with AI services.",
    icon: "/assets/h1c1.png",
  },
  {
    title: "Generative AI based AI Agents for data loss prevention (DLP) in Cybersecurity ",
    description:
      "Analysts and data scientists of large enterprises usually spend over 70% of their time in data processing.",
    icon: "/assets/h1c2.png",
  },
  {
    title: "AI Agent development in Blockchain",
    description:
      "As registered Salesforce Consulting Partner, Salesforce CRM technical experts at Alta-Futuris.",
    icon: "/assets/h1c3.png",
  },
];

export default function ServicesSection() {
  return (
    <section className=" py-5 md:mt-0 -mt-32 px- space-y-8">

<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between w-full space-y-8 md:space-y-0 ">
          {/* Left Side - Button */}
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-12 ml-16">
    <button className="px-4 py-2 border-2 border-brownColor rounded-full text-black shadow-sm transition-all duration-300 ease-in-out font-bold">
      Our Services
    </button>
  </div>
  <div className="text-center sm:text-left">
    <h2 className="text-3xl ml-32 sm:text-3xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-snug">
    Helping Enterprises to utilize our various Service(s) as a Software     in their Business Transformation journey
    </h2>
  </div>
</div>



<div className=" py-5 flex flex-wrap justify- gap-3  ml-3 px-6">
  {/* Service Cards */}
  {services.map((service, index) => (
    <motion.div
      key={index}
      whileHover={{ y: -20 }} // Move up on hover
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-lg text-center flex flex-col items-center hover:shadow-xl transition-all w-full md:w-[48%] lg:w-[19%]"
    >
      <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />
      <h3 className="text-2xl font-bold text-gray-900 text-left">{service.title}</h3>
      <p className="text-gray-600 mt-2 text-sm text-left">{service.description}</p>
      <button className="mt-8 mr-12 py-2 font-semibold text-black rounded-xl hover:text-brownColor transition-all group ">
        Know More 
        <span className="bg-brownColor group-hover:bg-blueColor rounded-lg px-1 text-white pb-1 mx-2 duration-500">
          &gt;&gt;
        </span>
      </button>
    </motion.div>
  ))}

  {/* Right-Side Card */}
  {/* Uncomment if needed */}
  {/* 
  <motion.div
    whileHover={{ y: -25 }}
    transition={{ duration: 0.1 }}
    className="bg-[#D4B301] p-6 rounded-xl text-center flex flex-col items-center text-black shadow-lg hover:shadow-xl transition-all w-full md:w-[48%] lg:w-[19%]"
  >
    <h3 className="text-2xl text-start font-bold">Need Advice? <h3 className="mt-2 font-bold">Book a call-back!</h3></h3>
    <img src="/assets/h1c4.png" alt="Consultant" className="w-44 h-44 my-9" />
  </motion.div>
  */}
</div>


      <a href="/" className="flex justify-end p-5 mr-11 md:mr-16">
              <button className="px-4 py-2 bg-blueColor text-white  rounded-xl shadow-md hover:bg-brownColor flex items-center transition-all duration-300 ease-in-out group">
                Book Call
                <span className="ml-2 bg-brownColor group-hover:bg-blueColor text-white px-1 rounded-md duration-300">
                  &gt;&gt;
                </span>
              </button>
            </a>
    </section>
  );
}
