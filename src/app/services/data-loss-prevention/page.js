"use client"
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

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
        <p>Common DLP Challenges:    </p>
        <ul className="my-2 list-disc pl-6">
          <li>Data Breaches & Insider Threats: Sensitive data can be exposed through human errors or malicious actors.
          </li>
          <li>Regulatory Compliance: Organizations must adhere to HIPAA, GDPR, and other data protection laws.</li>
          <li>Securing AI-Generated Content: Generative AI can introduce new security risks, requiring advanced threat detection.
          </li>
        </ul>
        <p>How AI-Powered DLP Helps:
        </p>
        <ul className="my-2 list-disc pl-6">
          <li>Detects Data Loss: Monitors data in use, at rest, and in motion to identify potential breaches.
          </li>
          <li>Prevents Unauthorized Transfers: Blocks sensitive data extraction and illicit transfers.
          </li>
          <li>Ensures Compliance: Helps organizations meet data protection regulations.
          </li>
          <li>Protects Confidential Information: Safeguards PII, financial data, and intellectual property.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Our AI-Powered Cybersecurity Services",
    content: (
      <>
      <p>Alta-Futuris Solutions offers:
      </p>
        <ol className="my-2 list-decimal pl-6">
          <li> Consultation & Strategy Development for AI-driven cybersecurity.
          </li>
          <li>Deployment & Implementation of FortiDLP and AI-integrated security solutions.
          </li>
          <li>Real-time Threat Monitoring and automated responses to potential breaches.
          </li>
          <li>Data Flow Insights & Investigations for risk management & compliance.
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
          <li> Prevent Data Leaks through real-time monitoring & automated security.
          </li>
          <li> Ensure Regulatory Compliance with HIPAA, GDPR, and other global standards.
          </li>
          <li>  Enhance Security & Governance with AI-powered threat intelligence.
          </li>
          <li> Protect Intellectual Property & Confidential Data from cyber threats.
</li>
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

  return (
    <div className="relative py-4 px-2">
      <div className="heading">
        <h2 className="text-4xl font-bold">Generative AI based AI Agents for data loss prevention (DLP) in Cybersecurity :


        </h2>
        <h4 className="text-xl font-semibold my-4">
        The purpose of data loss prevention (DLP) is
to protect sensitive data from unauthorized
access, use, or transmission. DLP is a
cybersecurity strategy that helps
organizations comply with regulations and
maintain the security of their data
        </h4>
      </div>

      {/* Image Section */}
       <div className="my-6 text-center py-2">
        <img src="/assets/Service4.png" alt="Generative AI Illustration" className="w-full h-[50vh] max-w-4xl mx-auto rounded-lg"/>
      </div> 
      
      {/* Introduction Section */}
      <div className="content my-6">
        <h3 className="text-2xl font-bold">Introduction :</h3>
        <p>
          Using the power of Generative AI (Gen AI) is no longer an option; it's a business necessity. Our Generative AI consulting services empower organizations to harness AI's potential while ensuring governance, security, and ethical implementation.
        </p>
        <p>
          At <span className="font-semibold">Alta-Futuris Solutions</span>, we believe that <span className="font-semibold">cloud enables businesses, data drives growth, and Generative AI </span> becomes the ultimate differentiator. Together, they unlock smarter decision-making, transformative growth, and scalability.
        </p>
      </div>

      {/* Accordion Sections */}
      <div className="my-6 space-y-14">
        {accordionItems.map((item, index) => (
          <div key={index} className="bg-gray-100 mb-4 p-4 rounded-lg shadow-lg ">
            <button
              className="w-full text-left flex justify-between items-center font-bold text-xl"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              {openAccordion === index ? <FaMinus /> : <FaPlus />}
            </button>
            {openAccordion === index && <div className="mt-2 text-gray-900">{item.content}</div>}
          </div>
        ))}
      </div>

      
 

      
    </div>
  );
};

export default AiAppDev;
