"use client";
import { useState } from "react";
import Blog3blogs from "./Blog3blogs";

export default function CategoryButtons() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const categories = [
    "All Categories",
    "Artificial Intelligence",
    "Data Engineering",
    "Salesforce",
  ];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center space-x-4 p-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg font-semibold w-full sm:w-auto ${
              selectedCategory === category ? "bg-blue-600 text-white" : "border border-yellow-500 text-black hover:bg-yellow-100"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <Blog3blogs selectedCategory={selectedCategory} />
    </div>
  );
}
