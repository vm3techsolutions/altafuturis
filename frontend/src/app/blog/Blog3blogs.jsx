// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// const BlogLayout = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [filteredCategory, setFilteredCategory] = useState(null);
//   const [selectedBlog, setSelectedBlog] = useState(null);

//   const WORDPRESS_API = process.env.NEXT_PUBLIC_WORDPRESS_API;

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch(
//           `${WORDPRESS_API}/posts?_embed&per_page=100`
//         );
//         const data = await response.json();

//         const formattedBlogs = data.map((blog) => ({
//           id: blog.id,
//           title: blog.title.rendered,
//           slug: blog.slug,
//           link: `/blog/${blog.slug}`,
//           image:
//             blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//             "/assets/placeholder.png",
//           category: blog.categories?.[0] || "uncategorized",
//           date: new Date(blog.date).toLocaleDateString(),
//           description: blog.excerpt.rendered.replace(/<[^>]+>/g, ""),
//         }));

//         setBlogs(formattedBlogs);
//         setSelectedBlog(formattedBlogs[0]); // default left side blog
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch(`${WORDPRESS_API}/categories`);
//         const data = await response.json();

//         const assignedCategoryIds = new Set(blogs.map((blog) => blog.category));
//         const filteredCategories = data
//           .filter((category) => assignedCategoryIds.has(category.id))
//           .map((category) => ({ id: category.id, name: category.name }));

//         setCategories(filteredCategories);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     if (blogs.length > 0) {
//       fetchCategories();
//     }
//   }, [blogs]);

//   const handleCategoryFilter = (categoryId) => {
//     setFilteredCategory(categoryId);
//     const filtered = categoryId
//       ? blogs.filter((blog) => blog.category === categoryId)
//       : blogs;
//     setSelectedBlog(filtered[0] || null);
//   };

//   const handleBlogClick = (blog) => {
//     setSelectedBlog(blog);
//   };

//   const displayedBlogs = filteredCategory
//     ? blogs.filter((blog) => blog.category === filteredCategory)
//     : blogs;

//   if (!blogs.length) return <p className="text-center mt-10">Loading...</p>;

//   return (
//     <div className="max-w-full mx-auto mt-12 p-4">
//       {/* Category Filter Buttons */}
//       <div className="w-full flex justify-center mb-6">
//         <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:space-x-4 overflow-x-auto p-2">
//           <button
//             onClick={() => handleCategoryFilter(null)}
//             className={`w-full sm:w-auto px-4 py-2 border rounded-xl whitespace-nowrap ${
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
//               className={`w-full sm:w-auto px-4 py-2 border rounded-xl transition-colors duration-300 whitespace-nowrap ${
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

//       {/* Blog Display */}
//       <div className="flex flex-wrap py-4">
//         {/* Left Side - Selected Blog */}
//         <div className="w-full md:w-3/5 p-4 space-y-10">
//           {selectedBlog && (
//             <div key={selectedBlog.id} className="overflow-hidden md:p-5">
//               <Image
//                 className="w-full h-80 object-cover rounded-lg"
//                 src={selectedBlog.image}
//                 alt={selectedBlog.title}
//                 width={700}
//                 height={500}
//               />
//               <div className="p-4 space-y-5 border-l-2 border-[#D4B301] -mt-2">
//                 <h2 className="text-xs mb-2">📅 {selectedBlog.date}</h2>
//                 <h2 className="text-3xl font-semibold">{selectedBlog.title}</h2>
//                 <p className="text-gray-600 mt-2 text-lg">
//                   {selectedBlog.description.split(" ").slice(0, 300).join(" ")}...
//                 </p>
//                 <Link
//                   href={selectedBlog.link}
//                   className="text-[#6328A6] mt-4 inline-block font-semibold hover:text-brownColor"
//                 >
//                   READ MORE &raquo;
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Right Side - List of Blog Cards */}
//         <div className="w-full md:w-2/5 p-4 h-[800px] overflow-y-auto">
//           {displayedBlogs
//             .filter((blog) => blog.id !== selectedBlog?.id)
//             .map((blog) => (
//               <div
//                 key={blog.id}
//                 className="mb-4 overflow-hidden md:p-5 cursor-pointer"
//                 onClick={() => handleBlogClick(blog)}
//               >
//                 <Image
//                   className="w-full h-48 object-cover rounded-lg border-l-2 border-[#D4B301]"
//                   src={blog.image}
//                   alt={blog.title}
//                   width={300}
//                   height={200}
//                 />
//                 <div className="p-4 border-l-2 border-[#D4B301] -mt-2">
//                   <h2 className="text-xs mb-2">📅 {blog.date}</h2>
//                   <h3 className="text-lg font-semibold">{blog.title}</h3>
//                   <p className="text-gray-600 mt-2 text-sm">
//                     {blog.description.split(" ").slice(0, 12).join(" ")}...
//                   </p>
//                   <span className="text-[#6328A6] text-sm inline-block font-semibold">
//                     VIEW BLOG &raquo;
//                   </span>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogLayout;
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const BlogLayout = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [filteredCategory, setFilteredCategory] = useState(null);

  useEffect(() => {
    const fetchBlogJSON = async () => {
      try {
        const res = await fetch("/Blog.json"); // JSON in public folder
        const json = await res.json();

        // Flatten category-wise blogs
        const formatted = json.categories.flatMap((cat) =>
          cat.caseStudy.map((item) => ({
            ...item,
            category: cat.category_name,
            slug: item.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, ""),
          }))
        );

        setBlogs(formatted);
        setSelectedBlog(formatted[0]);
        setCategories(json.categories.map((c) => c.category_name));
      } catch (err) {
        console.error("Error fetching JSON:", err);
      }
    };

    fetchBlogJSON();
  }, []);

  const handleCategoryFilter = (cat) => {
    setFilteredCategory(cat);
    const filtered = cat ? blogs.filter((b) => b.category === cat) : blogs;
    setSelectedBlog(filtered[0]);
  };

  const displayedBlogs = filteredCategory
    ? blogs.filter((b) => b.category === filteredCategory)
    : blogs;

  return (
    <div className="max-w-full mx-auto mt-12 p-4">
      {/* CATEGORY FILTER */}
      <div className="w-full flex justify-center mb-6">
        <div className="flex flex-wrap gap-3 p-2">
          <button
            className={`px-4 py-2 rounded-xl ${
              filteredCategory === null ? "bg-blue-600 text-white" : "border"
            }`}
            onClick={() => handleCategoryFilter(null)}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryFilter(cat)}
              className={`px-4 py-2 rounded-xl ${
                filteredCategory === cat ? "bg-blue-600 text-white" : "border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* BLOG CONTENT */}
      <div className="flex flex-wrap py-4">
        {/* LEFT SIDE BIG BLOG */}
        <div className="w-full md:w-3/5 p-4">
          {selectedBlog && (
            <div>
              <Image
                className="w-full h-80 object-cover rounded-lg"
                src={selectedBlog.image}
                width={700}
                height={400}
                alt={selectedBlog.title}
              />

              <div className="p-4 border-l-4 border-yellow-500">
                <p className="text-xs">{selectedBlog.p}</p>
                <h2 className="text-3xl font-semibold">{selectedBlog.title}</h2>
                <p className="text-gray-600 mt-3">
                  {selectedBlog.description?.slice(0, 200)}...
                </p>

                {/* <Link
                  href={`/blog/${selectedBlog.slug}`}
                  className="text-purple-600 font-bold mt-4 block"
                >
                  READ MORE →
                </Link> */}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDE BLOG LIST */}
        <div className="w-full md:w-2/5 p-4 h-[800px] overflow-y-auto">
          {displayedBlogs
            .filter((b) => b.id !== selectedBlog?.id)
            .map((b) => (
              <div
                key={b.id}
                onClick={() => setSelectedBlog(b)}
                className="mb-4 cursor-pointer"
              >
                <Image
                  className="w-full h-48 object-cover rounded-lg"
                  src={b.image}
                  width={300}
                  height={200}
                  alt={b.title}
                />

                <div className="p-4 border-l-4 border-yellow-500">
                  <p className="text-xs">{b.p}</p>
                  <h3 className="text-lg font-semibold">{b.title}</h3>
                  <p className="text-gray-600 mt-1">
                    {b.description.slice(0, 50)}...
                  </p>

                  <Link href={`/blog/${b.slug}`} className="text-purple-600 text-sm">
                    VIEW BLOG →
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
