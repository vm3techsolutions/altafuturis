const AiAppDev = () => {
  const services = [
      {
          title: "AI Agent Consultation",
          description: "Defining the scope, goals, and roadmap for AI agent development."
      },
      {
          title: "Custom AI Agent Development",
          description: "Designing AI agents tailored to your industry and business needs."
      },
      {
          title: "AI Agent Integration",
          description: "Seamlessly connecting AI agents with your CRM, ERP, and business platforms."
      },
      {
          title: "Support & Maintenance",
          description: "Providing long-term support for scalability and performance monitoring."
      }
      
  ];

  const benefits = [
    {
        title: "	Faster Decision-Making: ",
        description: "Gen AI provides real-time insights, driving informed business decisions."
    },
    {
        title: "	Enhanced Efficiency: ",
        description: " Automate complex tasks and optimize workflows."
    },
    {
        title: "	Secure Implementation: ",
        description: "We ensure your Gen AI adoption aligns with data governance and privacy standards."
    },
    {
        title: " Scalable Solutions: ",
        description: "Our solutions grow with your business, ensuring future-proof implementations."
    }
    
];

  

  return (
      <div className="p-6  text-black">
          <h2 className="text-4xl font-bold text-center mb-8">AI’s Next Disruptor: AI Agents</h2>
          {/* <p className="mb-6">
              Go beyond ChatGPT — <strong>AI Agents</strong> are the future of business transformation. 
              These autonomous agents can take business roles, make strategic decisions, and drive 
              productivity at scale.
          </p> */}

          <h3 className="text-2xl font-bold mb-5">Our specialized AI Agent services include:</h3>
          <ul className="list-disc pl-6">
              {services.map((service, index) => (
                  <li key={index} className="mb-2">
                      <strong>{service.title}:</strong> {service.description}
                  </li>
              ))}
          </ul>

          <div className="py-20">
                   
          <h3 className="text-2xl font-bold mb-5">Benefits of Choosing Us:</h3>
          <ul className="list-disc pl-6">
              {services.map((benefits, index) => (
                  <li key={index} className="mb-2">
                      <strong>{benefits.title}:</strong> {benefits.description}
                  </li>
              ))}
          </ul>
          </div>

        
      </div>
  );
}

export default AiAppDev;
