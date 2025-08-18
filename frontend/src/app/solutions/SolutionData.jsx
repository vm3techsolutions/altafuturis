import Image from "next/image";

const WhoAreWe = () => {
  return (
    <>
      <section className="flex items-center justify-center py-8 lg:py-12">
        <section className="container flex items-center justify-center">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start lg:items-start justify-between w-full space-y-8 md:space-y-0">
            {/* Left Side - Button */}
            <div className="max-w-4xl flex-shrink-0 md:mr-12">
              <h4 className="text-xl md:mb-44 px-5 py-3  border-2 border-brownColor rounded-full text-black  shadow-sm  transition-all duration-300 ease-in-out font-bold">
                Solutions
              </h4>
            </div>

            {/* Right Side - Content */}
            <div className="max-w-4xl text-center mx-auto md:text-left">
              <p className="py-4 text-gray-900 text-lg mb-4 leading-relaxed">
                We offer enterprise solutions which would help them to address
                niche problem statements and provide necessary flexibility to
                integrate the solutions into their IT portfolio with due
                considerations of data privacy, security and compliance.
              </p>

              {/* Salesforce Solution */}
              <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
                Salesforce Solutions:{" "}
              </h2>

              <Image
                src="/assets/SolutionSalesforceIMG.jpg"
                width={350}
                height={500}
                className="py-5 h-96 mx-auto md:ml-0"
              />

              <h1 className="text-xl md:text-3xl font-bold text-black py-4 pt-5 leading-tight">
                KNOW-WOC{" "}
              </h1>

              <h2 className="text-lg md:text-2xl font-bold text-black py-4 leading-tight">
                Understand current feedback to bring more value for future
              </h2>

              <p className="py-4 text-gray-900 text-md mb-4 leading-relaxed">
                Get to know customer feedback in analytical way is more
                important in a very dynamic and competitive world. More you get
                feedback from customer, better you can improve about Sales and
                product to give more value back to the existing and future
                customers.
              </p>

              <hr className="w-full border-3 border-gray-500 my-8" />

              {/* Druid */}
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
                  DRUID AI Solutions:{" "}
                </h2>

                <Image
                  src="/assets/partnership/druid.jpg"
                  width={350}
                  height={200}
                  className="py-5 h-40 mx-auto md:ml-0"
                />

                <p className="py-4 text-gray-900 text-md mb-4 leading-relaxed">
                  DRUID AI is an enterprise AI agent platform that focuses on
                  enhancing employee productivity and the customer experience
                  through intelligent automation and conversational AI. <br />{" "}
                  DRUID AI provides a platform for building, deploying, and
                  scaling AI agents and conversational business applications.
                  These agents, powered by Natural Language Processing (NLP) and
                  machine learning, handle tasks across various departments. The
                  platform includes a knowledge base and an orchestration engine
                  to manage multiple agents efficiently. DRUID also integrates
                  with generative AI and facilitates the creation of interactive
                  dashboards for real-time data management. <br /> Key benefits
                  include enhanced productivity and customer experience, cost
                  reduction, tailored solutions for specific industries, and
                  fast deployment. <br /> DRUID AI solutions can be used in
                  various areas, such as customer support, HR, banking,
                  insurance, healthcare, and higher education. <br /> In
                  conclusion, DRUID AI offers a comprehensive platform for
                  businesses looking to use conversational AI and intelligent
                  automation to improve efficiency, personalize interactions,
                  and drive growth.
                </p>

                <hr className="w-full border-3 border-gray-500 my-8" />
              </div>

              {/* Druid */}
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
                  Copado Solutions:
                </h2>

                <Image
                  src="/assets/partnership/copado.png"
                  width={350}
                  height={200}
                  className="py-5 h-40 mx-auto md:ml-0"
                />

                <p className="py-4 text-gray-900 text-md mb-4 leading-relaxed">
                  Copado offers a comprehensive suite of solutions focused on
                  optimizing and streamlining the DevOps process for Salesforce
                  and other enterprise cloud applications.
                </p>

                <h4 className="text-xl font-bold mb-4">
                  Key areas of Copado's solutions :
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <b>DevOps Platform for Salesforce:</b> Copado's core
                    offering is a Salesforce-native DevOps platform designed to
                    accelerate software delivery, reduce risk, and enhance
                    collaboration within Salesforce development teams.
                  </li>
                  <li>
                    <b>
                      Continuous Integration and Continuous Delivery (CI/CD):
                    </b>
                    Copado facilitates automated and streamlined deployment
                    processes, enabling frequent and reliable releases to
                    various Salesforce environments.
                  </li>
                  <li>
                    <b>Automated Testing:</b> It provides tools for automated
                    testing, including Copado Robotic Testing, to ensure the
                    quality and functionality of the code across different
                    platforms, browsers, and devices.
                  </li>
                  <li>
                    <b>Version Control:</b> Copado integrates with Git and other
                    version control systems to efficiently manage code changes
                    and support collaborative development.
                  </li>
                  <li>
                    <b>Compliance and Security:</b> Copado helps organizations
                    meet industry standards and regulations like SOX, ISO, and
                    GDPR by providing features like real-time compliance
                    monitoring and enforcing security policies throughout the
                    development lifecycle.
                  </li>
                  <li>
                    <b>Agile Planning and User Story Management:</b> Copado
                    offers tools for agile planning, managing user stories, and
                    tracking project progress.
                  </li>
                </ul>

                <h4 className="text-xl my-4 font-bold">
                  Specific offerings within the Copado platform :
                </h4>

                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <b>Copado Plan:</b> Facilitates agile planning and project management.
                  </li>
                  <li>
                    <b>
                      Copado Test:
                    </b>
                    Offers a comprehensive framework for testing and quality assurance.
                  </li>
                  <li>
                    <b>Copado Comply:</b> Helps ensure adherence to compliance standards.
                  </li>
                  <li>
                    <b>Copado Release:</b> Supports efficient release management and deployments.
                  </li>
                  <li>
                    <b>Copado Robotic Testing:</b> Automates testing across Salesforce and other environments with AI-powered capabilities.
                  </li>
                  <li>
                    <b>Copado Essentials:</b> An intuitive solution for smaller teams and individual users as an alternative to Change Sets. 
                  </li>
                </ul>

                <h4 className="text-xl my-4 font-bold">
                 Benefits of using Copado:
                </h4>

                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <b>Faster releases:</b> Copado helps teams deliver software updates and new features more quickly and efficiently, according to Salesforce.
                  </li>
                  <li>
                    <b>
                      Reduced risk:
                    </b>
                    Automated testing, quality gates, and compliance features help minimize errors and ensure high-quality releases.
                  </li>
                  <li>
                    <b>Enhanced collaboration:</b> Tools for user story management, version control, and shared workspaces foster better teamwork.
                  </li>
                  <li>
                    <b>Improved compliance:</b> Copado helps organizations meet and maintain industry standards and regulatory requirements.
                  </li>
                  <li>
                    <b>Increased productivity:</b> By automating various DevOps tasks, Copado frees up developers and administrators to focus on more strategic initiatives.
                  </li>
                </ul>

                <p>
                  Copado is trusted by numerous organizations across various industries and is considered a leading DevOps platform for the Salesforce ecosystem
                </p>

                {/* <hr className="w-full border-3 border-gray-500 my-8" /> */}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default WhoAreWe;
