// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { ChevronDown } from 'lucide-react';

// export default function JobListings() {
//   const [jobs, setJobs] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategoryId, setSelectedCategoryId] = useState(null);
//   const [expandedJob, setExpandedJob] = useState(0); // First job expanded by default

//   const WORDPRESS_API = process.env.NEXT_PUBLIC_WORDPRESS_API;

//   // ✅ Fetch categories
//   useEffect(() => {
//     fetch(`${WORDPRESS_API}/categories`)
//       .then((res) => res.json())
//       .then((data) => {
//         // Filter out "Uncategorized" by name or by ID (commonly ID = 1)
//         const filtered = data.filter(
//           (cat) => cat.name.toLowerCase() !== 'uncategorized' && cat.id !== 1
//         );
//         setCategories(filtered);
//       })
//       .catch((err) => console.error('Category fetch error:', err));
//   }, []);

//   // ✅ Fetch jobs with optional category filter
//   useEffect(() => {
//     const categoryQuery = selectedCategoryId
//       ? `&categories=${selectedCategoryId}`
//       : '';

//     fetch(`${WORDPRESS_API}/career?_embed&acf_format=standard${categoryQuery}`)
//       .then((res) => res.json())
//       .then((data) => {
//         const formatted = data.map((job) => ({
//           id: job.id,
//           title: job.title.rendered,
//           slug: job.slug,
//           link: `/career/${job.slug}`,
//           experience: job.acf?.experience || 'Not specified',
//           location: job.acf?.location || 'Not specified',
//         }));
//         setJobs(formatted);
//       })
//       .catch((err) => console.error('Job fetch error:', err));
//   }, [selectedCategoryId]);

//   const toggleJob = (index) => {
//     setExpandedJob(expandedJob === index ? null : index);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       {/* Category Filters */}
//       <div className="flex flex-wrap justify-center py-6 gap-4">
//         <button
//           onClick={() => setSelectedCategoryId(null)}
//           className={`${
//             selectedCategoryId === null
//               ? 'bg-blueColor text-white'
//               : 'border hover:bg-brownColor hover:text-white text-gray-900'
//           } px-4 py-2 rounded-lg`}
//         >
//           All Categories
//         </button>

//         {categories.map((cat) => (
//           <button
//             key={cat.id}
//             onClick={() => setSelectedCategoryId(cat.id)}
//             className={`border px-4 py-2 rounded-lg hover:text-white hover:bg-brownColor ${
//               selectedCategoryId === cat.id ? 'bg-blueColor text-white' : 'text-black'
//             }`}
//           >
//             {cat.name}
//           </button>
//         ))}
//       </div>

//       {/* Job List */}
//       {jobs.map((job, index) => (
//         <div key={index} className="border-t border-[#D4B301] py-4">
//           <div className="flex justify-between items-center">
//             <h2 className="text-xl font-semibold">Designation: {job.title}</h2>
//             <ChevronDown
//               className={`text-[#D4B301] cursor-pointer transition-transform ${
//                 expandedJob === index ? 'rotate-180' : ''
//               }`}
//               onClick={() => toggleJob(index)}
//             />
//           </div>

//           {expandedJob === index && (
//             <div className="space-y-3 mt-3">
//               <div className="flex flex-col sm:flex-row sm:space-x-10 text-gray-600 text-base pb-3">
//                 <p>Experience: {job.experience}</p>
//                 <p>Location: {job.location}</p>
//               </div>
//               <Link href={job.link} className="text-[#6328A6] font-bold">
//                 Read More &gt;&gt;
//               </Link>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function JobListings() {
  const [jobs, setJobs] = useState([]);
  const [expandedJob, setExpandedJob] = useState(0); // First job open

  // Fetch JSON
  useEffect(() => {
    fetch("/Career.json")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("JSON fetch error:", err));
  }, []);

  const toggleJob = (index) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">

      {/* Job List (No categories because your JSON has none) */}
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
            <div className="space-y-3 mt-3">
              <div className="flex flex-col sm:flex-row sm:space-x-10 text-gray-600 text-base pb-3">
                <p>Experience: {job.experience}</p>
                <p>Location: {job.location}</p>
              </div>

              {/* <Link href={job.applyLink} className="text-[#6328A6] font-bold">
                Read More &gt;&gt;
              </Link> */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
