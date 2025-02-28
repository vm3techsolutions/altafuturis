"use client";
import {useState} from 'react'
import { FaAnglesUp } from "react-icons/fa6";
import { FaAnglesDown } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = () =>{
    const accordionData = [
        {
            id: 1,
            title: "Core Programming Skills",
            description: [
                {
                    subTitle: "Languages",
                    content: "Python (primary language for AI/ML development), Java, C++, or R for performance-critical tasks."
                },
                {
                    subTitle: "Key Libraries and Frameworks",
                    content: "Python: TensorFlow, PyTorch, scikit-learn, NumPy, pandas. JavaScript: Node.js (for API integration and front-end AI apps).C++: For low-latency AI models and edge devices."
                },
                {
                    subTitle: "Version Control",
                    content: "Git, GitHub/GitLab/Bitbucket."
                }
            ]
        },
        {
            id: 2,
            title: "Understanding of AI and Machine Learning",
            description: [
                {
                    subTitle: "Machine Learning",
                    content: "Supervised, unsupervised, and reinforcement learning. Model selection, training, and evaluation. Common algorithms: Linear regression, decision trees, random forests, SVM, neural networks."
                },
                {
                    subTitle: "Deep Learning",
                    content: "CNN, RNN, LSTMs, GANs, Transformers. Frameworks: TensorFlow, PyTorch, Keras."
                },
                {
                    subTitle: "Reinforcement Learning",
                    content: "(if applicable to agent autonomy) Q-learning, policy gradient methods."
                }
            ]
        },
        {
            id: 3,
            title: "Data Handling and Pre-processing",
            description: [
                {
                    subTitle: "Data Collection and Cleaning",
                    content: "Handling missing data, outlier detection, and imbalanced datasets."
                },
                {
                    subTitle: "Feature Engineering",
                    content: "Scaling, normalization, and dimensionality reduction (e.g., PCA)."
                },
                {
                    subTitle: "Database",
                    content: "Databases for structured data. NoSQL (MongoDB, Cassandra) for unstructured or semi-structured data."
                }
            ]
        },
        {
            id: 4,
            title: "Natural Language Processing (NLP) (for conversational agents or language-related tasks)",
            description: [
                {
                    subTitle: "Core Concepts",
                    content: "Tokenization, stemming, lemmatization. Part-of-speech tagging, named entity recognition."
                },
                {
                    subTitle: "Advanced Techniques",
                    content: "Word embeddings (Word2Vec, GloVe, FastText).Transformer models (BERT, GPT, T5)."
                },
                {
                    subTitle: "Libraries",
                    content: "NLTK, spaCy, Hugging Face Transformers."
                }
            ]
        },
        {
            id: 5,
            title: "Integration and Deployment Skills",
            description: [
                {
                    subTitle: "API Development",
                    content: "RESTful APIs using Flask, FastAPI, or Django. gRPC for high-performance systems."
                },
                {
                    subTitle: "Containerization and Orchestration",
                    content: "Docker for packaging applications. Kubernetes for scalable deployments. Cloud Platforms, Azure, Google Cloud for AI model hosting.AI-specific services like AWS Sage Maker, Azure ML, or Google AI Platform."
                }
            ]
        },
        {
            id: 6,
            title: "Knowledge of Search and Retrieval Systems (For Retrieval-Augmented Generation and similar AI applications)",
            description: [
                {
                    subTitle: "Information Retrieval",
                    content: "TF-IDF, BM25, semantic search."
                },
                {
                    subTitle: "Vector Search",
                    content: "Embedding models and tools like FAISS, Pinecone, or Elastic search."
                },
                {
                    subTitle: "Knowledge Graphs",
                    content: "Design and integration of graph databases like Neo4j."
                }
            ]
        },
        {
            id: 7,
            title: "Algorithm Design and Optimization",
            description: [
                {
                    subTitle: "Algorithm Development",
                    content: "Designing efficient algorithms for problem-solving."
                },
                {
                    subTitle: "Optimization Techniques",
                    content: "Gradient descent, hyperparameter tuning. Parallelization and acceleration (e.g., using GPUs or TPUs)."
                }
            ]
        },
        {
            id: 8,
            title: "Software Design and Architecture",
            description: [
                {
                    subTitle: "Microservices Architecture",
                    content: "Breaking down agents into modular, scalable components."
                },
                {
                    subTitle: "State Management",
                    content: "Managing agent states for context-awareness and session handling."
                },
                {
                    subTitle: "Event-Driven Systems",
                    content: "Developing agents that react to real-time events."
                }
            ]
        },
        {
            id: 9,
            title: "Mathematics and Statistics",
            description: [
                {
                    subTitle: "Linear Algebra",
                    content: "Matrices, tensors, eigenvalues/eigenvectors (essential for deep learning)."
                },
                {
                    subTitle: "Probability and Statistics",
                    content: "Bayes theorem, distributions, and hypothesis testing."
                },
                {
                    subTitle: "Calculus",
                    content: "Derivatives, gradients (for backpropagation in neural networks)."
                }
            ]
        },
        {
            id: 10,
            title: "User Interaction Design (if building conversational or interactive agents)",
            description: [
                {
                    subTitle: "UX/UI Basics",
                    content: "Creating intuitive interfaces for users."
                },
                {
                    subTitle: "Conversational Design",
                    content: "Crafting natural dialogues and fallback mechanisms."
                },
                {
                    subTitle: "Voice Interface Development",
                    content: "Working with tools like Amazon Alexa Skills or Google Assistant."
                }
            ]
        },
        {
            id: 11,
            title: "Security and Ethics",
            description: [
                {
                    subTitle: "Data Privacy and Security",
                    content: "Encryption, authentication, and compliance with laws like GDPR."
                },
                {
                    subTitle: "Bias Mitigation",
                    content: "Identifying and addressing biases in datasets and models."
                },
                {
                    subTitle: "Ethical AI Practices",
                    content: "Ensuring fairness, transparency, and accountability."
                }
            ]
        },
        {
            id: 12,
            title: "Soft Skills",
            description: [
                {
                    subTitle: "Problem-Solving",
                    content: "Applying analytical thinking to complex challenges."
                },
                {
                    subTitle: "Collaboration",
                    content: "Working with data scientists, domain experts, and stakeholders."
                },
                {
                    subTitle: "Continuous Learning",
                    content: "Staying updated with the latest AI research and tools."
                }
            ]
        },
        {
            id: 13,
            title: "Additional Skills Based on Application",
            description: [
                {
                    subTitle: "IoT Integration (for edge AI agents)",
                    content: "Knowledge of IoT protocols and frameworks."
                },
                {
                    subTitle: "Robotics (for physical agents)",
                    content: "Knowledge of robotics frameworks like ROS."
                }
            ]
        }
    ]

    const [activeIndex, setActiveIndex] = useState(accordionData[0]);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

return (
    <>
      {/* Accordion Section */}
      <div className='max-w-6xl py-6'>
        {accordionData.map((item, index) => (
            <div className='border-b border-gray-300 p-2'>
                {/* Tab Title */}
            <motion.div
            key={index}
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            viewport={{once: true, amount: 0.3}}
            transition={{duration: 0.6}}
            >
            <button
                onClick={()=>toggleAccordion(index)}
                className="w-full text-left p-2 font-medium flex justify-between items-center">
                {item.id}. {item.title}

                <span className="text-white bg-brownColor text-sm px-1 py-2 rounded-md ">{activeIndex === index ? <FaAnglesUp /> : <FaAnglesDown/> }</span>
                </button>
            
                

                {/* Tab Content */}
                <AnimatePresence>
                {activeIndex === index && (
                    <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="px-6 text-gray-700 overflow-hidden"
                >
                    <div className=" text-gray-700">
                    <ul className="list-[square] marker:text-blueColor pl-6 space-y-2">
                    {item.description.map((subItem, i) => (
                        <tr>
                            <li>
                                <td key={i} className="font-medium py-2">{subItem.subTitle} </td>
                            </li>
                            <td className='px-2 font-medium'>:</td>
                            <td key={i} className="">{subItem.content} </td>
                        </tr>  
                        
                    ))}
                      
                    </ul>
                  </div>
                  </motion.div>
                )}
                </AnimatePresence>
                </motion.div>
            </div>
        ))}
      </div>
    </>
  )
}

export default  Accordion;
