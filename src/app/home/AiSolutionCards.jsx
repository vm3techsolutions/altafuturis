"use client";
import { motion } from "framer-motion";


const services = [
  {
    title: "AI Solutions and Services",
    description:
      "Commit to new frontiers of growth & supporting long-term digital transformation with AI services.",
    icon: "/assets/h1c1.png",
  },
  {
    title: "Data Engineering",
    description:
      "Analysts and data scientists of large enterprises usually spend over 70% of their time in data processing.",
    icon: "/assets/h1c2.png",
  },
  {
    title: "Salesforce Development",
    description:
      "As registered Salesforce Consulting Partner, Salesforce CRM technical experts at Alta-Futuris.",
    icon: "/assets/h1c3.png",
  },
];

export default function ServicesSection() {
  return (
    <section className=" py-16 px-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Service Cards */}
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -25 }} // Move up on hover
            transition={{ duration: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-lg text-center flex flex-col items-center hover:shadow-xl transition-all"
          >
            <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 text-left">{service.title}</h3>
            <p className="text-gray-600 mt-2 text-sm text-left">{service.description}</p>
            <button className="mt-8 mr-9 px-4 py-2 font-semibold text-black rounded-xl hover:border-yellow-200 hover:border-2 transition-all ">
              Know More <span className="bg-[#D4B301] rounded-lg px-1 text-white pb-1 content-center justify-center"> &gt;&gt;</span>
            </button>
          </motion.div>
        ))}

        {/* Right-Side Card */}
        <motion.div
          whileHover={{ y: -25 }}
          transition={{ duration: 0.1 }}
          className="bg-[#D4B301] p-6 rounded-xl text-center flex flex-col items-center text-black shadow-lg hover:shadow-xl transition-all"
        >
          <h3 className="text-2xl text-start  font-bold">Need Advice? <h3 className="mt-2  font-bold">Book a call-back!</h3></h3>
          
          <img src="/assets/h1c4.png" alt="Consultant" className="w-44 h-44 my-9 " />
         
        </motion.div>
       
      </div>

      <a href="/" className="flex justify-end p-5 mr-11 md:mr-16">
              <button className="px-4 py-2 bg-[#0D6EFD] text-white  rounded-2xl shadow-md hover:bg-blue-700 flex items-center transition-all duration-300 ease-in-out">
                Book Call
                <span className="ml-2 bg-[#D4B301] text-white px-2 py-1 rounded-md">
                  &gt;&gt;
                </span>
              </button>
            </a>
    </section>
  );
}
