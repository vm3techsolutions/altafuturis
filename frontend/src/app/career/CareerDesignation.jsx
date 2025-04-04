'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function JobListings() {
  const [jobs, setJobs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [expandedJob, setExpandedJob] = useState(0); // First job expanded by default

  const WORDPRESS_API = process.env.NEXT_PUBLIC_WORDPRESS_API;

  // ✅ Fetch career categories (custom taxonomy)
  useEffect(() => {
    fetch(`${WORDPRESS_API}/career_category`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((cat) => cat.count > 0);
        setCategories(filtered);
      })
      .catch((err) => console.error('Career category fetch error:', err));
  }, []);

  // ✅ Fetch jobs (CPT: career) with optional category filter
  useEffect(() => {
    const categoryQuery = selectedCategoryId
      ? `&career_category=${selectedCategoryId}`
      : '';

    fetch(`${WORDPRESS_API}/career?_embed&acf_format=standard${categoryQuery}`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((job) => ({
          id: job.id,
          title: job.title.rendered,
          slug: job.slug,
          link: `/career/${job.slug}`,
          experience: job.acf?.experience || 'Not specified',
          location: job.acf?.location || 'Not specified',
        }));
        setJobs(formatted);
      })
      .catch((err) => console.error('Job fetch error:', err));
  }, [selectedCategoryId]);

  const toggleJob = (index) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center py-6 gap-4">
        <button
          onClick={() => setSelectedCategoryId(null)}
          className={`${
            selectedCategoryId === null
              ? 'bg-blue-700 text-white'
              : 'bg-blue-600 text-white'
          } px-4 py-2 rounded-lg font-semibold hover:bg-blue-700`}
        >
          All Categories
          <span className="bg-[#D4B301] py-1 px-2 rounded ml-2">&raquo;</span>
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategoryId(cat.id)}
            className={`border border-yellow-500 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-100 ${
              selectedCategoryId === cat.id ? 'bg-yellow-100' : 'text-black'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Job List */}
      {jobs.map((job, index) => (
        <div key={index} className="border-t border-[#D4B301] py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              Designation: {job.title}
            </h2>
            <ChevronDown
              className={`text-[#D4B301] cursor-pointer transition-transform ${
                expandedJob === index ? 'rotate-180' : ''
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
              <Link href={job.link} className="text-[#6328A6] font-bold">
                Read More &gt;&gt;
              </Link>
            </div>
          )}
        </div>
      ))}

      <div className="border-t border-yellow-500"></div>
    </div>
  );
}
