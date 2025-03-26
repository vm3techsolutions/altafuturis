"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

const DLP = [
  { title: "Preventing Data Exfiltration", content: "FortiDLP helps organizations prevent sensitive data from leaving their control, whether intentionally or accidentally. " },

  { title: "Protecting Data at Rest and in Motion", content: "It secures data both when it's stored (at rest) and when it's being used or transmitted (in motion). " },

  { title: "SaaS Data Security", content: "FortiDLP can be used to secure data within SaaS applications, such as Office 365 and Teams, by monitoring and controlling access to sensitive data. " },
  
  { title: "Endpoint Security", content: "FortiDLP can be deployed on endpoints to prevent data from being copied or transferred to unmanaged devices. " },

  { title: "Monitoring User Activity", content: "FortiDLP provides visibility into user activities, data access, and systems, helping to identify and address potential insider threats. "},

  { title: "Behavioral Analytics", content: "It uses behavioral analytics to detect anomalous activities that could indicate an insider threat."},

  { title: "Meeting Compliance Standards", content: "FortiDLP helps organizations meet key compliance requirements, such as PCI DSS, HIPAA, ISO 27001, NIST, and others."},

  { title: "Privacy Protection", content: "It prioritizes privacy, leveraging built-in data minimization techniques to detect and mitigate threats while safeguarding employee confidentiality."},

  { title: "GDPR and CCPA Compliance", content: "FortiDLP can help organizations comply with regulations like GDPR and CCPA by providing tools for data minimization and localized forensics storage. "},

  { title: "Shadow AI Usage Identification", content: "FortiDLP can help identify and stop the upload of sensitive data to shadow AI applications."},

  { title: "Automated Threat Mapping", content: "It automatically maps detections to MITRE Engenuity™ Insider Threat TTP Knowledge Base. "}
];

const cards = [
  { id: 1, title: "AI-Powered Data Discovery and Classification",
     img: "/assets/card1.png", 
    description: ["Automated Data Identification : Use AI/ML to automatically identify and classify sensitive data (e.g., PII, PCI, PHI) across structured and unstructured data sources.",
       "Contextual Analysis : Leverage natural language processing (NLP) to understand the context of data and improve classification accuracy.", 
       "Generative AI for Data Mapping : Use AI to generate data maps and identify relationships between data sources."] },

  { id: 2, title: "AI-Powered Data Discovery",
     img: "/assets/card2.png",
        description: ["Anomaly Detection : Use machine learning to detect unusual user behavior or data access patterns that may indicate insider threats or data exfiltration.",
       "Predictive Analytics : Predict potential data loss incidents based on historical data and user behavior trends.", 
       "Generative AI for Threat Simulation : Simulate advanced data loss scenarios using generative AI to test and improve DLP policies."] },

  { id: 3, title: "AI-Enhanced Policy Enforcement",
     img: "/assets/card3.png",
        description: ["Dynamic Policy Adjustment : Use AI to dynamically adjust DLP policies based on real-time risk assessments and user behavior.",
       "Generative AI for Policy Creation : Automatically generate DLP policies using AI based on regulatory requirements and organizational needs."] },

  { id: 4, title: "AI-Powered User and Entity Behavior Analytics (UEBA)",
     img: "/assets/card4.png",

    description: ["Behavioral Profiling : Use AI to create behavioral profiles for users and entities, enabling the detection of deviations from normal behavior.",
       "Risk Scoring : Assign risk scores to users and devices using AI-driven analytics.",
        "Generative AI for Insider Threat Detection : Simulate insider threat scenarios to improve detection capabilities."] },

  { id: 5, title: "AI-Driven Incident Response",
     img: "/assets/card5.png",
        description: ["Automated Incident Triage : Use AI to prioritize and triage data loss incidents based on severity and potential impact.",
       "Generative AI for Incident Reports : Automatically generate detailed incident reports using AI, including root cause analysis and recommended actions."] },

  { id: 6, title: "AI-Enhanced Data Masking and Redaction",
     img: "/assets/card6.png",
        description: ["Context-Aware Redaction : Use AI to identify and redact sensitive information in documents, emails, and other data formats.",
       "Generative AI for Synthetic Data : Create synthetic data for testing and development purposes while protecting sensitive information."] },

  { id: 7, title: "AI-Powered Compliance and Reporting",
     img: "/assets/card7.png",

    description: ["Regulatory Compliance Automation : Use AI to ensure DLP policies align with regulatory requirements (e.g., GDPR, HIPAA, PCI-DSS).",
       "Generative AI for Compliance Reports : Automatically generate compliance reports and audit trails using AI."] },

  { id: 8, title: "AI-Driven Email and Web Protection",
     img: "/assets/card8.png",
        description: ["Phishing Detection : Use AI to detect and block phishing attempts that may lead to data loss.",
       "Generative AI for Email Content Analysis : Analyze email content using AI to detect sensitive data and enforce DLP policies."] },

  { id: 9, title: "AI-Enhanced Endpoint Protection",
     img: "/assets/card9.png",
        description: ["Endpoint Behavior Analysis : Use AI to monitor and analyze endpoint behavior for signs of data exfiltration.",
       "Generative AI for Endpoint Threat Simulation : Simulate endpoint threats to test and improve endpoint DLP policies."] },

  { id: 10, title: "AI-Powered Cloud Data Protection",
     img: "/assets/card10.png",

    description: ["Cloud Data Monitoring : Use AI to monitor data transfers to and from cloud applications and storage.",
       "Generative AI for Cloud Threat Detection : Simulate cloud-based data loss scenarios to improve detection and response."] },

  { id: 11, title: "AI-Driven User Training and Awareness",
     img: "/assets/card11.png",
        description: ["Personalized Training Programs : Use AI to create personalized data protection training programs for users based on their behavior and risk profile.",
       "Generative AI for Phishing Simulations : Generate realistic phishing simulations using AI to test and improve user awareness."] },

  { id: 12, title: "AI-Enhanced Forensic Analysis",
     img: "/assets/card12.png",
        description: ["Automated Forensic Investigations : Use AI to analyze data loss incidents and identify the root cause.",
       "Generative AI for Incident Reconstruction : Reconstruct data loss incidents using AI to provide a detailed timeline of events."] },

  { id: 13, title: "AI-Powered Integration with Fortinet Security Fabric",
     img: "/assets/card13.png",

    description: ["Threat Intelligence Sharing : Use AI to share threat intelligence across the Fortinet Security Fabric for enhanced data protection.",
       "Generative AI for Security Orchestration : Automate security orchestration and response (SOAR) using AI to improve incident response times."] },

  { id: 14, title: "AI-Driven Data Loss Prevention for Generative AI Tools",
     img: "/assets/card14.png",
        description: ["Monitoring AI Tool Usage : Use FortiDLP to monitor and control data shared with generative AI tools (e.g., ChatGPT, Bard) to prevent sensitive data leakage.",
       "Policy Enforcement for AI Tools : Enforce DLP policies to block or restrict the use of generative AI tools in handling sensitive data."] },

  { id: 15, title: "AI-Powered Data Loss Prevention for Virtual Environments",
     img: "/assets/card15.png",
        description: ["Virtual Machine Monitoring : Use AI to monitor data transfers within virtual machines and detect anomalies.",
       "Generative AI for Virtual Threat Simulation : Simulate data loss scenarios in virtual environments to improve detection and response."] },

  { id: 16, title: "AI-Enhanced Data Loss Prevention for Mobile Devices",
     img: "/assets/card16.png",

    description: ["Mobile Device Behavior Analysis : Use AI to monitor and analyze data transfers on mobile devices.",
       "Generative AI for Mobile Threat Detection : Simulate mobile-based data loss scenarios to improve detection and response."] },
];

export default function Subservice1() {
  const [selectedCard, setSelectedCard] = useState(cards[0]);
  const [activeTab, setActiveTab] = useState(0);
  const pathname = usePathname();
  const slug = pathname.split("/").pop() || null;

  if (!slug) return null;

  if (slug === "data-loss-prevention") {
    return (
        <>
        <div className="flex flex-col md:flex-row h-full bg-purple-800 text-white p-6">
        <div className="w-full md:w-1/3 p-6 rounded-xl flex flex-col items-start space-y-8">
          <img src={selectedCard.img} alt={selectedCard.title} className=" w-20 h-20 mx-auto text-yellow-600 " />
          <h2 className="text-2xl text-left font-bold mt-4 ">{selectedCard.title}</h2>
          <ul className="mt-2 text-start list-disc space-y-5">
            {selectedCard.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-2/3 flex flex-wrap gap-4 p-6 justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="h-28 w-52 bg-white text-black p-4 rounded-lg flex flex-col justify-center items-center cursor-pointer transition-transform hover:scale-110"
              onClick={() => setSelectedCard(card)}
            >
              <img src={card.img} alt={card.title}  className="w-10 h-10 text-yellow-500 transition-transform hover:scale-125" />
              <p className="mt-2 text-center font-semibold text-sm">{card.title}</p>
            </div>
          ))}
        </div>
      </div>
  
  
  <div className="px-6 md:p-10">
          <div className="text-center">
           
            <div className="flex flex-col md:flex-row gap-6 mt-6">
              <div className="w-full md:w-1/3 border-r border-gray-300">
                {DLP.map((item, index) => (
                  <button
                    key={index}
                    className={`py- my-2 px-4 text-left text-sm w-full font-semibold transition-all border-l-4 ${activeTab === index ? "border-blue-500 text-blue-600 bg-gray-100" : "border-transparent text-gray-900 hover:bg-gray-100"}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
              <div className="py-14 px-8 border rounded-lg shadow-lg text-lg bg-[#6328A6] text-white text-left w-full">
                <p>{DLP[activeTab].content}</p>
              </div>
            </div>
          </div>
        </div>  
        </>      
      );
  } 
 else {
    return <div className="p-6 text-center text-gray-500"></div>;
  }
}
