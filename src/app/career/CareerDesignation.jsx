"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function JobListings() {
  const [jobs, setJobs] = useState([]);
  const [expandedJob, setExpandedJob] = useState(0); // First job is expanded by default

  useEffect(() => {
    fetch("/Career.json") // Fetch the JSON file from the public folder
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching job data:", error));
  }, []);

  const toggleJob = (index) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {jobs.map((job, index) => (
        <div key={index} className="border-t border-[#D4B301] py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Designation: {job.title}</h2>
            <ChevronDown
              className={`text-[#D4B301] cursor-pointer transition-transform ${
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
