"use client";
import { motion } from "framer-motion";


const services = [
  {
    title: "Generative AI Application Development",
    description:
      "We firmly believe that the cloud serves as the business enabler, data acts as the business driver – & Generative AI will become the ultimate business differentiator.",
    icon: "/assets/Generative-AI.png",
    link: "/services/ai-app-dev",
  },
  {
    title: "Salesforce Agentforce Consulting",
    description:
      "We provides expert consulting to customize Agentforce, helping you achieve your unique business goals by leveraging our AI expertise.",
    icon: "/assets/Salesforce-Agentforce3.png",
    link: "/services/salesforce-agentforce-consulting",
  },
  {
    title: "Salesforce Consulting",
    description:
      "Salesforce CRM technical experts at Alta-Futuris are extremely skilled and can help you in analysing your business needs and identifying potential areas for improvement in performance and productivity. ",
    icon: "/assets/Salesforce-Consulting3.png",
    link: "/services/salesforce-consulting",
  },
  {
    title:
      "Generative AI Agents for data loss prevention (DLP) in Cybersecurity ",
    description:
      "We helps organizations comply with regulations & maintain the security of their data. ",
    icon: "/assets/Cybersecuirity.png",
    link: "/services/data-loss-prevention",
  },
  {
    title: "AI Agent development in Blockchain",
    description:
      "The integration of AI with blockchain opens up a new world of possibilities, allowing blockchain systems to become more efficient, scalable, and intelligent.",
    icon: "/assets/AI-Agents.png",
    link: "/services/ai-agent-developement-in-blockchain",
  },
];

export default function ServicesSection() {
  return (
  <>
  {/* Heading Section */}
  <section className="flex items-center justify-center pt-12">
  <section className="container flex items-center justify-center md:mt-0 -mt-52">

    <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between w-full space-y-8 md:space-y-0">
          {/* Left Side - Button */}
          <div className="max-w-4xl flex-shrink-0 md:mr-12 ml-32 md:ml-0 mt-28 md:mt-0">
            <heading className="px-5 py-3 text-xl border-2 border-brownColor rounded-full text-black  shadow-sm  transition-all duration-300 ease-in-out font-bold">
            Our Services
            </heading>
          </div>
  
          {/* Right Side - Content */}
          <div className="max-w-4xl text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Helping Enterprises to utilize our various Service(s) as a Software
            in their Business Transformation journey
            </h1>
            
          </div>
    </div>
  </section>
  </section>

      {/* Card Section */}
      <section className="flex items-center justify-center mt-24  md:mt-0">

    <section className="  py-5 md:mt-0 -mt-32 space-y-8">
      
      <div className=" py-4 flex flex-wrap justify-center gap-4 px-4 md:gap-3 md:px-2">
        {/* Service Cards */}
        {services.map((service, index) => (
  <motion.div
    key={index}
    whileHover={{ y: -20 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-5 rounded-xl shadow-lg flex flex-col items-start hover:shadow-xl transition-all w-full md:w-[48%] lg:w-[19%] min-h-[300px]"
  >
    <img
      src={service.icon}
      alt={service.title}
      className="w-16 h-16 mb-4"
    />
    <h3 className="font-bold text-2xl md:text-xl text-left">
      {service.title}
    </h3>
    <p className="text-gray-900 text-md mt-2 text-left flex-grow">
      {service.description}
    </p>
    <div className="mt-auto ">
      <a href={service.link} className="mt-auto">
        <button className="mt-8 py-2 font-semibold text-black rounded-xl hover:text-brownColor transition-all group">
          Know More
          <span className="bg-brownColor group-hover:bg-blueColor rounded-lg px-1 text-white pb-1 mx-2 duration-500">
            &gt;&gt;
          </span>
        </button>
      </a>
    </div>
  </motion.div>
))}

</div>


<a href="/contact" className="flex justify-center mb-4-7">
<button className="mt-8 mb-4 px-4 py-2 bg-blueColor text-white  rounded-xl shadow-md hover:bg-brownColor flex items-center transition-all duration-300 ease-in-out group">
          Talk to an Expert
          <span className="ml-2 bg-brownColor group-hover:bg-blueColor text-white px-1 rounded-md duration-300">
            &gt;&gt;
          </span>
        </button>
</a>

    </section>
    </section>
    </>
  );
}
