"use client";
    
    import { useState } from "react";
    import Link from "next/link";
    import { ArrowRightIcon } from "@heroicons/react/24/solid";
    
    const MegaMenu = ({closeInsight}) => {
      const Chooses = ["Partnering with client", "Research Driven", "Highly focused on delivering outcome on daily basis", "Providing highest quality output and high level of business satisfaction."];
    
      const tabs = [
        { 
          id: 1, 
          title: "Case Study", 
          content: "Case Study Details", 
          link: "/case-studies"
        },
        { 
          id: 2, 
          title: "Blogs", 
          content: "Blog Details", 
          link: "/blog"
        },
    
        { 
          id: 3, 
          title: "Podcast", 
          content: "Podcast Details", 
          link: "/podcast"
        },

         { 
          id: 4, 
          title: "Webinar ", 
          content: "Webinar Details", 
          link: "/webinar"
        },
    
       
      ];
    
      const [activeTab, setActiveTab] = useState(tabs[0].id); // Default to first tab
    
      return (
        <div className="absolute inset-x-0 top-full w-screen bg-white shadow-lg px-20 py-10 flex z-50 md:-ml-[610px] lg:-ml-[610px] xl:-ml-[610px] 2xl:-ml-[740px]">
    
          {/* Tabs Section (Left Panel) */}
          <div className="w-1/3 border-r">
            {tabs.map((tab) => (
              <Link key={tab.id} href={tab.link} onClick={closeInsight}>
                <div
                  className={`px-4 py-2 text-lg mb- font-normal text-[#002096] cursor-pointer hover:bg-blue-50 flex items-center justify-between ${
                    activeTab === tab.id ? "bg-blue-50 font-bold" : ""
                  }`}
                  onMouseEnter={() => setActiveTab(tab.id)}
                >
                  <span>{tab.title}</span>
                  <ArrowRightIcon className="w-6 h-5 ml-2 text-[#002096] transition-transform duration-300 transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
    
          {/* Dynamic Content Section (Middle Panel) */}
          <div className="w-1/3 p-4">
            <h3 className="text-2xl text-[#002096] font-bold mb-2">
              {tabs.find((tab) => tab.id === activeTab)?.title}
            </h3>
            <p className="text-lg font-medium mb-2">
              {tabs.find((tab) => tab.id === activeTab)?.content}
            </p>
            <Link href={tabs.find((tab) => tab.id === activeTab)?.link || "#"}>
              <button onClick={closeInsight} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                Learn More
              </button>
            </Link>
          </div>
    
          {/* Static Content Section (Right Panel) */}
          <div className="w-1/3 p-4 bg-blue-50 rounded-md">
            <h3 className="text-2xl text-[#002096]">Why Choose Us?</h3>
            <p className="text-sm mt-2">
              Industry experts with 10+ years of experience in tech solutions.
            </p>
    
             <ul className="list-disc pl-4 mt-4 space-y-4 text-lg font-semibold">
          {Chooses.map((Choose, index) => (
            <li key={index}>{Choose}</li>
          ))}
        </ul>
          </div>
        </div>
      );
    };
    
    export default MegaMenu;