'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CategoryButtons() {
  const router = useRouter();

  const categories = [
    { name: "Artificial Intelligence", path: "/src/components/Footer.js" },
    { name: "Data Science", path: "/categories/data-science" },
    { name: "Salesforce", path: "/categories/salesforce" },
  ];

  useEffect(() => {
    console.log("Router is ready:", router);
  }, [router]);

  return (
    <div className="flex flex-wrap items-center justify-center  py-14">
      <div className="flex flex-wrap items-center justify-start space-x-4 gap-y-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center w-full sm:w-auto"
          onClick={() => router.push("/categories")}
        >
          All Categories <span className='bg-[#D4B301] rounded-lg py-1 px-2 ml-2'>&raquo;</span>
        </button>
        {categories.map((category) => (
          <button
            key={category.name}
            className="border border-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-100 flex items-center justify-center w-full sm:w-auto"
            onClick={() => {
              console.log(`Navigating to: ${category.path}`);
              router.push(category.path);
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
