"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const jobListings = [
  {
    title: "AI Engineer",
    experience: "0-3 years",
    location: "Remote",
    applyLink: "/jobs/ai-engineer",
  },
  {
    title: "Data Engineer",
    experience: "0-3 years",
    location: "Remote",
    applyLink: "/jobs/data-engineer",
  },
  {
    title: "Salesforce Developer",
    experience: "0-3 years",
    location: "Remote",
    applyLink: "/jobs/salesforce-developer",
  },
  {
    title: "AI Scientist",
    experience: "0-3 years",
    location: "Remote",
    applyLink: "/jobs/ai-scientist",
  },
];

export default function JobListings() {
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJob = (index) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {jobListings.map((job, index) => (
        <div key={index} className="border-t border-[#D4B301] py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Designation: {job.title}</h2>
            <ChevronDown
              className={`text-[#D4B301] mb-10 cursor-pointer transition-transform ${
                expandedJob === index ? "rotate-180" : ""
              }`}
              onClick={() => toggleJob(index)}
            />
          </div>

          {expandedJob === index && (
            <div className="space-y-3">
              <div className="flex space-x-32 text-gray-600 text-base pb-3">
                <p>Experience: {job.experience}</p>
                <p>Location: {job.location}</p>
              </div>

              <a href={job.applyLink} className="text-[#6328A6] font-semibold">
                APPLY HERE &gt;&gt;
              </a>
            </div>
          )}
        </div>
      ))}
      <div className="border-t border-yellow-500"></div>
    </div>
  );
}
