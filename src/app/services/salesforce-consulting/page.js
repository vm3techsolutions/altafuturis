"use client"

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const accordionItems = [
  {
    title: "Challenges & Solutions",
    content: (
      <>
        <p>Common Challenges with Salesforce:</p>
        <ul className="my-2 list-disc pl-6">
          <li>
            <span className="font-bold">Inefficient Customization:</span> Out-of-the-box Salesforce may not fully meet business needs.
          </li>
          <li>
            <span className="font-bold">Complex Integration:</span> Integrating Salesforce with existing systems can be challenging.
          </li>
          <li>
            <span className="font-bold">Data Management Issues:</span> Managing and migrating data without disrupting operations is often complex.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Our Solution",
    content: (
      <>
        <p>We offer tailored Salesforce development, integration, and migration solutions ensuring smooth business operations and higher ROI.</p>
      </>
    ),
  },
  {
    title: "Our Services Include",
    content: (
      <>
        <ol className="my-2 list-decimal pl-6">
          <li>
            <span className="font-bold">Salesforce Development:</span> Customize and implement Salesforce solutions across Sales, Service, and Marketing Clouds.
          </li>
          <li>
            <span className="font-bold">Salesforce Integration & Migration:</span> Seamlessly integrate Salesforce with other platforms and ensure smooth data migration.
          </li>
          <li>
            <span className="font-bold">Einstein AI & Tableau CRM:</span> Unlock advanced insights and analytics with Salesforce Einstein AI and Tableau CRM.
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
            <span className="font-bold">Improved Efficiency:</span> Streamline business processes with customized Salesforce solutions.
          </li>
          <li>
            <span className="font-bold">Enhanced Customer Experience:</span> Strengthen customer relationships through data-driven insights.
          </li>
          <li>
            <span className="font-bold">Future-Ready Solutions:</span> Scalable Salesforce solutions to meet evolving business needs.
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
        <h2 className="text-4xl font-bold">Salesforce Consulting Services</h2>
        <h4 className="text-xl font-semibold my-4">Empower Your Business with Expert Salesforce Consulting Services</h4>
      </div>

      {/* Image Section */}
      <div className="my-6 text-center py-2">
        <img src="/assets/service3.png" alt="Salesforce Consulting Illustration" className="w-full h-[50vh] max-w-4xl mx-auto rounded-lg"/>
      </div>

      {/* Introduction */}
      <div className="content my-6">
        <h3 className="text-2xl font-bold">Introduction :</h3>
        <p>As a registered Salesforce Consulting Partner, Alta-Futuris Solutions specializes in helping businesses maximize the potential of Salesforce CRM. Whether it's boosting productivity, integrating platforms, or improving performance, our certified Salesforce experts deliver end-to-end services with guaranteed customer satisfaction.</p>
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
