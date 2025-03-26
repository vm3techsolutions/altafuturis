"use client";

import { useEffect, useState } from "react";
import Link from "next/link"; // Import Next.js Link

const CaseStudyLayout = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState(null);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await fetch(
          "http://localhost/resources/wp-json/wp/v2/case_study?_embed&per_page=100"
        );
        const data = await response.json();

        const formattedCaseStudies = data.map((study) => ({
          id: study.id,
          title: study.title.rendered,
          slug: study.slug, // Ensure slug is stored correctly
          link: `/case-studies/${study.slug}`,
          image:
            study._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/assets/placeholder.png",
          category: study.categories?.[0] || "uncategorized",
          date: new Date(study.date).toLocaleDateString(),
          description: study.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, ""), // Remove HTML tags
        }));

        setCaseStudies(formattedCaseStudies);
      } catch (error) {
        console.error("Error fetching case studies:", error);
      }
    };

    fetchCaseStudies();
  }, []); // Only fetch once on mount

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "http://localhost/resources/wp-json/wp/v2/categories"
        );
        const data = await response.json();

        const assignedCategoryIds = new Set(
          caseStudies.map((study) => study.category)
        );

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
  }, [caseStudies]); // Fetch categories only after case studies are loaded

  const handleCategoryFilter = (categoryId) => {
    setFilteredCategory(categoryId);
  };

  const displayedCaseStudies = filteredCategory
    ? caseStudies.filter((study) => study.category === filteredCategory)
    : caseStudies;

  if (!caseStudies.length)
    return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto mt-12 p-4">
      {/* Category Filter Buttons */}
      <div className="w-full flex justify-center mb-6">
        <div className="flex space-x-4">
          <button
            onClick={() => handleCategoryFilter(null)}
            className={`px-4 py-2 border rounded-xl transition-colors duration-300 ${
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
              className={`px-4 py-2 border rounded-xl transition-colors duration-300 ${
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

      {/* Case Study Display */}
      <div className="flex flex-wrap py-4">
        {/* Left side (Main Case Study) */}
        <div className="w-full md:w-3/5 p-4 space-y-10">
          {displayedCaseStudies.slice(0, 1).map((study) => (
            <div key={study.id} className="overflow-hidden md:p-5">
              <img
                className="w-full h-80 object-cover rounded-lg"
                src={study.image}
                alt={study.title}
              />
              <div className="p-4 space-y-5 border-l-2 border-[#D4B301] -mt-2">
                <h2 className="text-xs mb-2">📅 {study.date}</h2>
                <h2 className="text-xl font-semibold">{study.title}</h2>
                <p className="text-gray-600 mt-2 text-md">
                  {study.description}
                </p>
                <Link href={study.slug ? `/case-studies/${study.slug}` : "#"}>
                  READ MORE <span className="text-3xl p-1">&raquo;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Right side (Other Case Studies) */}
        <div className="w-full md:w-2/5 p-4">
          {displayedCaseStudies.slice(1).map((study) => (
            <div key={study.id} className="mb-4 overflow-hidden md:p-5">
              <img
                className="w-full h-48 object-cover rounded-lg border-l-2 border-[#D4B301]"
                src={study.image}
                alt={study.title}
              />
              <div className="p-4 border-l-2 border-[#D4B301] -mt-2">
                <h2 className="text-xs mb-2">📅 {study.date}</h2>
                <h2 className="text-xl font-semibold">{study.title}</h2>
                <p className="text-gray-600 mt-2 text-md">
                  {study.description}
                </p>
                <a
                  href={`/case-studies/${study.slug}`}
                  className="text-[#6328A6] mt-4 inline-block font-semibold"
                >
                  READ MORE <span className="text-3xl p-1">&raquo;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyLayout;
