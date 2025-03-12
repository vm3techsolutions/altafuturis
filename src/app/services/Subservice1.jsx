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
  { id: 1, title: "AI-Driven Threat Detection", icon: ShieldCheck, description: "Detects and prevents threats using AI-driven analytics." },
  { id: 2, title: "AI-Powered Data Discovery", icon: Database, description: "Automatically classifies and organizes data using AI algorithms." },
  { id: 3, title: "AI-Enhanced Policy Enforcement", icon: FileText, description: "Enhances security policies with AI-driven automation." },
  { id: 4, title: "Real-Time Anomaly Detection", icon: ShieldCheck, description: "Identifies suspicious activities in real-time using AI." },
  { id: 5, title: "Automated Data Compliance", icon: Database, description: "Ensures compliance with regulations through AI automation." },
  { id: 6, title: "AI-Powered Incident Response", icon: FileText, description: "Speeds up cybersecurity incident responses with AI insights." },
  { id: 7, title: "Predictive Risk Analytics", icon: ShieldCheck, description: "Uses AI to forecast potential security threats before they happen." },
  { id: 8, title: "Machine Learning-Based Encryption", icon: Database, description: "AI-driven encryption to safeguard sensitive business data." },
  { id: 9, title: "AI-Based Insider Threat Detection", icon: FileText, description: "Detects potential insider security threats using AI analytics." },
  { id: 10, title: "AI-Powered Fraud Prevention", icon: ShieldCheck, description: "Identifies fraudulent activities with machine learning models." },
  { id: 11, title: "AI-Driven Access Control", icon: Database, description: "Manages user access dynamically based on AI-driven policies." },
  { id: 12, title: "Automated Security Audits", icon: FileText, description: "AI-powered security audits to detect vulnerabilities proactively." },
  { id: 13, title: "Deep Learning for Cybersecurity", icon: ShieldCheck, description: "Utilizes deep learning to recognize evolving cyber threats." },
  { id: 14, title: "AI-Based Network Monitoring", icon: Database, description: "Monitors network traffic for anomalies using AI intelligence." },
  { id: 15, title: "AI-Driven Phishing Detection", icon: FileText, description: "Identifies and prevents phishing attempts using AI insights." },
  { id: 16, title: "Smart AI Security Automation", icon: ShieldCheck, description: "Automates security processes for faster threat response." },
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
        <div className="w-full md:w-1/3 p-6 rounded-xl flex flex-col items-center">
          {selectedCard ? (
            <>
              <selectedCard.icon className="w-16 h-16 text-yellow-400" />
              <h2 className="text-xl font-bold mt-4">{selectedCard.title}</h2>
              <p className="mt-2 text-start">{selectedCard.description}</p>
            </>
          ) : (
            <p className="text-gray-300">Select a card to see details</p>
          )}
        </div>
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
    return <div className="p-6 text-center text-gray-500">No service found</div>;
  }
}
