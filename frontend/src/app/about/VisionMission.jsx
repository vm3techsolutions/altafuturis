"use client";
import { useState } from "react";

const VisionMission = () => {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <>
      <section className="flex items-center justify-center lg:py-16 md:py-8 py-2">
        <div className="container flex items-center justify-center">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start lg:items-start justify-start w-full space-y-8 md:space-y-0">
            {/* Left Column */}
            <div className="max-w-4xl flex-shrink-0  md:mr-12">
              <div className=" relative w-[54vw] md:w-[18vw] lg:w-[14vw] 2xl:w-[14vw] h-[20vh]  mr-0 lg:mr-36 flex flex-col justify-center text-center  p-4 bg-white rounded-lg">
                <button
                  onClick={() => setActiveTab("vision")}
                  className={`px-4 py-2 cursor-pointer font-bold rounded-lg shadow-md hover:bg-blueColor hover:text-white flex items-center justify-between transition-all duration-300 ease-in-out ${
                    activeTab === "vision"
                      ? "bg-blueColor text-white"
                      : "bg-white text-gray-900"
                  }`}
                >
                  Vision
                  <span className="ml-2  bg-brownColor text-white px-1 rounded-md duration-300">
                    &gt;&gt;
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab("mission")}
                  className={`px-4 py-2 mt-4 cursor-pointer   font-bold rounded-lg shadow-md hover:bg-blueColor hover:text-white flex items-center justify-between transition-all duration-300 ease-in-out ${
                    activeTab === "mission"
                      ? "bg-blueColor text-white"
                      : "bg-white text-gray-900"
                  }`}
                >
                  Mission
                  <span className="ml-2  bg-brownColor text-white px-1 rounded-md duration-300">
                    &gt;&gt;
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className=" max-w-4xl flex flex-shrink-0 items-center md:mr-12">
            <p className="-mt-36 lg:-mt-12"><span className="text-8xl text-gray-900 font-bold mr-4 ">“</span></p>
            {activeTab == "vision" && 
              <p className="text-md lg:text-lg">
              To pioneer a future where innovation and human potential converge seamlessly, Alta-Futuris Solutions envisions a world empowered by transformative technologies and sustainable strategies. We strive to be the global catalyst for progress, shaping a tomorrow where businesses, communities, and individuals not only adapt to change but lead it, creating a legacy of resilience, opportunity, and boundless possibility. </p>
              }

              {activeTab == "mission" && 
              <p className="text-md lg:text-lg">At Alta-Futuris Solutions, our mission is to empower organizations and individuals to thrive in an ever-evolving world by delivering innovative, forward-thinking solutions that bridge the gap between today's challenges and tomorrow's possibilities. We are committed to leveraging cutting-edge technology, strategic foresight, and sustainable practices to drive transformative growth, foster resilience, and create a future where progress and purpose coexist harmoniously! </p>
              }
              <p className="-mb-56 lg:-mb-32"><span className="text-8xl text-gray-900 font-bold ">”</span></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionMission;
