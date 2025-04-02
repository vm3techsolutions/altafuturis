"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";


const aiAgentServices = [
  { title: "AI Agent Consulting", content: "AI Agent Consulting services are comprehensive and can be highly customized to meet the specific needs of a business or organization. The goal is to leverage AI technologies to drive innovation, improve efficiency, and create competitive advantages while ensuring ethical and responsible use of AI." },
  { title: "Custom AI Agent Development", content: "Custom AI Agent development services are highly tailored to meet the specific needs of a business or organization. They involve a comprehensive approach that covers everything from initial consultation and design to deployment, monitoring, and ongoing support. The goal is to create AI agents that deliver significant value, drive innovation, and provide a competitive edge while ensuring ethical and responsible use of AI technologies." },
  { title: "AI Agent Integration", content: "AI Agent integration services are essential for ensuring that AI agents work seamlessly within an organization’s existing systems and infrastructure. These services cover a wide range of activities, from initial assessment and planning to deployment, monitoring, and ongoing support. The goal is to create a cohesive and efficient system that leverages the full potential of AI agents to drive innovation, improve efficiency, and deliver significant business value." },
  { title: "AI Agent Support and Maintenance", content: "AI Agent support and maintenance services are essential for ensuring the long-term success and effectiveness of AI agents. These services cover a wide range of activities, from technical support and performance monitoring to regular updates, security management, and user training. The goal is to maintain optimal performance, adapt to changing needs, and ensure that the AI agent continues to deliver value to the organization." },
];

const salesforceConsulting = [
  { title: "Salesforce Data Cloud", content: "Bring all your data together on Salesforce Data Cloud & initiate new AI conversations Make your Digital Transformation journey future proof with Salesforce’s hyperscale data engine that unifies structured and unstructured data to create a 360-degree view of your customers and is the foundation of the Einstein 1 Platform." },

  { title: "Salesforce Sales and Service Cloud", content: "Unlock the full potential of your Salesforce CRM with our certified and trained implementation experts. Our experts streamline your CRM, automate workflows, and optimize customer experiences to drive growth. Whether you’re scaling operations or improving engagement, our experts ensure an efficient and seamless transition. Convert opportunities into revenue with our Salesforce Implementation Services." },

  { title: "Salesforce Integration", content: "Salesforce Integration Consultants from Alta-Futuris Solutions with many years’ experience, identify solutions to siloed system issues for their customers. These Salesforce Integration solutions always prove to be enabled high interoperability, intuitive in design and user-friendly. Our Salesforce Integration Services are cost-effective and can incorporate a solution across all applications including Microsoft, Oracle, Abode, SAP etc., data management and the organisation’s business processes." },

  { title: "Salesforce Experience Cloud", content: " Choose Alta-Futuris Solutions as a Salesforce experience cloud partner and the Implementation will include basic configuration, role mapping, customization as applicable, integration with external social media and internal systems of record, security model set up and role-based dashboards for enhanced reporting. Migration of content from existing knowledge management systems and configuration in Salesforce Experience Cloud Implementation success measurement through pre-defined metrics Smooth transition of existing Salesforce Customers and Partner Portal users to Salesforce Experience Cloud Effective user and technical support for Salesforce Experience Cloud" },
];


export default function Subservice1() {
 
  const [activeTab, setActiveTab] = useState(0);
  const pathname = usePathname();
  const slug = pathname.split("/").pop() || null;

  if (!slug) return null;

  if (slug === "ai-app-dev") {
    return (
      <div className="px-14 md:p-10">
        <div className="text-start">
          <h3 className="text-2xl font-bold">AI’s Next Disruptor: AI Agents</h3>
          <p>AI Agents can take business roles, make strategic decisions, and drive productivity at scale.</p>
          <h4 className="font-bold mt-4">Our specialized AI Agent services include:</h4>
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <div className="w-full md:w-1/3 border-r border-gray-300">
              {aiAgentServices.map((item, index) => (
                <button
                  key={index}
                  className={`py-4 my-2 text-lg px-4 text-left w-full font-semibold transition-all border-l-4 ${activeTab === index ? "border-blue-500 text-blue-600 bg-gray-100" : "border-transparent text-gray-900 hover:bg-gray-100"}`}
                  onClick={() => setActiveTab(index)}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="py-14 px-8 border text-lg rounded-lg shadow-lg bg-[#6328A6] text-white text-left w-full">
              <p>{aiAgentServices[activeTab].content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }else if (slug === "salesforce-consulting") {
    return (
      <div className="px-6 md:p-10">
        <div className="text-start">
          <h3 className="text-2xl font-bold">Salesforce Development, Support, and Maintenance</h3>
          <p>Optimize your Salesforce experience with expert solutions.</p>
          <h4 className="font-bold mt-4">Our specialized Salesforce services include:</h4>
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <div className="w-full md:w-1/3 border-r border-gray-300">
              {salesforceConsulting.map((item, index) => (
                <button
                  key={index}
                  className={`py-4 my-2 px-4 text-left text-lg w-full font-semibold transition-all border-l-4 ${activeTab === index ? "border-blue-500 text-blue-600 bg-gray-100" : "border-transparent text-gray-900 hover:bg-gray-100"}`}
                  onClick={() => setActiveTab(index)}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="py-14 px-8 border rounded-lg shadow-lg text-lg bg-[#6328A6] text-white text-left w-full">
              <p>{salesforceConsulting[activeTab].content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } 
 else {
    return <div className="p-6 text-center text-gray-500"></div>;
  }
}
