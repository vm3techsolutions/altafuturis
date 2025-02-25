"use client";

import { useState } from "react";

const MegaMenu = () => {
  const [activeTab, setActiveTab] = useState("web-dev");

  const tabs = [
    { id: "web-dev", title: "Web Development", content: "Custom websites, WordPress, React, and more." },
    { id: "mobile-dev", title: "Mobile Development", content: "Android & iOS apps using React Native, Flutter." },
    { id: "digital-marketing", title: "Digital Marketing", content: "SEO, PPC, Social Media Marketing strategies." },
  ];

  return (
    <div className="absolute -left-16 right-0 top-full w-[100vw] bg-white  shadow-lg p-12 flex z-50">
      {/* Tabs Section (Left Panel) */}
      <div className="w-1/3 border-r">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`p-4 cursor-pointer hover:bg-gray-200 ${
              activeTab === tab.id ? "bg-gray-300 font-bold" : ""
            }`}
            onMouseEnter={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </div>
        ))}
      </div>

      {/* Dynamic Content Section (Middle Panel) */}
      <div className="w-1/3 p-4">
        <h3 className="text-lg font-bold mb-2">{tabs.find((tab) => tab.id === activeTab)?.title}</h3>
        <p>{tabs.find((tab) => tab.id === activeTab)?.content}</p>
      </div>

      {/* Static Content Section (Right Panel) */}
      <div className="w-1/3 p-4 bg-gray-100 rounded-md">
        <h3 className="font-bold text-lg">Why Choose Us?</h3>
        <p className="text-sm mt-2">Industry experts with 10+ years of experience in tech solutions.</p>
      </div>
    </div>
  );
};

export default MegaMenu;
