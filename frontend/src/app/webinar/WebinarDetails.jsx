"use client";
import Image from "next/image";
import React from "react";

// WebinarComponent.jsx
// A clean, responsive Next.js + Tailwind component to display webinar/landing data.
// Drop this file into a Next.js app (e.g. /components/WebinarComponent.jsx)

const DEFAULT_DATA = {
  title: "The Job-Ready Data Engineer Workshop",
  subtitle: "Transform Your Enterprise with Agentic AI & Salesforce CRM",
  heroText:
    "Alta-Futuris empowers global enterprises with intelligent AI Agents, Salesforce CRM innovation, and automated DevOps — so you can scale faster, serve better, and stay future-ready.",
  image:
    "/assets/Webinar.jpg",
  gains: [
    {
      heading: "KNOW-VOC — Customer Feedback Intelligence",
      description:
        "Identify customer sentiments in real time and refine sales, service & product strategies."
    },
    {
      heading: "DRUID AI — Enterprise AI Agent",
      description:
        "Deploy AI agents across support, HR, banking, and healthcare to increase efficiency and personalization."
    },
    {
      heading: "COPADO — AI-Powered Salesforce DevOps",
      description:
        "Automate testing, streamline CI/CD and release faster while staying compliance-ready."
    },
    {
      heading: "Global-Scale Confidence",
      description:
        "Built for Healthcare, Logistics, Telecom, Banking and E-commerce — fast deployment with measurable outcomes."
    },
    {
      heading: "Compliance & Security Shield",
      description:
        "Audit-ready (SOX, ISO, GDPR) with built-in monitoring and data protection."
    }
  ],
  whoFor:
    "CEOs, CIOs, and Industry leaders who want faster releases, better CX, and compliant global scale.",
  outcomes: [
    "Turn inefficiency into AI-driven intelligence",
    "Capture customer feedback as a growth engine",
    "Release Salesforce features faster & safer",
    "Deploy AI agents to reduce costs & boost CX",
    "Scale globally without compliance risks"
  ],
  cta: {
    label: "Request a Demo Today",
    href: "#request-demo"
  }
};

export default function WebinarComponent({ data = DEFAULT_DATA }) {
  return (
    <section className="w-full mx-auto my-8 p-6 lg:py-12 bg-gradient-to-b from-sky-600 to-indigo-700 rounded-2xl shadow-xl text-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left / Hero Image */}
        <div className="col-span-1 flex justify-center lg:justify-start">
          <div className="w-64 h-64 lg:w-[70vh] lg:h-[55vh] rounded-xl overflow-hidden ring-2 ring-white/20">
            <Image
              src={data.image}
              alt={data.title}
              width={720}
              height={720}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Middle / Main content */}
        <div className="col-span-2">
          <h2 className="text-2xl lg:text-4xl font-extrabold leading-tight">
            {data.title}
          </h2>
          <p className="mt-2 text-lg lg:text-xl font-semibold text-orange-400">
            {data.subtitle}
          </p>

          <p className="mt-4 text-sm lg:text-base text-white/90">
            {data.heroText}
          </p>

          {/* Gains / Features */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.gains.map((g, idx) => (
              <article
                key={idx}
                className="bg-white/10 p-4 rounded-lg border border-white/10 hover:scale-[1.01] transition-transform"
              >
                <h4 className="font-semibold text-white">{g.heading}</h4>
                <p className="mt-1 text-sm text-white/80">{g.description}</p>
              </article>
            ))}
          </div>

          {/* Who & Outcomes */}
          <div className="mt-6 flex flex-col lg:flex-row gap-6">
            <div className="flex-1 bg-white/6 p-4 rounded-lg">
              <h5 className="font-semibold">Who it's for</h5>
              <p className="mt-2 text-sm text-white/85">{data.whoFor}</p>
            </div>

            <div className="flex-1 bg-white/6 p-4 rounded-lg">
              <h5 className="font-semibold">Outcomes</h5>
              <ul className="mt-2 text-sm text-white/85 list-disc pl-5 space-y-1">
                {data.outcomes.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <a
              href={data.cta.href}
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full px-6 py-3 shadow-md"
            >
              {data.cta.label}
            </a>

            <a
              href="#learn-more"
              className="mt-2 sm:mt-0 text-sm text-white/80 underline"
            >
              Learn how Alta-Futuris helps enterprises →
            </a>
          </div>
        </div>
      </div>

      {/* Footer micro-copy */}
      <div className="mt-8 text-xs text-white/70 text-center">
        Built for enterprise leaders — demo & consultation available.
      </div>
    </section>
  );
}
