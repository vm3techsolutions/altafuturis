"use client"
import { useRef, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence, useInView } from "framer-motion";

const aiAgentServices = [
  {
    title: "AI Agent Consultation",
    content:
      "Defining the scope, goals, and roadmap for AI agent development.",
  },
  {
    title: "Custom AI Agent Development",
    content:
      "Designing AI agents tailored to your industry and business needs.",
  },
  {
    title: "AI Agent Integration",
    content:
      "Seamlessly connecting AI agents with your CRM, ERP, and business platforms.",
  },
  {
    title: "Support & Maintenance",
    content:
      "Providing long-term support for scalability and performance monitoring.",
  },
];

const accordionItems = [
  {
    title: "Challenges & Solutions",
    content: (
      <>
        <p>Successful Generative AI application development demands:</p>
        <ul className="my-2 list-disc pl-6">
          <li><span className="font-bold">Strong Data Governance:</span> To ensure data privacy and security.</li>
          <li><span className="font-bold">Clear Business Use Cases:</span> Defining where and how Gen AI can drive business growth.</li>
          <li><span className="font-bold">Workforce Adaption:</span> Preparing teams to embrace Gen AI solutions.</li>
        </ul>
        <p>Our Gen AI professional services address these challenges by providing strategic guidance, robust development frameworks, and seamless implementation models.</p>
      </>
    ),
  },
  {
    title: "Our Services Include",
    content: (
      <>
        <ol className="my-2 list-decimal pl-6">
          <li><span className="font-bold">Use Cases Definition:</span> We help you determine how Gen AI fits into your business strategy.</li>
          <li><span className="font-bold">Governance & Oversight:</span> We establish Gen AI and ChatGPT usage policies.</li>
          <li><span className="font-bold">Data Governance & Security:</span> We apply strong data security measures.</li>
          <li><span className="font-bold">Custom Gen AI Development:</span> Our team builds tailor-made Gen AI solutions.</li>
          <li><span className="font-bold">Implementation & Integration:</span> We help integrate Gen AI into your existing technology.</li>
          <li><span className="font-bold">Center of Excellence (CoE):</span> We help you establish a Gen AI governance model.</li>
        </ol>
      </>
    ),
  },
  {
    title: "Benefits of Choosing Us",
    content: (
      <>
        <ul className="my-2 list-disc pl-6">
          <li><span className="font-bold">Faster Decision-Making:</span> Gen AI provides real-time insights.</li>
          <li><span className="font-bold">Enhanced Efficiency:</span> Automate complex tasks and optimize workflows.</li>
          <li><span className="font-bold">Secure Implementation:</span> We ensure data governance and privacy standards.</li>
          <li><span className="font-bold">Scalable Solutions:</span> Our solutions grow with your business.</li>
        </ul>
      </>
    ),
  },
];

const AiAppDev = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-100px"});

  return (
    <div className="relative py-4 px-2">
      <div className="heading">
        <h2 className="text-4xl font-bold"> AI COE consulting and development services        </h2>
        <h4 className="text-xl font-semibold my-4">
        Unlocking AI Success for an Enterprise: AI Center of Excellence (AI CoE)
        </h4>
      </div>

      {/* Image Section */}
       <div className="my-6 text-center py-2">
        <img src="/assets/COEbanner.png" alt="Generative AI Illustration" className="w-full h-[50vh] max-w-4xl mx-auto rounded-lg"/>
      </div> 
      
      {/* Introduction Section */}
      <div className="content my-6">
        <h3 className="text-2xl font-bold">Introduction :</h3>
        <p>
          Using the power of Generative AI (Gen AI) is no longer an option; it&apos;s a business necessity. Our Generative AI consulting services empower organizations to harness AI&apos;s potential while ensuring governance, security, and ethical implementation.
        </p>
        <p>
          At <span className="font-semibold">Alta-Futuris Solutions</span>, we believe that <span className="font-semibold">cloud enables businesses, data drives growth, and Generative AI </span> becomes the ultimate differentiator. Together, they unlock smarter decision-making, transformative growth, and scalability.
        </p>
      </div>

      {/* Accordion Sections */}
      <div ref={ref} className="my-6 space-y-14">
        {accordionItems.map((item, index) => (
          <div key={index} className="bg-gray-100 mb-4 p-4 rounded-lg shadow-lg ">
            <motion.div
            
            key={index}
            initial={{opacity: 0, x: -50}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            viewport={{once: true, amount: 0.3}}
            transition={{duration: 0.6}}
            >
            <button
              className="w-full text-left flex justify-between items-center font-bold text-xl"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              {openAccordion === index ? <FaMinus /> : <FaPlus />}
            </button>

            {/* Tab Content */}

            <AnimatePresence>
            {openAccordion === index && (
            <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="px-6 text-gray-700 overflow-hidden"
        >
            <div className="mt-2 text-gray-900">{item.content}</div> 
            
            </motion.div>
            )}
            </AnimatePresence>
            </motion.div>
          </div>
        ))}
      </div>

      
 

      
    </div>
  );
};

export default AiAppDev;
