"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const MegaMenu = () => {
  const tabs = [
    { 
      id: 1, 
      title: "Generative AI Application Development", 
      content: "Using the power of Generative artificial intelligence (GEN AI) is no longer a choice; it’s a necessity. Our Generative artificial intelligence consulting services guide leaders through this disruptive landscape to adopt or enhance GEN AI while prioritizing governance and security.", 
      link: "/services/ai-app-dev"
    },

    { 
      id: 2, 
      title: "Salesforce Agentforce Consulting", 
      content: "Salesforce Agentforce is transforming how businesses leverage autonomous AI agents to optimize workflows, productivity, and customer service. But as your rivals adopt the platform, gaining a competitive edge is challenging without expert support.", 
      link: "/services/salesforce-agentforce-consulting"
    },

    { 
      id: 3, 
      title: "Salesforce Consulting", 
      content: "We believe in delivering the best service possible to our customers. Our Certified Salesforce CRM consultants have a proven track record of providing end-to-end Salesforce Professional services to various organizations all across the world, while maintaining 100% customer satisfaction to clients in a variety of sectors.", 
      link: "/services/salesforce-consulting"
    },

    { 
      id: 4, 
      title: "Generative AI Agents for Data Loss Prevention (DLP) in Cybersecurity", 
      content: "The purpose of data loss prevention (DLP) is to protect sensitive data from unauthorized access, use, or transmission. DLP is a cybersecurity strategy that helps organizations comply with regulations and maintain the security of their data.", 
      link: "/services/data-loss-prevention"
    },

    { 
      id: 5, 
      title: "AI Agent Development in Blockchain", 
      content: "AI agent development by Alta-Futuris Blockchain team is playing a pivotal role in reshaping the blockchain landscape by enhancing security, optimizing consensus mechanisms, improving smart contract execution, and facilitating the growth of decentralized finance and autonomous blockchain networks.", 
      link: "/services/ai-agent-developement-in-blockchain"
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id); // Default to first tab

  return (
    <div className="absolute inset-x-0 top-full w-screen bg-white shadow-lg p-20 flex z-50 md:-ml-16 lg:-ml-16 xl:-ml-20 ">

      {/* Tabs Section (Left Panel) */}
      <div className="w-1/3 border-r">
        {tabs.map((tab) => (
          <Link key={tab.id} href={tab.link}>
            <div
              className={`p-4 text-lg mb-1 font-normal text-[#002096] cursor-pointer hover:bg-gray-200 flex items-center justify-between ${
                activeTab === tab.id ? "bg-gray-200 font-bold" : ""
              }`}
              onMouseEnter={() => setActiveTab(tab.id)}
            >
              <span>{tab.title}</span>
              <ArrowRightIcon className="w-6 h-5 ml-2 text-[#002096] transition-transform duration-300 transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>

      {/* Dynamic Content Section (Middle Panel) */}
      <div className="w-1/3 p-4">
        <h3 className="text-2xl text-[#002096] font-bold mb-2">
          {tabs.find((tab) => tab.id === activeTab)?.title}
        </h3>
        <p className="text-lg font-medium mb-2">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </p>
        <Link href={tabs.find((tab) => tab.id === activeTab)?.link || "#"}>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
            Learn More
          </button>
        </Link>
      </div>

      {/* Static Content Section (Right Panel) */}
      <div className="w-1/3 p-4 bg-gray-100 rounded-md">
        <h3 className="text-xl">Why Choose Us?</h3>
        <p className="text-sm mt-2">
          Industry experts with 10+ years of experience in tech solutions.
        </p>
      </div>
    </div>
  );
};

export default MegaMenu;
