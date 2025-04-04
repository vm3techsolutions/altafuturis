"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CaseStudyLayout = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [categories, setCategories] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState(null);

  const WORDPRESS_API = process.env.NEXT_PUBLIC_WORDPRESS_API;

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await fetch(`${WORDPRESS_API}/case_study?_embed&per_page=100`);
        const data = await response.json();

        const formattedCaseStudies = data.map((study) => ({
          id: study.id,
          title: study.title.rendered,
          slug: study.slug,
          link: `/case-studies/${study.slug}`,
          image: study._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/assets/placeholder.png",
          category: study.categories?.[0] || "uncategorized",
          date: new Date(study.date).toLocaleDateString(),
          description: study.excerpt.rendered.replace(/<[^>]*>?/gm, "").split(" ").slice(0, 100).join(" ") + "...",
        }));

        setCaseStudies(formattedCaseStudies);
        setSelectedStudy(formattedCaseStudies[0]);
      } catch (error) {
        console.error("Error fetching case studies:", error);
      }
    };
    fetchCaseStudies();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${WORDPRESS_API}/categories`);
        const data = await response.json();

        const assignedCategoryIds = new Set(caseStudies.map((study) => study.category));

        const filteredCategories = data
          .filter((category) => assignedCategoryIds.has(category.id))
          .map((category) => ({
            id: category.id,
            name: category.name,
          }));

        setCategories(filteredCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    if (caseStudies.length > 0) {
      fetchCategories();
    }
  }, [caseStudies]);

  const handleCategoryFilter = (categoryId) => {
    setFilteredCategory(categoryId);
    const filtered = categoryId
      ? caseStudies.filter((study) => study.category === categoryId)
      : caseStudies;
    setSelectedStudy(filtered[0]);
  };

  const displayedCaseStudies = filteredCategory
    ? caseStudies.filter((study) => study.category === filteredCategory)
    : caseStudies;

  if (!caseStudies.length) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-full mx-auto mt-12 p-4">
      {/* Category Filter Buttons */}
      <div className="w-full flex justify-center mb-6">
        <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:space-x-4 overflow-x-auto p-2">
          <button
            onClick={() => handleCategoryFilter(null)}
            className={`w-full sm:w-auto px-4 py-2 border rounded-xl transition-colors duration-300 ${
              filteredCategory === null
                ? "bg-blueColor text-white"
                : "border-gray-300 hover:bg-brownColor hover:text-white"
            }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryFilter(category.id)}
              className={`w-full sm:w-auto px-4 py-2 border rounded-xl transition-colors duration-300 ${
                filteredCategory === category.id
                  ? "bg-blueColor text-white"
                  : "border-gray-300 hover:bg-brownColor hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-wrap py-4">
        {/* Left: Featured Case Study */}
        <div className="w-full md:w-3/5 p-4 space-y-10">
          {selectedStudy && (
            <div key={selectedStudy.id} className="overflow-hidden md:p-5">
              <img
                className="w-full h-80 object-cover rounded-lg"
                src={selectedStudy.image}
                alt={selectedStudy.title}
              />
              <div className="p-4 space-y-5 border-l-2 border-[#D4B301] -mt-2">
                <h2 className="text-xs mb-2">📅 {selectedStudy.date}</h2>
                <h2 className="text-3xl font-semibold">{selectedStudy.title}</h2>
                <p className="text-gray-600 mt-2 text-lg">{selectedStudy.description}</p>
                <Link
                  href={`/case-studies/${selectedStudy.slug}`}
                  className="text-[#6328A6] mt-4 inline-block font-semibold hover:text-brownColor"
                >
                  READ MORE <span className="text-3xl p-1">&raquo;</span>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Right: List of Other Case Studies */}
        <div className="w-full md:w-2/5 p-4 overflow-y-auto max-h-[800px]">
          {displayedCaseStudies.slice(0).map((study) => (
            <div
              key={study.id}
              onClick={() => setSelectedStudy(study)}
              className="mb-4 overflow-hidden md:p-5 cursor-pointer hover:bg-gray-50 transition"
            >
              <img
                className="w-full h-30 object-cover rounded-lg border-l-2 border-[#D4B301]"
                src={study.image}
                alt={study.title}
              />
              <div className="p-4 border-l-2 border-[#D4B301] -mt-2">
                <h2 className="text-xs mb-2">📅 {study.date}</h2>
                <h2 className="text-md font-semibold">{study.title}</h2>
                <p className="text-gray-600 mt-2 text-sm">
                  {study.description.split(" ").slice(0, 12).join(" ") + "..."}
                </p>
                <span className="text-[#6328A6] text-sm inline-block font-semibold hover:text-brownColor">
                  READ MORE <span className="text-3xl p-1">&raquo;</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyLayout;
