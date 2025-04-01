"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

const agentforceSubServices = [
  {
    title: "Agentforce Readiness Assessment",
    content:
      "Build a robust foundation for AI integration in Salesforce by aligning technologies, optimizing data, and empowering team readiness. Conduct a comprehensive Salesforce audit to evaluate current capabilities. Identify key business objectives and AI opportunities. Access a detailed AI readiness assessment report from Alta-Futuris Solutions. Receive a customized data architecture recommendation and AI integration plan.",
  },
  {
    title: "Agentforce POCs",
    content:
      "Validate innovative Agentforce use cases with tailored proofs of concept (PoCs) designed to demonstrate tangible value for your business. Explore Agentforce capabilities in real-world scenarios before committing to full-scale implementation.",
  },
  {
    title: "Agentforce implementation with business case",
    content:
      "Scale your AI capabilities to transform operational efficiency and business growth with Salesforce generative AI tools. Develop a tailored proof of concept for Agentforce aligned with business priorities. Launch fully operational generative AI applications. Monitor model performance to improve predictions. Enhance genAI features through iterative feedback and evolving business needs.",
  },
  {
    title: "Optimize business with Agentforce",
    content:
      "Enhance innovation, decision-making, and customer service by deploying predictive AI to maximize returns from your Salesforce platform. Optimize data for predictive analytics, using tools like MuleSoft and Data Cloud. Deploy predictive models to generate actionable insights via real-time forecasting. Integrate genAI seamlessly into Salesforce workflows. Boost adoption rates with targeted training workshops from Alta-Futuris Solutions.",
  },
];

const aiDevelopementBlockchain = [
  {
    id: 1,
    title: "Initial Consultation and Requirements Gathering",
    img: "/assets/blockchainSubServices/InitialConsultationandRequirementsGathering.png",
    content:
      "Needs Assessment: Understanding the client's business goals, challenges, and specific requirements for integrating AI with blockchain. Use Case Identification: Identifying and prioritizing use cases where AI agents can add the most value in a blockchain context. Stakeholder Interviews: Engaging with key stakeholders to gather insights and expectations.",
  },
  {
    id: 2,
    title: "Project Planning and Strategy",
    img: "/assets/blockchainSubServices/ProjectPlanningandStrategy.png",
    content:
      "Project Scope Definition: Clearly defining the scope, objectives, and deliverables of the AI agent development project. Timeline and Milestones: Establishing a project timeline with key milestones and deadlines. Resource Allocation: Determining the necessary resources, including team members, tools, and technologies.",
  },
  {
    id: 3,
    title: "Blockchain Platform Selection",
    img: "/assets/blockchainSubServices/BlockchainPlatformSelection.png",
    content:
      "Platform Evaluation: Evaluating different blockchain platforms (ex- Ethereum, Hyperledger, Binance Smart Chain) to determine the best fit for the project. Consensus Mechanism: Choosing an appropriate consensus mechanism (ex- Proof of Work, Proof of Stake) based on the project requirements. Smart Contract Language: Selecting a suitable smart contract programming language (ex- Solidity, Vyper).",
  },
  {
    id: 4,
    title: "AI Agent Design and Architecture",
    img: "/assets/blockchainSubServices/AIAgentDesignandArchitecture.png",
    content:
      "Agent Architecture Design: Designing the overall architecture of the AI agent, including decision-making frameworks, learning algorithms, and interaction protocols. Smart Contract Integration: Designing smart contracts that will interact with the AI agent for automated decision-making and transactions. Data Flow Design: Mapping out how data will flow between the AI agent, blockchain, and other systems.",
  },
  {
    id: 5,
    title: "Data Management and Integration",
    img: "/assets/blockchainSubServices/DataManagementandIntegration.png",
    content:
      "Data Requirements: Identifying the types and sources of data needed to train and operate the AI agent. Data Collection: Gathering and compiling relevant datasets from various sources. Data Cleaning and Preprocessing: Cleaning, normalizing, and preprocessing data to ensure it is suitable for training AI models. On-Chain and Off-Chain Data: Managing the integration of on-chain (blockchain) and off-chain data sources.",
  },
  {
    id: 6,
    title: "Model Development and Training",
    img: "/assets/blockchainSubServices/ModelDevelopmentandTraining.png",
    content:
      "Algorithm Selection: Choosing appropriate machine learning algorithms and models based on the problem domain. Model Training: Training AI models using the prepared datasets, often involving techniques like supervised, unsupervised, or reinforcement learning. Hyperparameter Tuning: Optimizing model parameters to improve performance and accuracy.",
  },
  {
    id: 7,
    title: "Smart Contract Development",
    img: "/assets/blockchainSubServices/SmartContractDevelopment.png",
    content:
      "Contract Design: Designing smart contracts that will interact with the AI agent for automated decision-making and transactions. Contract Coding: Writing and testing smart contract code using the selected programming language. Security Audits: Conducting security audits to identify and mitigate vulnerabilities in the smart contracts.",
  },
  {
    id: 8,
    title: "Integration with Blockchain",
    img: "/assets/blockchainSubServices/IntegrationwithBlockchain.png",
    content:
      "API Development: Creating APIs to facilitate communication between the AI agent and the blockchain. System Integration: Ensuring seamless integration with the blockchain network, including nodes, wallets, and other components. Middleware Development: Developing middleware components if needed to bridge gaps between different systems and technologies.",
  },
  {
    id: 9,
    title: "Testing and Validation",
    img: "/assets/blockchainSubServices/TestingandValidation.png",
    content:
      "Unit Testing: Conducting unit tests to validate individual components of the AI agent and smart contracts. Integration Testing: Testing the AI agent within the broader blockchain system to ensure seamless operation and data flow. User Acceptance Testing (UAT): Engaging end-users to test the integrated system and provide feedback. Performance Testing: Evaluating the performance of the integrated system under various conditions and loads.",
  },
  {
    id: 10,
    title: "Deployment",
    img: "/assets/blockchainSubServices/Deployment.png",
    content:
      "Deployment Planning: Developing a deployment plan that includes roll-out strategies, timelines, and contingency plans. Environment Setup: Setting up the necessary environments (development, testing, production) for deployment. Go-Live Support: Providing support during the initial go-live phase to address any issues that arise.",
  },
  {
    id: 11,
    title: "Monitoring and Maintenance",
    img: "/assets/blockchainSubServices/MonitoringandMaintenance.png",
    content:
      "Performance Monitoring: Continuously monitoring the performance of the AI agent and smart contracts on the blockchain. Error Handling: Implementing mechanisms for detecting and handling errors or anomalies. Regular Updates: Providing regular updates and improvements to the AI agent and smart contracts based on user feedback and performance data.",
  },
  {
    id: 12,
    title: "User Training and Documentation",
    img: "/assets/blockchainSubServices/UserTrainingandDocumentation.png",
    content:
      "Training Programs: Developing and conducting training programs for end-users and administrators. Documentation: Creating comprehensive documentation, including user manuals, technical guides, and API documentation. Knowledge Transfer: Ensuring that the client’s team is equipped with the knowledge and skills to maintain and evolve the AI agent. ",
  },
  {
    id: 13,
    title: "Security and Compliance",
    img: "/assets/blockchainSubServices/SecurityandCompliance.png",
    content:
      "Data Security: Implementing robust security measures to protect data used by the AI agent and stored on the blockchain. Regulatory Compliance: Ensuring that the AI agent and blockchain solution comply with relevant laws and regulations, such as GDPR, CCPA, or industry-specific standards. Access Control: Setting up access control mechanisms to restrict who can interact with or modify the AI agent and smart contracts. ",
  },
  {
    id: 14,
    title: "Scalability and Future-Proofing",
    img: "/assets/blockchainSubServices/ScalabilityandFutureProofing .png",
    content:
      "Scalability Planning: Designing the AI agent and blockchain solution to scale with the business, including cloud-based deployment and resource management. Future-Proofing: Ensuring that the AI agent and blockchain solution can adapt to future technological advancements and changing business needs. Modular Design: Using a modular design approach to facilitate easy updates and enhancements. ",
  },
  {
    id: 15,
    title: "Custom Features and Capabilities",
    img: "/assets/blockchainSubServices/CustomFeaturesandCapabilities.png",
    content:
      "Natural Language Processing (NLP): Implementing NLP capabilities for tasks like language understanding, sentiment analysis, and text generation. Computer Vision: Adding computer vision capabilities for image and video analysis. Autonomous Decision-Making: Developing algorithms for autonomous decision-making based on real-time data. Personalization: Creating personalized experiences for users based on their preferences and behavior.",
  },
  {
    id: 16,
    title: "Post-Deployment Support",
    img: "/assets/blockchainSubServices/PostDeploymentSupport.png",
    content:
      "Technical Support: Offering ongoing technical support and troubleshooting for the AI agent and blockchain solution. Performance Optimization: Continuously optimizing the AI agent’s performance based on real-world usage data. Feature Enhancements: Adding new features and capabilities based on user feedback and evolving business needs.",
  },
  {
    id: 17,
    title: "Reporting and Analytics",
    img: "/assets/blockchainSubServices/ReportingandAnalytics.png",
    content:
      "Performance Metrics: Defining and tracking key performance indicators (KPIs) for the AI agent and blockchain solution. Analytics Dashboards: Creating dashboards to visualize performance data and insights. Regular Reporting: Providing regular reports on the AI agent’s performance, usage, and impact on business outcomes.",
  },
  {
    id: 18,
    title: "Collaboration and Communication",
    img: "/assets/blockchainSubServices/CollaborationandCommunication.png",
    content:
      "Regular Updates: Keeping stakeholders informed with regular updates on project progress. Feedback Loops: Establishing feedback loops to gather input from users and stakeholders. Collaborative Development: Working closely with the client’s team throughout the development process.",
  },
  {
    id: 19,
    title: "Cost Management",
    img: "/assets/blockchainSubServices/CostManagement.png",
    content:
      "Budget Planning: Developing a budget for the AI agent and blockchain development project. Cost Tracking: Monitoring and managing costs throughout the project lifecycle. ROI Analysis: Conducting return on investment (ROI) analysis to evaluate the financial impact of the AI agent and blockchain solution.",
  },
];

export default function Subservice2() {
  const [selectedCard, setSelectedCard] = useState(aiDevelopementBlockchain[0]);
  const [activeTab, setActiveTab] = useState(0);
  const pathname = usePathname();
  const slug = pathname.split("/").pop() || null;

  if (!slug) return null;

  if (slug === "salesforce-agentforce-consulting") {
    return (
      <div className="px-6 md:p-10">
  <div className="text-left">
    <div className="flex flex-col md:flex-row items-start justify-start gap-6 mt-6">
      <div className="w-full md:w-1/2 border-r border-gray-300">
        {agentforceSubServices.map((item, index) => (
          <button
            key={index}
            className={`py-4 my-2 px-4 text-left text-lg w-full font-semibold transition-all border-l-4 ${
              activeTab === index
                ? "border-blue-500 text-blue-600 bg-gray-100"
                : "border-transparent text-gray-900 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="py-14 px-8 border rounded-lg shadow-lg bg-[#6328A6] text-white text-left w-full">
        <ul className="list-none text-lg space-y-2">
          {agentforceSubServices[activeTab].content
            .split(".")
            .filter((sentence) => sentence.trim() !== "") // Remove empty entries
            .map((sentence, index) => {
              const parts = sentence.split(":"); // Split at colon
              return (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-white inline-block mt-2"></span>
                  <span>
                    {parts.length > 1 ? (
                      <strong>{parts[0]}:</strong>
                    ) : (
                      parts[0]
                    )}
                    {parts.length > 1 && parts[1]}
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  </div>
</div>

    );
  } else if (slug === "ai-agent-developement-in-blockchain") {
    return (
      <div className=" md:py-10 ">
        <div className="text-center">
          <p className="px-12 text-lg mb-4">
            AI Agent development services in the context of blockchain involve
            creating intelligent agents that leverage the unique capabilities of
            blockchain technology, such as decentralization, transparency, and
            security. These AI agents can be used for a variety of applications,
            including smart contracts, decentralized finance (DeFi), supply
            chain management, identity verification, and more. Here are the key
            details and components typically involved in AI Agent development
            services for blockchain:
          </p>
          <div className="flex flex-col md:flex-row h-full bg-purple-800 text-white py-6 ">
            {/* Left Side - Selected Card Details */}
            <div className="w-full md:w-1/3 p-6 rounded-xl flex flex-col items-center space-y-6">
            <img src={selectedCard.img} alt={selectedCard.title} className=" w-14 h-14 mx-auto text-yellow-600 " />
        <h2 className="text-2xl text-center font-bold mt-4">
          {selectedCard?.title}
        </h2>
        <ul className="mt-2 text-start space-y-3 list-disc pl-5">
          {selectedCard?.content
            ? selectedCard.content.split(". ").map((point, index) =>
                point ? <li key={index}>{point}.</li> : null
              )
            : null}
        </ul>
      </div>

            {/* Right Side - Card Selection */}
            <div className="w-full md:w-2/3 flex flex-wrap gap-4 p-6 justify-center">
              {aiDevelopementBlockchain.map((card, index) => (
                <div
                  key={index}
                  className={`h-28 w-52 bg-white text-black p-4 rounded-lg flex flex-col justify-center items-center cursor-pointer transition-transform ${
                    selectedCard.id === card.id
                      ? "scale-110 border-2 border-yellow-500"
                      : "hover:scale-110"
                  }`}
                  onClick={() => setSelectedCard(card)}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-8 h-8 transition-transform hover:scale-125"
                  />
                  <p className="mt-2 text-center font-semibold text-sm">
                    {card.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          
          
        </div>
      </div>
    );
  } else {
    return <div className="p-6 text-center text-gray-500"></div>;
  }
}
