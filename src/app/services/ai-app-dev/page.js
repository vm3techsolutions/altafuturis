"use client"
import { useState } from "react";

const aiAgentServices = [
  {
    title: "AI Agent Consultation",
    content:
      "Defining the scope, goals, and roadmap for AI agent development.",
  },
  {
    title: "Custom AI Agent Development",
    content:
      "Designing AI agents tailored to your industry and business needs.",
  },
  {
    title: "AI Agent Integration",
    content:
      "Seamlessly connecting AI agents with your CRM, ERP, and business platforms.",
  },
  {
    title: "Support & Maintenance",
    content:
      "Providing long-term support for scalability and performance monitoring.",
  },
];
const AiAppDev = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="relative py-3 px-2">
        {/* Heading */}
        <div className="heading">
          <h2 className="text-4xl font-bold">
            Generative AI Application Development
          </h2>
          <h4 className="text-xl font-semibold my-4">
            Generative AI consulting services for strategy, governance,
            security, development, and implementation. Get Gen AI ready!
          </h4>
        <button className="px-4 py-2 bg-blueColor text-white  rounded-xl shadow-md hover:bg-brownColor flex items-center transition-all duration-300 ease-in-out group">
          Talk to an Expert
          <span className="ml-2 bg-brownColor group-hover:bg-blueColor text-white px-1 rounded-md duration-300">
            &gt;&gt;
          </span>
        </button>
      
        </div>

        {/* Intriduction */}
        <div className="content my-6">
          <h3 className="text-2xl font-bold">Introduction :</h3>
          <p>
            Using the power of Generative AI (Gen AI) is no longer an option; it&apos;s a business necessity. Our Generative AI consulting services empower organizations to harness AI&apos;s potential while ensuring governance, security, and ethical implementation.
          </p>
          <p>
            At <span className="font-semibold">Alta-Futuris Solutions</span>, we believe that <span className="font-semibold">cloud enables businesses, data drives growth, and Generative AI </span> becomes the ultimate differentiator. Together, they unlock smarter decision-making, transformative growth, and scalability.
           </p>
        </div>

        {/* Challenges Section */}
        <div className="content my-6">
          <h3 className="text-2xl font-bold">Challenges & Solutions :</h3>
          <p> Successful Generative AI application development demands: </p>
          
          <ul className="my-2">
            <li>
            <span className="font-bold">Strong Data Governance:</span> To ensure data privacy and security.
            </li>
            <li>
            <span className="font-bold">Clear Business Use Cases: </span> Defining where and how Gen AI can drive business growth.
            </li>
            <li>
            <span className="font-bold">Workforce Adaption:</span> Preparing teams to embrace Gen AI solutions.
            </li>
          </ul>

          <p>Our Gen AI professional services address these challenges by providing strategic guidance, robust development frameworks, and seamless implementation models.</p>
        </div>

        {/* Service Include */}
        <div className="serviceInclude my-6">
          <h3 className="text-2xl font-bold">Our Services Include:</h3>
          
          <ol className="my-2">
            <li>
            <span className="font-bold">Use Cases Definition: </span> We help you determine how Gen AI fits into your business strategy and drives value.
            </li>
            <li>
            <span className="font-bold">Governance & Oversight: </span> We establish Gen AI and ChatGPT usage policies to ensure responsible AI usage.
            </li>
            <li>
            <span className="font-bold">Data Governance & Security: </span> We apply strong data security measures to protect your organization’s sensitive information.
            </li>
            <li>
            <span className="font-bold">Custom Gen AI Development:  </span> Our team builds tailor-made Gen AI solutions to solve your unique business challenges.
            </li>
            <li>
            <span className="font-bold">Implementation & Integration:   </span> We help you integrate Gen AI into your current technology infrastructure (like Microsoft Copilot, Salesforce Einstein).
            </li>
            <li>
            <span className="font-bold">Center of Excellence (CoE):    </span> We help you establish a Gen AI governance model to drive long-term adoption and sustainability.
            </li>
          </ol>
        </div>

        {/* Benefits */}
        <div className="benefits my-6">
          <h3 className="text-2xl font-bold">Benefits of Choosing Us:</h3>
         
          <ul className="my-2">
            <li>
            <span className="font-bold">Faster Decision-Making: </span> Gen AI provides real-time insights, driving informed business decisions.
            </li>
            <li>
            <span className="font-bold">Enhanced Efficiency: </span> Automate complex tasks and optimize workflows.
            </li>
            <li>
            <span className="font-bold">Secure Implementation:</span> We ensure your Gen AI adoption aligns with data governance and privacy standards.
            </li>
            <li>
            <span className="font-bold">Scalable Solutions: </span> Our solutions grow with your business, ensuring future-proof implementations.
            </li>
          </ul>

          <p>Our Gen AI professional services address these challenges by providing strategic guidance, robust development frameworks, and seamless implementation models.</p>
        </div>

        {/* Sub-Service */}
        <div className="sub-service my-12">
          <h3 className="text-2xl font-bold">AI’s Next Disruptor: AI Agents</h3>
          <p>
          Go beyond ChatGPT — AI Agents are the future of business transformation. These autonomous agents can take business roles, make strategic decisions, and drive productivity at scale.
          </p>

          <h4 className="font-bold">Our specialized AI Agent services include:</h4>
          <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Sidebar (Tabs) */}
        <div className="flex flex-col w-full md:w-1/3 border-r border-gray-300">
          {aiAgentServices.map((service, index) => (
            <button
              key={index}
              className={`py-3 px-4 text-left w-full font-semibold transition-all border-l-4 ${
                activeTab === index
                  ? "border-blue-500 text-blue-600 bg-gray-100"
                  : "border-transparent text-gray-500 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {service.title}
            </button>
          ))}
        </div>
            <div className="p-4 border rounded-lg shadow-lg bg-white text-center">
            <p className="text-gray-700 mt-2">{aiAgentServices[activeTab].content}</p>
            </div>
          </div>
         
         <p className="mt-6">If you want to stay ahead in the AI arms race, our experts will guide you through the roadmap to adopting AI Agents successfully.</p>
        </div>

      </div>
    </>
  );
};

export default AiAppDev;
