"use client"
import { useState } from "react";

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
  
export default function Subservice1() {

     const [activeTab, setActiveTab] = useState(0);
      const [openAccordion, setOpenAccordion] = useState(null);
    
  return (
    <div className="p-10 -mt-10">
       {/* AI Agent Services Section */}
      <div className="sub-service text-center ">
        <h3 className="text-2xl font-bold">AI’s Next Disruptor: AI Agents</h3>
        <p>AI Agents can take business roles, make strategic decisions, and drive productivity at scale.</p>
        <h4 className="font-bold">Our specialized AI Agent services include:</h4>
        <div className="flex flex-col md:flex-row gap-6 mt-10">
          <div className="flex flex-col w-full md:w-1/3 border-r border-gray-300">
            {aiAgentServices.map((service, index) => (
              <button
                key={index}
                className={`py-3 px-4 text-left w-full font-semibold transition-all border-l-4 ${
                  activeTab === index ? "border-blue-500 text-blue-600 bg-white" : "border-transparent text-gray-900 hover:bg-white"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {service.title}
              </button>
            ))}
          </div>
          <div className="p-4 border rounded-lg shadow-lg bg-[#6328A6] text-center w-full">
            <p className="text-white mt-2">{aiAgentServices[activeTab].content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}



