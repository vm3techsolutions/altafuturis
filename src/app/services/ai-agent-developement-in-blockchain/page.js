"use client"

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const accordionItems = [
  
  {
    title: "Challenges & Solutions",
    content: (
      <>
        <p>Key Challenges in AI-Blockchain Integration:</p>
        <ul className="my-2 list-disc pl-6">
          <li>
            <span className="font-bold">Data Privacy Concerns:</span> Managing and securing sensitive data within blockchain networks.
          </li>
          <li>
            <span className="font-bold">Limited Automation:</span> Traditional blockchain networks lack intelligent decision-making capabilities.
          </li>
          <li>
            <span className="font-bold">Scalability Issues:</span> Processing large-scale data with real-time efficiency.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Our Solution",
    content: (
      <>
        <p>We develop custom <strong>AI Agents</strong> that operate within <strong>Azure or AWS Blockchain</strong>, ensuring:</p>
        <ul className="my-2 list-disc pl-6">
          <li>
            <span className="font-bold">Enhanced Data Privacy.</span>
          </li>
          <li>
            <span className="font-bold">Autonomous Decision-Making.</span>
          </li>
          <li>
            <span className="font-bold">Scalable and Intelligent Blockchain Systems.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Our Services Include",
    content: (
      <>
        <ol className="my-2 list-decimal pl-6">
          <li>
            <span className="font-bold">AI Agent Development:</span> Design and develop AI agents that automate blockchain transactions, data analysis, and asset management.
          </li>
          <li>
            <span className="font-bold">Smart Contract Execution:</span> Enable AI agents to autonomously manage and trigger smart contract functions.
          </li>
          <li>
            <span className="font-bold">Blockchain Integration:</span> Seamlessly integrate AI agents with <strong>Azure Blockchain, AWS Blockchain</strong>, and other platforms.
          </li>
          <li>
            <span className="font-bold">Governance Automation:</span> Implement AI-driven decentralized governance models.
          </li>
          <li>
            <span className="font-bold">Data Privacy & Security:</span> Ensure compliant and secure data handling across blockchain networks.
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
            <span className="font-bold">Enhanced Efficiency:</span> Automate repetitive blockchain tasks, saving time and operational costs.
          </li>
          <li>
            <span className="font-bold">Intelligent Decision-Making:</span> AI agents make real-time decisions based on predefined rules.
          </li>
          <li>
            <span className="font-bold">Improved Security:</span> Reduce human error and ensure secure transactions through AI governance.
          </li>
          <li>
            <span className="font-bold">Scalability:</span> Easily manage large volumes of blockchain transactions with minimal latency.
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
            <span className="font-bold">Decentralized Finance (DeFi):</span> Automate trading, arbitrage, and complex financial operations.
          </li>
          <li>
            <span className="font-bold">Supply Chain Management:</span> Track asset movement, verify authenticity, and prevent fraud.
          </li>
          <li>
            <span className="font-bold">Identity Verification:</span> Enhance user verification processes using AI agents.
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
      <div className="heading">
        <h2 className="text-4xl font-bold">AI Agent Development in Blockchain</h2>
        <h4 className="text-xl font-semibold my-4">Reshape Blockchain Ecosystems with AI Agents</h4>
      </div>

        {/* Introduction */}
        <div className="content my-6">
          <h3 className="text-2xl font-bold">Introduction :</h3>
          <p>
            AI Agents are revolutionizing blockchain by enabling autonomous, intelligent decision-making without human intervention. At <strong>Alta-Futuris Solutions,</strong> we combine <strong>AI and Blockchain</strong> expertise to build intelligent AI agents that enhance <strong>security, optimize consensus mechanisms, and streamline smart contract execution</strong> in blockchain networks.
          </p>
          <p>
            As businesses move towards decentralized models, the synergy between <strong>AI and Blockchain</strong> will drive innovation, transforming industries like <strong>DeFi, Supply Chain, and Identity Verification.</strong> Our solutions ensure scalability, automation, and secure data processing in blockchain environments.
          </p>
        </div>

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

      <div className="my-6 text-center py-10">
        <img src="/assets/service5.png" alt="AI Agent Development in Blockchain Illustration" className="w-full h-[65vh] max-w-3xl mx-auto rounded-lg"/>
      </div>
    </div>
  );
};

export default AiAppDev;