// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// const CaseStudyLayout = () => {
//   const [caseStudies, setCaseStudies] = useState([]);
//   const [selectedStudy, setSelectedStudy] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [filteredCategory, setFilteredCategory] = useState(null);

//   const WORDPRESS_API = process.env.NEXT_PUBLIC_WORDPRESS_API;

//   useEffect(() => {
//     const fetchCaseStudies = async () => {
//       try {
//         const response = await fetch(`${WORDPRESS_API}/case_study?_embed&per_page=100`);
//         const data = await response.json();

//         const formattedCaseStudies = data.map((study) => ({
//           id: study.id,
//           title: study.title.rendered,
//           slug: study.slug,
//           link: `/case-studies/${study.slug}`,
//           image: study._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/assets/placeholder.png",
//           category: study.categories?.[0] || "uncategorized",
//           date: new Date(study.date).toLocaleDateString(),
//           description: study.excerpt.rendered.replace(/<[^>]*>?/gm, "").split(" ").slice(0, 100).join(" ") + "...",
//         }));

//         setCaseStudies(formattedCaseStudies);
//         setSelectedStudy(formattedCaseStudies[0]);
//       } catch (error) {
//         console.error("Error fetching case studies:", error);
//       }
//     };
//     fetchCaseStudies();
//   }, []);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch(`${WORDPRESS_API}/categories`);
//         const data = await response.json();

//         const assignedCategoryIds = new Set(caseStudies.map((study) => study.category));

//         const filteredCategories = data
//           .filter((category) => assignedCategoryIds.has(category.id))
//           .map((category) => ({
//             id: category.id,
//             name: category.name,
//           }));

//         setCategories(filteredCategories);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };
//     if (caseStudies.length > 0) {
//       fetchCategories();
//     }
//   }, [caseStudies]);

//   const handleCategoryFilter = (categoryId) => {
//     setFilteredCategory(categoryId);
//     const filtered = categoryId
//       ? caseStudies.filter((study) => study.category === categoryId)
//       : caseStudies;
//     setSelectedStudy(filtered[0]);
//   };

//   const displayedCaseStudies = filteredCategory
//     ? caseStudies.filter((study) => study.category === filteredCategory)
//     : caseStudies;

//   if (!caseStudies.length) return <p className="text-center mt-10">Loading...</p>;

//   return (
//     <div className="max-w-full mx-auto mt-12 p-4">
//       {/* Category Filter Buttons */}
//       <div className="w-full flex justify-center mb-6">
//         <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:space-x-4 overflow-x-auto p-2">
//           <button
//             onClick={() => handleCategoryFilter(null)}
//             className={`w-full sm:w-auto px-4 py-2 border rounded-xl transition-colors duration-300 ${
//               filteredCategory === null
//                 ? "bg-blueColor text-white"
//                 : "border-gray-300 hover:bg-brownColor hover:text-white"
//             }`}
//           >
//             All Categories
//           </button>
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => handleCategoryFilter(category.id)}
//               className={`w-full sm:w-auto px-4 py-2 border rounded-xl transition-colors duration-300 ${
//                 filteredCategory === category.id
//                   ? "bg-blueColor text-white"
//                   : "border-gray-300 hover:bg-brownColor hover:text-white"
//               }`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Main Layout */}
//       <div className="flex flex-wrap py-4">
//         {/* Left: Featured Case Study */}
//         <div className="w-full md:w-3/5 p-4 space-y-10">
//           {selectedStudy && (
//             <div key={selectedStudy.id} className="overflow-hidden md:p-5">
//               <Image
//                 className="w-full h-80 object-cover rounded-lg"
//                 src={selectedStudy.image}
//                 alt={selectedStudy.title}
//                 width={700}
//                 height={500}
//               />
//               <div className="p-4 space-y-5 border-l-2 border-[#D4B301] -mt-2">
//                 <h2 className="text-xs mb-2">📅 {selectedStudy.date}</h2>
//                 <h2 className="text-3xl font-semibold">{selectedStudy.title}</h2>
//                 <p className="text-gray-600 mt-2 text-lg">{selectedStudy.description}</p>
//                 <Link
//                   href={`/case-studies/${selectedStudy.slug}`}
//                   className="text-[#6328A6] mt-4 inline-block font-semibold hover:text-brownColor"
//                 >
//                   READ MORE <span className="text-3xl p-1">&raquo;</span>
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Right: List of Other Case Studies */}
//         <div className="w-full md:w-2/5 p-4 overflow-y-auto max-h-[800px]">
//           {displayedCaseStudies.slice(0).map((study) => (
//             <div
//               key={study.id}
//               onClick={() => setSelectedStudy(study)}
//               className="mb-4 overflow-hidden md:p-5 cursor-pointer hover:bg-gray-50 transition"
//             >
//               <Image
//                 className="w-full h-30 object-cover rounded-lg border-l-2 border-[#D4B301]"
//                 src={study.image}
//                 alt={study.title}
//                 width={300}
//                 height={200}
//               />
//               <div className="p-4 border-l-2 border-[#D4B301] -mt-2">
//                 <h2 className="text-xs mb-2">📅 {study.date}</h2>
//                 <h2 className="text-md font-semibold">{study.title}</h2>
//                 <p className="text-gray-600 mt-2 text-sm">
//                   {study.description.split(" ").slice(0, 12).join(" ") + "..."}
//                 </p>
//                 <span className="text-[#6328A6] text-sm inline-block font-semibold hover:text-brownColor">
//                   READ MORE <span className="text-3xl p-1">&raquo;</span>
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseStudyLayout;


// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function BlogListingPage() {
//   const [data, setData] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [filteredCategory, setFilteredCategory] = useState(null);
//   const [selectedStudy, setSelectedStudy] = useState(null);
//   const [displayed, setDisplayed] = useState([]);

//   useEffect(() => {
//     fetch("/data/case-study.json")
//       .then((res) => res.json())
//       .then((json) => {
//         const allStudies = json.categories.flatMap((cat) =>
//           cat.caseStudy.map((cs) => ({
//             ...cs,
//             categoryId: cat.category_slug,
//             categoryName: cat.category_name,
//             slug: cs.link
//               .replace(/^\//, "") // FIX: remove starting slash
//               .trim()
//               .toLowerCase()
//           }))
//         );

//         setData(allStudies);
//         setDisplayed(allStudies);
//         setSelectedStudy(allStudies[0]);

//         setCategories(
//           json.categories.map((cat) => ({
//             name: cat.category_name,
//             slug: cat.category_slug
//           }))
//         );
//       });
//   }, []);

//   const handleCategoryFilter = (slug) => {
//     setFilteredCategory(slug);
//     if (!slug) {
//       setDisplayed(data);
//       setSelectedStudy(data[0]);
//     } else {
//       const filtered = data.filter((s) => s.categoryId === slug);
//       setDisplayed(filtered);
//       setSelectedStudy(filtered[0]);
//     }
//   };

//   return (
//     <div className="max-w-full mx-auto mt-12 p-4">

//       {/* Category Filter */}
//       <div className="flex justify-center mb-6 gap-4 flex-wrap">
//         <button
//           onClick={() => handleCategoryFilter(null)}
//           className={`px-4 py-2 border rounded-xl ${
//             filteredCategory === null ? "bg-blueColor text-white" : ""
//           }`}
//         >
//           All Categories
//         </button>

//         {categories.map((cat) => (
//           <button
//             key={cat.slug}
//             onClick={() => handleCategoryFilter(cat.slug)}
//             className={`px-4 py-2 border rounded-xl ${
//               filteredCategory === cat.slug ? "bg-blueColor text-white" : ""
//             }`}
//           >
//             {cat.name}
//           </button>
//         ))}
//       </div>

//       {/* Main Layout */}
//       <div className="flex flex-wrap py-4">

//         {/* LEFT Selected Study */}
//         <div className="w-full md:w-3/5 p-4">
//           {selectedStudy && (
//             <>
//               <Image
//                 src={selectedStudy.image}
//                 width={700}
//                 height={500}
//                 alt={selectedStudy.title}
//                 className="w-full h-80 object-cover rounded-lg"
//               />

//               <div className="p-4 border-l-2 border-yellow-500">
//                 <p>📅 {selectedStudy.p}</p>
//                 <h2 className="text-3xl font-semibold">{selectedStudy.title}</h2>
//                 <p className="mt-3 text-gray-600">{selectedStudy.description}</p>

//                 <Link href={`/blog/${selectedStudy.slug}`}>
//                   <button className="bg-blue-600 text-white px-3 py-2 rounded mt-3">
//                     Read More →
//                   </button>
//                 </Link>
//               </div>
//             </>
//           )}
//         </div>

//         {/* RIGHT List */}
//         <div className="w-full md:w-2/5 p-4 max-h-[700px] overflow-y-auto">
//           {displayed.map((study) => (
//             <div
//               key={study.id}
//               className="mb-4 cursor-pointer"
//               onClick={() => setSelectedStudy(study)}
//             >
//               <Image
//                 src={study.image}
//                 width={400}
//                 height={250}
//                 alt={study.title}
//                 className="rounded-lg"
//               />

//               <div className="p-4 border-l-2 border-yellow-500">
//                 <p className="text-xs">📅 {study.p}</p>
//                 <h3 className="font-semibold">{study.title}</h3>

//                 <p className="text-gray-600 text-sm mt-1">
//                   {study.description.split(" ").slice(0, 15).join(" ")}…
//                 </p>

//                 <Link href={`/blog/${study.slug}`}>
//                   <button className="bg-blue-600 text-white px-3 py-2 rounded mt-1">
//                     Read More →
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudyPage() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState(null);
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    fetch("/data/case-study.json")
      .then((res) => res.json())
      .then((json) => {
        const allStudies = json.categories.flatMap((cat) =>
          cat.caseStudy.map((item) => ({
            ...item,
            categoryId: cat.category_slug,
            categoryName: cat.category_name,
            // slug: item.title
            //   .toLowerCase()
            //   .replace(/ /g, "-")
            //   .replace(/[^a-zA-Z0-9-]/g, "")

            slug: item.link.replace("/", "") // link se direct slug

          }))
        );

        setData(allStudies);
        setDisplayed(allStudies);
        setSelectedStudy(allStudies[0]);

        setCategories(
          json.categories.map((cat) => ({
            name: cat.category_name,
            slug: cat.category_slug,
          }))
        );
      });
  }, []);

  const handleCategoryFilter = (catSlug) => {
    setFilteredCategory(catSlug);

    if (catSlug === null) {
      setDisplayed(data);
      setSelectedStudy(data[0]);
    } else {
      const filtered = data.filter((b) => b.categoryId === catSlug);
      setDisplayed(filtered);
      setSelectedStudy(filtered[0]);
    }
  };

  return (
    <div className="max-w-full mx-auto mt-12 p-4">

      {/* CATEGORY FILTER */}
      <div className="flex justify-center mb-6 gap-4 flex-wrap">
        <button
          onClick={() => handleCategoryFilter(null)}
          className={`px-4 py-2 border rounded-xl ${
            filteredCategory === null ? "bg-blueColor text-white" : ""
          }`}
        >
          All Categories
        </button>

        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => handleCategoryFilter(cat.slug)}
            className={`px-4 py-2 border rounded-xl ${
              filteredCategory === cat.slug ? "bg-blueColor text-white" : ""
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-wrap py-4">

        {/* LEFT Selected Study */}
        <div className="w-full md:w-3/5 p-4">
          {selectedStudy && (
            <>
              <Image
                src={selectedStudy.image}
                width={700}
                height={500}
                alt={selectedStudy.title}
                className="w-full h-80 object-cover rounded-lg"
              />

              <div className="p-4 border-l-2 border-yellow-500">
                <p>📅 {selectedStudy.p}</p>
                <h2 className="text-3xl font-semibold">{selectedStudy.title}</h2>
                <p className="mt-3 text-gray-600">{selectedStudy.description}</p>

                <Link href={`/case-studies/${selectedStudy.slug}`}>
                  <button className="bg-blueColor text-white px-3 py-2 rounded mt-3">
                    Read More 
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>

        {/* RIGHT LIST */}
        <div className="w-full md:w-2/5 p-4 max-h-[700px] overflow-y-auto">
          {displayed
            .filter((study) => study.id !== selectedStudy?.id)
            .map((study) => (
              <div
                key={study.id}
                className="mb-4 cursor-pointer"
                onClick={() => setSelectedStudy(study)}
              >
                <Image
                  src={study.image}
                  width={400}
                  height={250}
                  alt={study.title}
                  className="rounded-lg"
                />

                <div className="p-4 border-l-2 border-yellow-500">
                  <p className="text-xs">📅 {study.p}</p>
                  <h3 className="font-semibold">{study.title}</h3>

                  <p className="text-gray-600 text-sm mt-1">
                    {study.description.split(" ").slice(0, 15).join(" ")}…
                  </p>

                  <Link href={`/case-studies/${study.slug}`}>
                    <button className="bg-blueColor text-white px-3 py-2 rounded mt-1">
                      Read More 
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
