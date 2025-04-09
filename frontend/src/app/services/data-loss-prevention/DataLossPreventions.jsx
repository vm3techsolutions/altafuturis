"use client";
import { useRef, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";

const aiAgentServices = [
  {
    title: "AI Agent Consultation",
    content: "Defining the scope, goals, and roadmap for AI agent development.",
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
        <p>Common DLP Challenges: </p>
        <ul className="my-2 list-disc pl-6">
          <li>
            <strong>Data Breaches & Insider Threats:</strong> Sensitive data can
            be exposed through human errors or malicious actors.
          </li>
          <li>
            <strong>Regulatory Compliance: </strong>Organizations must adhere to
            HIPAA, GDPR, and other data protection laws.
          </li>
          <li>
            <strong>Securing AI-Generated Content:</strong> Generative AI can
            introduce new security risks, requiring advanced threat detection.
          </li>
        </ul>
        <p>
          <strong>How AI-Powered DLP Helps:</strong>
        </p>
        <ul className="my-2 list-disc pl-6">
          <li>
            <strong>Detects Data Loss:</strong> Monitors data in{" "}
            <strong>use, at rest, and in motion </strong>to identify potential
            breaches.
          </li>
          <li>
            <strong>Prevents Unauthorized Transfers:</strong> Blocks sensitive
            data extraction and illicit transfers.
          </li>
          <li>
            <strong>Ensures Compliance: </strong>Helps organizations meet data
            protection regulations.
          </li>
          <li>
            <strong>Protects Confidential Information: </strong>Safeguards{" "}
            <strong>PII, financial data, and intellectual property.</strong>
          </li>
        </ul>
        <p>
          <strong>AI-Powered DLP with Fortinet</strong>
        </p>

        <p>
          Alta-Futuris Solutions partners with <strong>Fortinet </strong>to
          secure <strong>Generative AI-based AI Agents </strong>with{" "}
          <strong>FortiAI & FortiDLP.</strong>
        </p>
      </>
    ),
  },
  {
    title: "FortiAI",
    content: (
      <>
        <ol className="my-2 list-decimal pl-6">
          <li>
            {" "}
            Uses <strong>AI & Machine Learning</strong> to detect and mitigate
            threats across networks.
          </li>
          <li>
            Monitors <strong>inputs, outputs, and AI models </strong>for
            proactive defense.
          </li>
          <li>
            Features
            <strong>
              {" "}
              input sanitization, output filtering, model integrity checks, and
              anomaly detection.
            </strong>
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "FortiDLP",
    content: (
      <>
        <p>Alta-Futuris Solutions offers:</p>
        <ol className="my-2 list-decimal pl-6">
          <li>
            {" "}
            <strong>Cloud-native AI-enhanced endpoint protection</strong>{" "}
            against data leaks and insider threats.
          </li>
          <li>
            Provides<strong> real-time visibility </strong>into business data
            flows.
          </li>
          <li>
            Detects <strong>high-risk activities</strong> across users,
            endpoints, and cloud storage.
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "Our AI-Powered Cybersecurity Services",
    content: (
      <>
        <p>Alta-Futuris Solutions offers:</p>
        <ol className="my-2 list-decimal pl-6">
          <li>
            <strong> Consultation & Strategy Development </strong>for AI-driven
            cybersecurity.
          </li>
          <li>
            <strong>Deployment & Implementation</strong> of
            <strong> FortiDLP</strong> and AI-integrated security solutions.
          </li>
          <li>
            <strong>Real-time Threat Monitoring </strong>and automated responses
            to potential breaches.
          </li>
          <li>
            <strong>Data Flow Insights & Investigations</strong> for
            <strong> risk management & compliance.</strong>
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "Business Benefits of AI-Driven DLP",
    content: (
      <>
        <ul className="my-2 list-disc pl-6">
          <li>
            <strong> Prevent Data Leaks </strong>through real-time monitoring &
            automated security.
          </li>
          <li>
            <strong> Ensure Regulatory Compliance</strong> with
            <strong> HIPAA, GDPR, and other global standards.</strong>
          </li>
          <li>
            <strong> Enhance Security & Governance</strong> with AI-powered
            threat intelligence.
          </li>
          <li>
            {" "}
            <strong>Protect Intellectual Property & Confidential Data </strong>
            from cyber threats.
          </li>
        </ul>
      </>
    ),
  },
];

const DataLossPreventions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative py-3 px-2 text-left md:text-start">
      <div className="heading">
        <h2 className="text-3xl md:text-4xl font-bold">
          Generative AI based AI Agents for data loss prevention (DLP) in
          Cybersecurity :
        </h2>
        <h4 className="text-xl font-semibold my-4">
          The purpose of data loss prevention (DLP) is to protect sensitive data
          from unauthorized access, use, or transmission. DLP is a cybersecurity
          strategy that helps organizations comply with regulations and maintain
          the security of their data
        </h4>
      </div>

      {/* Image Section */}
      <div className="my-6 text-center py-2">
        <Image
          src="/assets/Service-4.png"
          alt="Generative AI Illustration"
          width={800} height={500} 
          className="h-[25vh] md:h-[45vh] mx-auto rounded-lg"
        />
      </div>

      {/* Introduction Section */}
      <div className="content my-6">
        <h3 className="text-2xl font-bold">Introduction :</h3>
        <p className="text-sm md:text-md">
          Using the power of Generative AI (Gen AI) is no longer an option; it&apos;s
          a business necessity. Our Generative AI consulting services empower
          organizations to harness AI&apos;s potential while ensuring governance,
          security, and ethical implementation.
        </p>
        <p className="text-sm md:text-md">
          At <span className="font-semibold">Alta-Futuris Solutions</span>, we
          believe that{" "}
          <span className="font-semibold">
            cloud enables businesses, data drives growth, and Generative AI{" "}
          </span>{" "}
          becomes the ultimate differentiator. Together, they unlock smarter
          decision-making, transformative growth, and scalability.
        </p>
      </div>

      {/* Accordion Sections */}
      <div ref={ref} className="my-6 space-y-4 md:space-y-8">
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 mb-4 p-4 rounded-lg shadow-lg "
          >
            <motion.div
            
            key={index}
            initial={{opacity: 0, x: -50}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            viewport={{once: true, amount: 0.3}}
            transition={{duration: 0.6}}
            >
            <button
              className="w-full text-left flex justify-between items-center font-bold text-md md:text-xl"
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

export default DataLossPreventions;
