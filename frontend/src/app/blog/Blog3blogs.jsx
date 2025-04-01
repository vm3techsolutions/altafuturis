"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const BlogLayout = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState(null);

  const WORDPRESS_API = process.env.NEXT_PUBLIC_WORDPRESS_API;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `${WORDPRESS_API}/posts?_embed&per_page=100`
        );
        const data = await response.json();

        const formattedBlogs = data.map((blog) => ({
          id: blog.id,
          title: blog.title.rendered,
          slug: blog.slug,
          link: `/blog/${blog.slug}`,
          image:
            blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/assets/placeholder.png",
          category: blog.categories?.[0] || "uncategorized",
          date: new Date(blog.date).toLocaleDateString(),
          description: blog.excerpt.rendered.replace(/<[^>]+>/g, ""),
        }));

        setBlogs(formattedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${WORDPRESS_API}/categories`);
        const data = await response.json();

        const assignedCategoryIds = new Set(blogs.map((blog) => blog.category));
        const filteredCategories = data
          .filter((category) => assignedCategoryIds.has(category.id))
          .map((category) => ({ id: category.id, name: category.name }));

        setCategories(filteredCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    if (blogs.length > 0) {
      fetchCategories();
    }
  }, [blogs]);

  const handleCategoryFilter = (categoryId) => {
    setFilteredCategory(categoryId);
  };

  const displayedBlogs = filteredCategory
    ? blogs.filter((blog) => blog.category === filteredCategory)
    : blogs;

  if (!blogs.length) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-full mx-auto mt-12 p-4">
      {/* Category Filter Buttons */}
      <div className="w-full flex justify-center mb-6">
      <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:space-x-4 overflow-x-auto p-2">
  <button
    onClick={() => handleCategoryFilter(null)}
    className={`w-full sm:w-auto px-4 py-2 border rounded-xl whitespace-nowrap ${
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
      className={`w-full sm:w-auto px-4 py-2 border rounded-xl transition-colors duration-300 whitespace-nowrap ${
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

      {/* Blog Display */}
      <div className="flex flex-wrap py-4">
        {/* Left Side - Case Study Content */}
        <div className="w-full md:w-3/5 p-4 space-y-10">
          {displayedBlogs.slice(0, 1).map((blog) => (
            <div key={blog.id} className="overflow-hidden md:p-5">
              <img
                className="w-full h-80 object-cover rounded-lg"
                src={blog.image}
                alt={blog.title}
              />
              <div className="p-4 space-y-5 border-l-2 border-[#D4B301] -mt-2">
                <h2 className="text-xs mb-2">📅 {blog.date}</h2>
                <h2 className="text-3xl font-semibold">{blog.title}</h2>
                <p className="text-gray-600 mt-2 text-lg">
                  {blog.description.split(" ").slice(0, 300).join(" ")}...
                </p>
                <Link
                  href={blog.link}
                  className="text-[#6328A6] mt-4 inline-block font-semibold"
                >
                  READ MORE &raquo;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Vertical Scroll with Short Text */}
        <div className="w-full md:w-2/5 p-4 h-[800px] overflow-y-auto">
          {displayedBlogs.slice(1).map((blog) => (
            <div key={blog.id} className="mb-4 overflow-hidden md:p-5">
              <img
                className="w-full h-48 object-cover rounded-lg border-l-2 border-[#D4B301]"
                src={blog.image}
                alt={blog.title}
              />
              <div className="p-4 border-l-2 border-[#D4B301] -mt-2">
                <h2 className="text-xs mb-2">📅 {blog.date}</h2>
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {blog.description.split(" ").slice(0, 12).join(" ")}...
                </p>
                <Link
                  href={blog.link}
                  className="text-[#6328A6] text-sm inline-block font-semibold"
                >
                  READ MORE &raquo;
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
