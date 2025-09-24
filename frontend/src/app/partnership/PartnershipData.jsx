"use client";
import Image from "next/image";
import React from "react";

const partners = [
  {
    imgSrc: "/assets/partnership/druid.jpg",
    description: (
      <>
        <a
          href="https://www.altafuturis.com"
          target="_blank"
          className="text-blue-500 hover:text-blue-700"
        >
          Alta-Futuris Solutions
        </a>
        , a Austin TX based Generative AI focussed custom software development
        company with a global reach is in partnership with
        <a
          href="https://www.druidai.com"
          target="_blank"
          className="text-blue-500 hover:text-blue-700"
        >
          {" "}
          DRUID AI
        </a>
        , a leading end-to-end platform for building, deploying, and scaling
        AI-powered agents and Conversational Business Applications (CBA). This
        collaboration is set to fast-track the deployment of cutting-edge
        AI-driven automation solutions, transforming business processes and
        delivering measurable value. This partnership empowers businesses to
        unlock the transformative potential of AI, revolutionizing processes,
        enabling smarter decision-making, and delivering tangible impact across
        a broad spectrum of industries.
      </>
    ),
  },
  {
    imgSrc: "/assets/partnership/copado.png",
    description: (
      <>
        <a
          href="https://www.altafuturis.com"
          target="_blank"
          className="text-blue-500 hover:text-blue-700"
        >
          Alta-Futuris Solutions
        </a>
        , a leading Salesforce Solutions provider has partnered with 
        <a
          href="https://www.linkedin.com/company/copadosolutions/"
          target="_blank"
          className="text-blue-500 hover:text-blue-700"
        > Copado </a>, the
        leading DevOps platform for 
        <a
          href="https://www.linkedin.com/company/salesforce/"
          target="_blank"
          className="text-blue-500 hover:text-blue-700"
        > Salesforce</a>! This partnership marks a
        significant milestone in our mission to deliver smarter, faster, and
        more secure Salesforce transformations for our clients. With Copado’s
        powerful low-code DevOps tools and automation capabilities, combined
        with Ata-Futuris teams deep expertise in QA, Test Automation, and
        Digital Delivery, we are empowering businesses to: ⚙️Cut testing cycles
        from weeks to hours, ⚙️ Achieve higher test coverage with intelligent
        automation, ⚙️ Eliminate test maintenance overhead with low-code
        testing, ⚙️ Accelerate Salesforce deployments with end-to-end CI/CD, ⚙️
        Build sustainable, scalable test automation practices, ⚙️ Increase
        release quality, visibility, and team collaboration. The need for speed
        and control in software delivery has never been greater. This
        partnership allows us to provide end-to-end support—from release
        planning and testing to monitoring and insights—all within the
        Salesforce ecosystem.
      </>
    ),
  },
  {
    imgSrc: "/assets/PartnershipSalesforceIMG.jpg",
    description: "Salesforce Partner",
  },
  {
    imgSrc: "/assets/partnership/ConsultValiant.jpg",
   description: (
      <>Alta-Futuris Solutions has established partnership with Consultvaliant FZC (
        <a
          href="https://consultvaliant.com/about-comapny"
          target="_blank"
          className="text-blue-500 hover:text-blue-700"
        >
          https://consultvaliant.com/about-comapny
        </a>
       ), a UAE based leading Business and Technical consulting firm. This partnership would help and support business growth of Alta-Futuris Solutions in Middle East and East Africa region. Being local partner in UAE, Consultvaliant would provide necessary and mandatory operational aspects for the region as well as become GTM partner for Alta-Futuris Service offerings and Solutions.
      </>
    ),
  }
];

const Team = () => {
  return (
    <>
      {/* Section Header */}
      <section className="relative flex items-center justify-center pt-12">
        <section className="container flex items-center justify-center md:mt-0">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start lg:items-start justify-between w-full space-y-8 md:space-y-0">
            {/* Left Side - Button */}
            <div className="max-w-3xl flex-shrink-0 md:mr-12">
              <h4 className="text-xl px-5 py-3 border-2 border-brownColor rounded-full text-black  shadow-sm  transition-all duration-300 ease-in-out font-bold">
                Partnership
              </h4>
            </div>

            {/* Right Side - Content */}
            <div className="max-w-4xl text-center md:text-left">
              <h1 className="md:mr-10 text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
                Highlighting our valued partners
              </h1>
            </div>
          </div>
        </section>
      </section>

      <section className="flex flex-row items-center justify-center px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
  {partners.map((partner, index) => (
    <div
      key={index}
      className={`border-2 border-[#D4B301] rounded-xl shadow-lg overflow-hidden bg-gray-100 p-5
        ${index === partners.length - 1 ? "md:col-span-1 md:col-start-2" : ""}`}
    >
      <div className="flex justify-center items-center">
        <Image
          src={partner.imgSrc}
          alt={partner.title || "Partner"}
          width={400}
          height={290}
          className="bg-gray-100 p-5"
        />
      </div>
      <div className="px-5 -mt-5 text-center pb-5">
        <h2 className="text-xl font-semibold">{partner.title}</h2>
        <p className="text-base text-gray-600 mt-2">
          {partner.description}
        </p>
      </div>
    </div>
  ))}
</div>

      </section>
    </>
  );
};

export default Team;
