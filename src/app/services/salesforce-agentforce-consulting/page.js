"use client"

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const accordionItems = [
  {
    title: "Challenges & Solutions",
    content: (
      <>
        <p>Common Challenges with Agentforce:</p>
        <ul className="my-2 list-disc pl-6">
          <li>
            <span className="font-bold">Limited Customization:</span> Out-of-the-box Agentforce solutions offer basic functionality, limiting their potential.
          </li>
          <li>
            <span className="font-bold">Integration Barriers:</span> Connecting Agentforce with other AI technologies or CRM platforms is complex.
          </li>
          <li>
            <span className="font-bold">Scalability Issues:</span> Without professional guidance, businesses struggle to scale Agentforce for enterprise-wide automation.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Our Solution",
    content: (
      <>
        <p>We help businesses customize, integrate, and scale <strong>Salesforce Agentforce</strong> to maximize automation, productivity, and customer engagement while maintaining brand consistency.</p>
      </>
    ),
  },
  {
    title: "Our Services Include",
    content: (
      <>
        <ol className="my-2 list-decimal pl-6">
          <li>
            <span className="font-bold">Agentforce Customization:</span> We go beyond drag-and-drop tools, customizing AI agents to perform complex business tasks aligned with your goals.
          </li>
          <li>
            <span className="font-bold">Third-Party Integration:</span> Our experts integrate Agentforce with external AI tools, enabling streamlined processes and maximum output.
          </li>
          <li>
            <span className="font-bold">Salesforce Integration:</span> We ensure seamless connectivity between Agentforce, Salesforce Data Cloud, Einstein, and your existing CRM tools.
          </li>
          <li>
            <span className="font-bold">Use Case Development:</span> Our team identifies high-value business use cases and maps AI agents to streamline processes and boost productivity.
          </li>
          <li>
            <span className="font-bold">Autonomous Action Planning:</span> We configure Agentforce agents to proactively perform tasks, reducing human dependency.
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "Benefits of Choosing Us",
    content: (
      <>
        <ul className="my-2 list-disc pl-6">
          <li>
            <span className="font-bold">Maximized Efficiency:</span> Automate repetitive tasks, saving time and resources.
          </li>
          <li>
            <span className="font-bold">Better Customer Experience:</span> Enable AI agents to handle queries, bookings, and customer service, ensuring 24/7 support.
          </li>
          <li>
            <span className="font-bold">Faster Decision-Making:</span> Use integrated data from Salesforce to make faster, data-driven business decisions.
          </li>
          <li>
            <span className="font-bold">Seamless Scalability:</span> Easily scale Agentforce solutions as your business grows.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Use Case Examples",
    content: (
      <>
        <ul className="my-2 list-disc pl-6">
          <li>
            <span className="font-bold">Order & Shipping Management:</span> Automate order status, tracking, and modifications to save operational time.
          </li>
          <li>
            <span className="font-bold">Financial Services Automation:</span> Streamline data analysis, fraud detection, and customer relationship management.
          </li>
          <li>
            <span className="font-bold">Lead Generation & Qualification:</span> Optimize marketing by qualifying leads and identifying high-value opportunities.
          </li>
          <li>
            <span className="font-bold">Healthcare Appointment Management:</span> Enable patients to book, reschedule, or cancel appointments without human intervention.
          </li>
        </ul>
      </>
    ),
  },
];

const AiAppDev = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="relative py-3 px-2">
      {/* Heading */}
      <div className="heading">
        <h2 className="text-4xl font-bold">Salesforce Agentforce Consulting</h2>
        <h4 className="text-xl font-semibold my-4">Gain Your Business Edge in Salesforce Agentforce with Alta-Futuris Solutions</h4>
      </div>

      {/* Image Section */}
      <div className="my-6 text-center py-2">
        <img src="/assets/service2.png" alt="Salesforce Agentforce Consulting Illustration" className="w-full h-[50vh] max-w-4xl mx-auto rounded-lg"/>
      </div>
      
      {/* Introduction */}
      <div className="content my-6">
        <h3 className="text-2xl font-bold">Introduction :</h3>
        <p>Salesforce Agentforce is revolutionizing how businesses optimize workflows, enhance productivity, and improve customer service using autonomous AI agents. However, gaining a competitive edge with Agentforce requires deep expertise and strategic implementation.</p>
        <p>At Alta-Futuris Solutions, our AI and Salesforce consulting expertise empowers businesses to maximize the potential of Agentforce. Whether it's customizing AI agents, integrating with third-party platforms, or ensuring seamless CRM connectivity — we help you achieve transformative business outcomes.</p>
      </div>
      
      {/* Accordion Sections */}
      <div className="my-6 space-y-14">
        {accordionItems.map((item, index) => (
          <div key={index} className="bg-gray-100 mb-4 p-4 rounded-lg shadow-lg">
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
