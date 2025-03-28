"use client";
import { useState } from "react";

const tabData = [
    {
      id: 1,
      title: "Core Programming Skills",
      description: [
        { subTitle: "Languages", content: "Python (primary language for AI/ML development), Java, C++, or R for performance-critical tasks." },
        { subTitle: "Key Libraries and Frameworks", content: "Python: TensorFlow, PyTorch, scikit-learn, NumPy, pandas. JavaScript: Node.js (for API integration and front-end AI apps). C++: For low-latency AI models and edge devices." },
        { subTitle: "Version Control", content: "Git, GitHub/GitLab/Bitbucket." },
      ],
    },
    {
      id: 2,
      title: "Understanding of AI and Machine Learning",
      description: [
        { subTitle: "Machine Learning", content: "Supervised, unsupervised, and reinforcement learning. Model selection, training, and evaluation. Common algorithms: Linear regression, decision trees, random forests, SVM, neural networks." },
        { subTitle: "Deep Learning", content: "CNN, RNN, LSTMs, GANs, Transformers. Frameworks: TensorFlow, PyTorch, Keras." },
        { subTitle: "Reinforcement Learning", content: "(if applicable to agent autonomy) Q-learning, policy gradient methods." },
      ],
    },
    {
      id: 3,
      title: "Data Handling and Pre-processing",
      description: [
        { subTitle: "Data Collection and Cleaning", content: "Handling missing data, outlier detection, and imbalanced datasets." },
        { subTitle: "Feature Engineering", content: "Scaling, normalization, and dimensionality reduction (e.g., PCA)." },
        { subTitle: "Database", content: "SQL databases for structured data. NoSQL (MongoDB, Cassandra) for unstructured or semi-structured data." },
      ],
    },
    {
      id: 4,
      title: "Natural Language Processing (NLP)",
      description: [
        { subTitle: "Core Concepts", content: "Tokenization, stemming, lemmatization. Part-of-speech tagging, named entity recognition." },
        { subTitle: "Advanced Techniques", content: "Word embeddings (Word2Vec, GloVe, FastText). Transformer models (BERT, GPT, T5)." },
        { subTitle: "Libraries", content: "NLTK, spaCy, Hugging Face Transformers." },
      ],
    },
    {
      id: 5,
      title: "Integration and Deployment Skills",
      description: [
        { subTitle: "API Development", content: "RESTful APIs using Flask, FastAPI, or Django. gRPC for high-performance systems." },
        { subTitle: "Containerization and Orchestration", content: "Docker for packaging applications. Kubernetes for scalable deployments. Cloud Platforms like AWS, Azure, Google Cloud for AI model hosting." },
      ],
    },
    {
      id: 6,
      title: "Knowledge of Search and Retrieval Systems",
      description: [
        { subTitle: "Information Retrieval", content: "TF-IDF, BM25, semantic search." },
        { subTitle: "Vector Search", content: "Embedding models and tools like FAISS, Pinecone, or Elasticsearch." },
        { subTitle: "Knowledge Graphs", content: "Design and integration of graph databases like Neo4j." },
      ],
    },
    {
      id: 7,
      title: "Algorithm Design and Optimization",
      description: [
        { subTitle: "Algorithm Development", content: "Designing efficient algorithms for problem-solving." },
        { subTitle: "Optimization Techniques", content: "Gradient descent, hyperparameter tuning. Parallelization and acceleration (e.g., using GPUs or TPUs)." },
      ],
    },
    {
      id: 8,
      title: "Software Design and Architecture",
      description: [
        { subTitle: "Microservices Architecture", content: "Breaking down agents into modular, scalable components." },
        { subTitle: "State Management", content: "Managing agent states for context-awareness and session handling." },
        { subTitle: "Event-Driven Systems", content: "Developing agents that react to real-time events." },
      ],
    },
    {
      id: 9,
      title: "Mathematics and Statistics",
      description: [
        { subTitle: "Linear Algebra", content: "Matrices, tensors, eigenvalues/eigenvectors (essential for deep learning)." },
        { subTitle: "Probability and Statistics", content: "Bayes theorem, distributions, and hypothesis testing." },
        { subTitle: "Calculus", content: "Derivatives, gradients (for backpropagation in neural networks)." },
      ],
    },
    {
      id: 10,
      title: "User Interaction Design",
      description: [
        { subTitle: "UX/UI Basics", content: "Creating intuitive interfaces for users." },
        { subTitle: "Conversational Design", content: "Crafting natural dialogues and fallback mechanisms." },
        { subTitle: "Voice Interface Development", content: "Working with tools like Amazon Alexa Skills or Google Assistant." },
      ],
    },
    {
      id: 11,
      title: "Security and Ethics",
      description: [
        { subTitle: "Data Privacy and Security", content: "Encryption, authentication, and compliance with laws like GDPR." },
        { subTitle: "Bias Mitigation", content: "Identifying and addressing biases in datasets and models." },
        { subTitle: "Ethical AI Practices", content: "Ensuring fairness, transparency, and accountability." },
      ],
    },
    {
      id: 12,
      title: "Soft Skills",
      description: [
        { subTitle: "Problem-Solving", content: "Applying analytical thinking to complex challenges." },
        { subTitle: "Collaboration", content: "Working with data scientists, domain experts, and stakeholders." },
        { subTitle: "Continuous Learning", content: "Staying updated with the latest AI research and tools." },
      ],
    },
    {
      id: 13,
      title: "Additional Skills Based on Application",
      description: [
        { subTitle: "IoT Integration (for edge AI agents)", content: "Knowledge of IoT protocols and frameworks." },
        { subTitle: "Robotics (for physical agents)", content: "Knowledge of robotics frameworks like ROS." },
      ],
    },
  ];
  

export default function TabInfo() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-7xl  mx-auto p-6 md:p-10">
      <div className="flex flex-col md:flex-row gap-6 ">
        {/* Left Tab Navigation */}
        <div className="w-full md:w-1/4">
          {tabData.map((item, index) => (
           <button
           key={index}
           className={`py-1 my-2 text- px-4 text-left w-full font-semibold transition-all border-l-4 ${activeTab === index ? "border-blue-500 text-blue-600 bg-gray-100" : "border-transparent text-gray-900 hover:bg-gray-100"}`}
           onClick={() => setActiveTab(index)}
         >
           {item.title}
         </button>
          ))}
        </div>
        {/* Tab Content */}
        <div className="py-14 px-10 border rounded-lg shadow-lg text-lg bg-[#6328A6] text-white text-left w-full ">
          <h3 className="md:text-4xl text-2xl font-bold text-white text-center">{tabData[activeTab].title}</h3>
          <ul className="mt-8 space-y-6">
            {tabData[activeTab].description.map((desc, i) => (
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
