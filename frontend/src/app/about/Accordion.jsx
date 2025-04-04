"use client";
import { useState } from "react";

const tabData = [
  {
    id: 1,
    category: "Conventional AI and Generative AI with LLM",
    title: "Core Programming Skills",
    description: [
      { subTitle: "Languages", content: "Python (primary language for AI/ML development), Java, C++, or R for performance-critical tasks." },
      { subTitle: "Key Libraries and Frameworks", content: "Python: TensorFlow, PyTorch, scikit-learn, NumPy, pandas. JavaScript: Node.js. C++ for low-latency AI models." },
      { subTitle: "Version Control", content: "Git, GitHub/GitLab/Bitbucket." },
    ],
  },
  {
    id: 2,
    category: "Conventional AI and Generative AI with LLM",
    title: "Understanding of AI and Machine Learning",
    description: [
      { subTitle: "Machine Learning", content: "Supervised, unsupervised, and reinforcement learning. Model selection, training, and evaluation." },
      { subTitle: "Deep Learning", content: "CNN, RNN, LSTMs, GANs, Transformers." },
      { subTitle: "Reinforcement Learning", content: "Q-learning, policy gradient methods." },
    ],
  },
  {
    id: 3,
    category: "Conventional AI and Generative AI with LLM",
    title: "Data Handling and Pre-processing",
    description: [
      { subTitle: "Data Collection and Cleaning", content: "Handling missing data, outlier detection, and imbalanced datasets." },
      { subTitle: "Feature Engineering", content: "Scaling, normalization, and dimensionality reduction (e.g., PCA)." },
      { subTitle: "Database", content: "SQL, NoSQL (MongoDB, Cassandra)." },
    ],
  },
  {
    id: 4,
    category: "Conventional AI and Generative AI with LLM",
    title: "Natural Language Processing (NLP)",
    description: [
      { subTitle: "Core Concepts", content: "Tokenization, stemming, lemmatization, POS tagging." },
      { subTitle: "Advanced Techniques", content: "Word embeddings, Transformer models." },
      { subTitle: "Libraries", content: "NLTK, spaCy, Hugging Face." },
    ],
  },
  {
    id: 5,
    category: "Conventional AI and Generative AI with LLM",
    title: "Integration and Deployment Skills",
    description: [
      { subTitle: "API Development", content: "Flask, FastAPI, Django, gRPC." },
      { subTitle: "Containerization", content: "Docker, Kubernetes. Cloud: AWS, Azure, GCP." },
    ],
  },
  {
    id: 6,
    category: "Conventional AI and Generative AI with LLM",
    title: "Knowledge of Search and Retrieval Systems",
    description: [
      { subTitle: "Information Retrieval", content: "TF-IDF, BM25, semantic search." },
      { subTitle: "Vector Search", content: "FAISS, Pinecone, Elasticsearch." },
      { subTitle: "Knowledge Graphs", content: "Neo4j, graph databases." },
    ],
  },
  {
    id: 7,
    category: "Conventional AI and Generative AI with LLM",
    title: "Algorithm Design and Optimization",
    description: [
      { subTitle: "Algorithm Development", content: "Efficient algorithm design." },
      { subTitle: "Optimization", content: "Gradient descent, parallelization, GPU/TPU use." },
    ],
  },
  {
    id: 8,
    category: "Conventional AI and Generative AI with LLM",
    title: "Software Design and Architecture",
    description: [
      { subTitle: "Microservices", content: "Modular, scalable agent design." },
      { subTitle: "State Management", content: "Session handling." },
      { subTitle: "Event-Driven Systems", content: "Real-time agent responses." },
    ],
  },
  {
    id: 9,
    category: "Conventional AI and Generative AI with LLM",
    title: "Mathematics and Statistics",
    description: [
      { subTitle: "Linear Algebra", content: "Matrices, tensors, eigenvalues." },
      { subTitle: "Statistics", content: "Bayes, distributions, hypothesis testing." },
      { subTitle: "Calculus", content: "Gradients, derivatives for backpropagation." },
    ],
  },
  {
    id: 10,
    category: "Conventional AI and Generative AI with LLM",
    title: "User Interaction Design",
    description: [
      { subTitle: "UX/UI Basics", content: "Intuitive interface design." },
      { subTitle: "Conversational Design", content: "Dialogue systems." },
      { subTitle: "Voice Interface", content: "Alexa, Google Assistant." },
    ],
  },
  {
    id: 11,
    category: "Conventional AI and Generative AI with LLM",
    title: "Security and Ethics",
    description: [
      { subTitle: "Data Privacy", content: "Encryption, GDPR compliance." },
      { subTitle: "Bias Mitigation", content: "Fairness and accountability." },
      { subTitle: "Ethical AI Practices", content: "Transparency, fairness in design." },
    ],
  },
  {
    id: 12,
    category: "Conventional AI and Generative AI with LLM",
    title: "Soft Skills",
    description: [
      { subTitle: "Problem-Solving", content: "Analytical thinking." },
      { subTitle: "Collaboration", content: "Teamwork and communication." },
      { subTitle: "Continuous Learning", content: "Keeping up with AI trends." },
    ],
  },
  {
    id: 13,
    category: "Conventional AI and Generative AI with LLM",
    title: "Additional Application-Specific Skills",
    description: [
      { subTitle: "IoT", content: "Protocols and edge integration." },
      { subTitle: "Robotics", content: "ROS framework and automation." },
    ],
  },
  {
    id: 14,
    category: "Salesforce services ",
    title: "Generative AI in Salesforce: Agentforce",
    description: [
      { subTitle: "", content: "" },
      { subTitle: "", content: "" },
    ],
  },
  {
    id: 15,
    category: "Salesforce services ",
    title: "Salesforce Implementations: Sales, Service, Marketing, Health, IOT Clouds",
    description: [
      { subTitle: "", content: "" },
      { subTitle: "", content: "" },
    ],
  },
  {
    id: 16,
    category: "Salesforce services ",
    title: "Enterprise Data and Systems Integrations: Data cloud",
    description: [
      { subTitle: "", content: "" },
      { subTitle: "", content: "" },
    ],
  },
  {
    id: 17,
    category: "Salesforce services ",
    title: "Salesforce Migration, Configuration, and Customization",
    description: [
      { subTitle: "", content: "" },
      { subTitle: "", content: "" },
    ],
  },
  {
    id: 18,
    category: "Salesforce services ",
    title: "Salesforce Custom Application Development",
    description: [
      { subTitle: "", content: "" },
      { subTitle: "", content: "" },
    ],
  },
  {
    id: 19,
    category: "Salesforce services ",
    title: "Communities Implementation",
    description: [
      { subTitle: "", content: "" },
      { subTitle: "", content: "" },
    ],
  },
  {
    id: 20,
    category: "Salesforce services ",
    title: "Managed Package Development and deployment in AppExchange ",
    description: [
      { subTitle: "", content: "" },
      { subTitle: "", content: "" },
    ],
  },
  {
    id: 21,
    category: "Salesforce services ",
    title: "Custom Lightning Components",
    description: [
      { subTitle: "", content: "" },
      { subTitle: "", content: "" },
    ],
  },
  {
    id: 22,
    category: "Salesforce services ",
    title: "UI/UX Enhancements using LDS (Lightning Data Service)",
    description: [
      { subTitle: "", content: "" },
      { subTitle: "", content: "" },
    ],
  },
  {
    id: 23,
    category: "Salesforce services ",
    title: "Integration using Mulesoft",
    description: [
      { subTitle: "", content: "" },
      { subTitle: "", content: "" },
    ],
  },
  {
    id: 24,
    category: "Salesforce services ",
    title: "Analytics using Tableau and Einstein Analytics",
    description: [
      { subTitle: "", content: "" },
      { subTitle: "", content: "" },
    ],
  },
  {
    id: 25,
    category: "Blockchain based Application Development",
    title: "Core Blockchain Skills",
    description: [
      {  content: "Understanding of Blockchain Fundamentals" },
      { content: "  Distributed Ledger Technology (DLT)  " },
      { content: "  Consensus Mechanisms (PoW, PoS, DPoS, PBFT, etc.)  " },
      { content: "Cryptography (Hashing, Digital Signatures, Public/Private Keys)  " },
      { content: "  Smart Contracts & Decentralized Applications (DApps)  " },
    ],
  },
  {
    id: 26,
    category: "Blockchain based Application Development",
    title: "Blockchain Platforms & Protocols",
    description: [
      {  content: "  Ethereum (Solidity, EVM, Web3.js, Ethers.js)  " },
      { content: "Hyperledger Fabric (Go, Node.js, Chaincode)  " },
      { content: "  Binance Smart Chain (BSC), Polkadot, Solana, Cardano, etc." },
    ],
  },
  {
    id: 27,
    category: "Blockchain based Application Development",
    title: "Smart Contract Development",
    description: [
      {  content: "Writing secure & gas-efficient smart contracts (Solidity, Vyper, Rust)  " },
      { content: "Auditing & testing (MythX, Slither, Hardhat, Truffle)  " },
      
    ],
  },
  {
    id: 28,
    category: "Blockchain based Application Development",
    title: "Decentralized Application (DApp) Development",
    description: [
      {  content: "Frontend (React.js, Next.js, Vue.js) + Blockchain integration  " },
      { content: "Backend (Node.js, Python, Go) for off-chain logic  " },
      { content: "Web3 libraries (Web3.js, Ethers.js, Web3.py)  " },
    ],
  },
  {
    id: 29,
    category: "Blockchain based Application Development",
    title: " Software Development & DevOps Skills",
    description: [
      {  subTitle: "Programming Languages" },
      { content: "JavaScript/TypeScript (for DApps & tools)  " },
      { content: "Python (for scripting & automation)  " },
      {  content: "Go, Rust, Java (for enterprise blockchain solutions)  " },
      {  subTitle: "Backend & API Development" },
      {  content: "REST APIs & GraphQL for blockchain interactions  " },
      { content: "Microservices architecture for scalable DApps  " },
      {  subTitle: "DevOps & Cloud Computing  " },
      {  content: "Docker & Kubernetes for containerization    " },
      { content: "AWS, Azure, GCP for blockchain node deployment  " },
      {  content: "CI/CD pipelines for smart contract deployment  " },
    ],
  },
  {
    id: 30,
    category: "Blockchain based Application Development",
    title: " Security & Testing",
    description: [
      {  subTitle: "Blockchain Security Best Practices" },
      { content: "Smart contract vulnerabilities (reentrancy, overflow, etc.)  " },
      { content: "Penetration testing & auditing tools (Mythril, Slither)  " },
      {  subTitle: "Testing Frameworks" },
      {  content: "Hardhat, Truffle, Foundry for Ethereum  " },
      { content: "Mocha, Chai for unit testing  " },

    ],
  },
  {
    id: 31,
    category: "Blockchain based Application Development",
    title: "Decentralized Technologies",
    description: [
      {  content: "Decentralized Storage (IPFS, Filecoin, Arweave)  " },
      { content: "Oracles (Chainlink, Band Protocol) for off-chain data  " },
      { content: "Identity & Access Management (DID, SSI)  " },
    ],
  },
  {
    id: 32,
    category: "Blockchain based Application Development",
    title: "Domain Knowledge",
    description: [
      {  content: "Problem-Solving & Analytical Thinking " },
      { content: "Understanding of DeFi, NFTs, DAOs, and Web3 Trends" },
      { content: "Collaboration & Agile Development" },
    ],
  },
  {
    id: 33,
    category: "Blockchain based Application Development",
    title: "Industry-Specific Knowledge",
    description: [
      {  content: "Finance & Payments (for DeFi applications)  " },
      { content: "Supply Chain & Logistics (for traceability solutions)  " },
      { content: "Healthcare & Identity (for secure data management)  " },
    ],
  },
  {
    id: 34,
    category: "Blockchain based Application Development",
    title: "Emerging Trends Skills",
    description: [
      {  content: "Zero-Knowledge Proofs (ZKPs) for privacy  " },
      { content: "Layer 2 Solutions (Polygon, Optimism, Arbitrum)  " },
      { content: "Cross-Chain Interoperability (Cosmos, Polkadot)  " },
    ],
  },
 
];

const categories = ["Conventional AI and Generative AI with LLM", "Salesforce services ", "Blockchain based Application Development"];

export default function TabInfo() {
  const [selectedCategory, setSelectedCategory] = useState("Conventional AI and Generative AI with LLM");
  const [activeTab, setActiveTab] = useState(0);

  const filteredTabs = tabData.filter(tab => tab.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10">
      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`w-full sm:w-auto px-4 py-2 border  border-yellow-500 rounded-xl transition-colors duration-300 ${
              selectedCategory === cat ? "bg-blueColor text-white" : "border-gray-300 hover:bg-brownColor hover:text-white"
            }`}
            onClick={() => {
              setSelectedCategory(cat);
              setActiveTab(0);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Tabs */}
        <div className="w-full md:w-1/4">
          {filteredTabs.map((item, index) => (
            <button
              key={index}
              className={`py-1 my-2 px-4 text-left w-full font-semibold transition-all border-l-4 ${
                activeTab === index ? "border-blue-500 text-blue-600 bg-gray-100" : "border-transparent text-gray-900 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="py-14 px-10 border rounded-lg shadow-lg text-lg bg-[#6328A6] text-white text-left w-full">
          <h3 className="md:text-4xl text-2xl font-bold text-white text-center">
            {filteredTabs[activeTab].title}
          </h3>
          <ul className="mt-8 space-y-6">
            {filteredTabs[activeTab].description.map((desc, i) => (
              <li key={i} className="text-lg">
                <strong className="text-xl">{desc.subTitle}: </strong>
                {desc.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
