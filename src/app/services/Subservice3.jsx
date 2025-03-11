"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

const aiAgentServices = [
  {
    title: "Salesforce Development – Sales, Service, Marketing Cloud, Lightning, LWC",
    content: "1",
  },
  {
    title: "Salesforce Integration and Migration",
    content: "2",
  },
  {
    title: "Tableau CRM, Einstein AI",
    content: "3",
  }
];

export default function Subservice1() {
  const pathname = usePathname();
  // Assuming service pages are at /services/[slug]
  const parts = pathname.split("/");
  const slug = parts[parts.length - 1] || null;
  const [activeTab, setActiveTab] = useState(0);

  // If no slug is found, don't render anything.
  if (!slug) return null;

  if (slug === "salesforce-consulting") {
    // Render detailed full-width content for the AI Agent service.
    return (
      <div className="p-10 -mt-10">
        <div className="sub-service text-center">
          <h3 className="text-2xl font-bold">Salesforce Development, Support and Maintenance</h3>
          <p>
            AI Agents can take business roles, make strategic decisions, and drive productivity at scale.
          </p>
          <h4 className="font-bold">Our specialized AI Agent services include:</h4>
          <div className="flex flex-col md:flex-row gap-6 mt-10">
            <div className="flex flex-col w-full md:w-1/3 border-r border-gray-300">
              {aiAgentServices.map((item, index) => (
                <button
                  key={index}
                  className={`py-3 px-4 text-left w-full font-semibold transition-all border-l-4 ${
                    activeTab === index
                      ? "border-blue-500 text-blue-600 bg-white"
                      : "border-transparent text-gray-900 hover:bg-white"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="p-4 border rounded-lg shadow-lg bg-[#6328A6] text-center w-full">
              <p className="text-white mt-2">
                {aiAgentServices[activeTab].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    // Render generic (or custom) full-width content for other services.
    return (
      <div className="p-10 -mt-10">
        {/* <div className="sub-service text-center">
          <h3 className="text-2xl font-bold">Service: {slug}</h3>
          <p>
            Full-width content for <strong>{slug}</strong> will appear here. Customize this section with specific details for this service.
          </p>
        </div> */}
      </div>
    );
  }
}
