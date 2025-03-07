'use client';

import { useState, useEffect } from 'react';

export default function CategoryButtons({ setFilteredBlogs }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('/CaseStudy.json');
      const data = await res.json();
      setCategories(data.categories);
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center space-x-4 gap-y-4 py-10">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"
        onClick={() => setFilteredBlogs(null)}
      >
        All Categories
      </button>

      {categories.map((category) => (
        <button
          key={category.category_slug}
          className="border border-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-100"
          onClick={() => setFilteredBlogs(category.category_slug)}
        >
          {category.category_name}
        </button>
      ))}
    </div>
  );
}
