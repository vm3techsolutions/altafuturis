import React from "react";

const servicesData = [
  {
    title: "Generative AI Application Development",
    description:
      "Generative AI consulting services for strategy, governance, security, development, and implementation. Get Gen AI ready!",

    introduction: {
      title: "Introduction",
      content:
        "Using the power of Generative AI (Gen AI) is no longer an option; it's a business necessity. Our Generative AI consulting services empower organizations to harness AI's potential while ensuring governance, security, and ethical implementation.",
    },

    philosophy:
      "At Alta-Futuris Solutions, we believe that cloud enables businesses, data drives growth, and Generative AI becomes the ultimate differentiator. Together, they unlock smarter decision-making, transformative growth, and scalability.",

    challenges: {
      title: "Challenges & Solutions:",
      title2: "Successful Generative AI application development demands:",
      points: [
        "Strong Data Governance: To ensure data privacy and security.",
        "Clear Business Use Cases: Defining where and how Gen AI can drive business growth.",
        "Workforce Adoption: Preparing teams to embrace Gen AI solutions.",
      ],
      solution:
        "Our Gen AI professional services address these challenges by providing strategic guidance, robust development frameworks, and seamless implementation models.",
    },

    services: {
      title: "Our Services Include:",
      offerings: [
        "Use Cases Definition: We help you determine how Gen AI fits into your business strategy and drives value.",
        "Governance & Oversight: We establish Gen AI and ChatGPT usage policies to ensure responsible AI usage.",
        "Data Governance & Security: We apply strong data security measures to protect your organization’s sensitive information.",
        "Custom Gen AI Development: Our team builds tailor-made Gen AI solutions to solve your unique business challenges.",
        "Implementation & Integration: We help you integrate Gen AI into your current technology infrastructure (like Microsoft Copilot, Salesforce Einstein).",
        "Center of Excellence (CoE): We help you establish a Gen AI governance model to drive long-term adoption and sustainability.",
      ],
    },
  },

  
];

export default function ServiceHeading() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto space-y-6">
        {servicesData.map((service, index) => (
          <div key={index} className="p-6 ">
            {/* Title */}
            <h3 className="text-4xl text-center font-bold">{service.title}</h3>
            <p className="text-gray-700 text-lg mt-5">{service.description}</p>

            {/* Introduction */}
            <h4 className="text-xl font-bold mt-4">
              {service.introduction.title}
            </h4>
            <p className="text-gray-700 text-lg">{service.introduction.content}</p>

            {/* Philosophy */}
            <p className="text-gray-700 text-lg mt-4">{service.philosophy}</p>

            {/* Challenges */}
            <h4 className="text-xl font-bold mt-4">
              {service.challenges.title}
            </h4>

            <h3 className=" text-gray-700 text-lg mt-4">
              {service.challenges.title2}
            </h3>

            <ul className="list-disc list-inside text-gray-600 mt-2">
              {service.challenges.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <p className="text-gray-700 text-lg mt-2">{service.challenges.solution}</p>

            {/* Services */}
            <h4 className="text-xl font-bold mt-4">
              {service.services.title}
            </h4>
           
            <ul className="list-decimal list-inside text-gray-600">
              {service.services.offerings.map((offer, i) => (
                <li key={i}>{offer}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
