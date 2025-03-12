"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ShieldCheck, Database, FileText } from "lucide-react";

const aiAgentServices = [
  { title: "AI Agent Consultation", content: "Defining the scope, goals, and roadmap for AI agent development." },
  { title: "Custom AI Agent Development", content: "Designing AI agents tailored to your industry and business needs." },
  { title: "AI Agent Integration", content: "Seamlessly connecting AI agents with your CRM, ERP, and business platforms." },
  { title: "Support & Maintenance", content: "Providing long-term support for scalability and performance monitoring." },
];

const aiAgentServices3 = [
  { title: "Salesforce Development – Sales, Service, Marketing Cloud, Lightning, LWC", content: "Comprehensive development services tailored for your business." },
  { title: "Salesforce Integration and Migration", content: "Seamless integration and data migration solutions." },
  { title: "Tableau CRM, Einstein AI", content: "Leverage AI-powered analytics for smart decision-making." },
];

const cards = [
  { id: 1, title: "AI-Powered Data Discovery and Classification",
     icon: ShieldCheck, 
    description: ["Automated Data Identification : Use AI/ML to automatically identify and classify sensitive data (e.g., PII, PCI, PHI) across structured and unstructured data sources.",
       "Contextual Analysis : Leverage natural language processing (NLP) to understand the context of data and improve classification accuracy.", 
       "Generative AI for Data Mapping : Use AI to generate data maps and identify relationships between data sources."] },

  { id: 2, title: "AI-Powered Data Discovery",
     icon: Database, 
    description: ["Anomaly Detection : Use machine learning to detect unusual user behavior or data access patterns that may indicate insider threats or data exfiltration.",
       "Predictive Analytics : Predict potential data loss incidents based on historical data and user behavior trends.", 
       "Generative AI for Threat Simulation : Simulate advanced data loss scenarios using generative AI to test and improve DLP policies."] },

  { id: 3, title: "AI-Enhanced Policy Enforcement",
     icon: FileText, 
    description: ["Dynamic Policy Adjustment : Use AI to dynamically adjust DLP policies based on real-time risk assessments and user behavior.",
       "Generative AI for Policy Creation : Automatically generate DLP policies using AI based on regulatory requirements and organizational needs."] },

  { id: 4, title: "AI-Powered User and Entity Behavior Analytics (UEBA)",
     icon: ShieldCheck, 
    description: ["Behavioral Profiling : Use AI to create behavioral profiles for users and entities, enabling the detection of deviations from normal behavior.",
       "Risk Scoring : Assign risk scores to users and devices using AI-driven analytics.",
        "Generative AI for Insider Threat Detection : Simulate insider threat scenarios to improve detection capabilities."] },

  { id: 5, title: "AI-Driven Incident Response",
     icon: Database, 
    description: ["Automated Incident Triage : Use AI to prioritize and triage data loss incidents based on severity and potential impact.",
       "Generative AI for Incident Reports : Automatically generate detailed incident reports using AI, including root cause analysis and recommended actions."] },

  { id: 6, title: "AI-Enhanced Data Masking and Redaction",
     icon: FileText, 
    description: ["Context-Aware Redaction : Use AI to identify and redact sensitive information in documents, emails, and other data formats.",
       "Generative AI for Synthetic Data : Create synthetic data for testing and development purposes while protecting sensitive information."] },

  { id: 7, title: "AI-Powered Compliance and Reporting",
     icon: ShieldCheck, 
    description: ["Regulatory Compliance Automation : Use AI to ensure DLP policies align with regulatory requirements (e.g., GDPR, HIPAA, PCI-DSS).",
       "Generative AI for Compliance Reports : Automatically generate compliance reports and audit trails using AI."] },

  { id: 8, title: "AI-Driven Email and Web Protection",
     icon: Database, 
    description: ["Phishing Detection : Use AI to detect and block phishing attempts that may lead to data loss.",
       "Generative AI for Email Content Analysis : Analyze email content using AI to detect sensitive data and enforce DLP policies."] },

  { id: 9, title: "AI-Enhanced Endpoint Protection",
     icon: FileText, 
    description: ["Endpoint Behavior Analysis : Use AI to monitor and analyze endpoint behavior for signs of data exfiltration.",
       "Generative AI for Endpoint Threat Simulation : Simulate endpoint threats to test and improve endpoint DLP policies."] },

  { id: 10, title: "AI-Powered Cloud Data Protection",
     icon: ShieldCheck, 
    description: ["Cloud Data Monitoring : Use AI to monitor data transfers to and from cloud applications and storage.",
       "Generative AI for Cloud Threat Detection : Simulate cloud-based data loss scenarios to improve detection and response."] },

  { id: 11, title: "AI-Driven User Training and Awareness",
     icon: Database, 
    description: ["Personalized Training Programs : Use AI to create personalized data protection training programs for users based on their behavior and risk profile.",
       "Generative AI for Phishing Simulations : Generate realistic phishing simulations using AI to test and improve user awareness."] },

  { id: 12, title: "AI-Enhanced Forensic Analysis",
     icon: FileText, 
    description: ["Automated Forensic Investigations : Use AI to analyze data loss incidents and identify the root cause.",
       "Generative AI for Incident Reconstruction : Reconstruct data loss incidents using AI to provide a detailed timeline of events."] },

  { id: 13, title: "AI-Powered Integration with Fortinet Security Fabric",
     icon: ShieldCheck, 
    description: ["Threat Intelligence Sharing : Use AI to share threat intelligence across the Fortinet Security Fabric for enhanced data protection.",
       "Generative AI for Security Orchestration : Automate security orchestration and response (SOAR) using AI to improve incident response times."] },

  { id: 14, title: "AI-Driven Data Loss Prevention for Generative AI Tools",
     icon: Database, 
    description: ["Monitoring AI Tool Usage : Use FortiDLP to monitor and control data shared with generative AI tools (e.g., ChatGPT, Bard) to prevent sensitive data leakage.",
       "Policy Enforcement for AI Tools : Enforce DLP policies to block or restrict the use of generative AI tools in handling sensitive data."] },

  { id: 15, title: "AI-Powered Data Loss Prevention for Virtual Environments",
     icon: FileText, 
    description: ["Virtual Machine Monitoring : Use AI to monitor data transfers within virtual machines and detect anomalies.",
       "Generative AI for Virtual Threat Simulation : Simulate data loss scenarios in virtual environments to improve detection and response."] },

  { id: 16, title: "AI-Enhanced Data Loss Prevention for Mobile Devices",
     icon: ShieldCheck, 
    description: ["Mobile Device Behavior Analysis : Use AI to monitor and analyze data transfers on mobile devices.",
       "Generative AI for Mobile Threat Detection : Simulate mobile-based data loss scenarios to improve detection and response."] },
];

export default function Subservice1() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const pathname = usePathname();
  const slug = pathname.split("/").pop() || null;

  if (!slug) return null;

  if (slug === "ai-app-dev") {
    return (
      <div className="p-6 md:p-10">
        <div className="text-center">
          <h3 className="text-2xl font-bold">AI’s Next Disruptor: AI Agents</h3>
          <p>AI Agents can take business roles, make strategic decisions, and drive productivity at scale.</p>
          <h4 className="font-bold mt-4">Our specialized AI Agent services include:</h4>
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <div className="w-full md:w-1/3 border-r border-gray-300">
              {aiAgentServices.map((item, index) => (
                <button
                  key={index}
                  className={`py-3 px-4 text-left w-full font-semibold transition-all border-l-4 ${activeTab === index ? "border-blue-500 text-blue-600 bg-gray-100" : "border-transparent text-gray-900 hover:bg-gray-100"}`}
                  onClick={() => setActiveTab(index)}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="p-4 border rounded-lg shadow-lg bg-[#6328A6] text-white text-center w-full">
              <p>{aiAgentServices[activeTab].content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (slug === "data-loss-prevention") {
    return (
      <div className="flex flex-col md:flex-row h-full bg-purple-800 text-white p-6">
        <div className="w-full md:w-1/3 p-6 rounded-xl flex flex-col items-start space-y-8">
          {selectedCard ? (

            // left side 
            <>
            <selectedCard.icon className="w-20 h-20 mx-auto text-yellow-400 " />
            <h2 className="text-2xl text-left font-bold mt-4 ">{selectedCard.title}</h2>
            <ul className="mt-2 text-start list-disc  space-y-5">
              {selectedCard.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </>
          ) : (
            <p className="text-gray-300">Select a card to see details</p>
          )}
        </div>


        {/* right side */}

        <div className="w-full md:w-2/3 flex flex-wrap gap-4 p-6 justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="h-28 w-52 bg-white text-black p-4 rounded-lg flex flex-col justify-center items-center cursor-pointer transition-transform hover:scale-110"
              onClick={() => setSelectedCard(card)}
            >
              <card.icon className="w-10 h-10 text-yellow-500 transition-transform hover:scale-125" />
              <p className="mt-2 text-center font-semibold text-sm">{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (slug === "salesforce-consulting") {
    return (
      <div className="p-6 md:p-10">
        <div className="text-center">
          <h3 className="text-2xl font-bold">Salesforce Development, Support, and Maintenance</h3>
          <p>Optimize your Salesforce experience with expert solutions.</p>
          <h4 className="font-bold mt-4">Our specialized Salesforce services include:</h4>
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <div className="w-full md:w-1/3 border-r border-gray-300">
              {aiAgentServices3.map((item, index) => (
                <button
                  key={index}
                  className={`py-3 px-4 text-left w-full font-semibold transition-all border-l-4 ${activeTab === index ? "border-blue-500 text-blue-600 bg-gray-100" : "border-transparent text-gray-900 hover:bg-gray-100"}`}
                  onClick={() => setActiveTab(index)}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="p-4 border rounded-lg shadow-lg bg-[#6328A6] text-white text-center w-full">
              <p>{aiAgentServices3[activeTab].content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="p-6 text-center text-gray-500"></div>;
  }
}
