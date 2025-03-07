"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const BlogLayout = ({ selectedCategory }) => {
  const [blogs, setBlogs] = useState([]);

   useEffect(() => {
      AOS.init({ duration: 1000 }); // Initialize AOS with duration
    }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/Blog.json");
      const data = await res.json();
      
      if (selectedCategory === "All Categories") {
        setBlogs(data.categories.flatMap(category => category.caseStudy));
      } else {
        const filteredBlogs = data.categories
          .filter(category => category.category_name === selectedCategory)
          .flatMap(category => category.caseStudy);
        setBlogs(filteredBlogs);
      }
    };
    fetchData();
  }, [selectedCategory]);

  return (
    <div className="flex flex-wrap py-4 px-4">
      {/* Left side blog (60%) */}
      <div className="w-full md:w-3/5 p-4">
        {blogs.length > 0 && (
          <div className="overflow-hidden md:p-5">
            <img className="w-full h-80 object-cover rounded-lg" src={blogs[0].image} alt={blogs[0].title} />
            <div className="p-4 space-y-5 border-l-2 border-[#D4B301] -mt-2">
              <h2 className="text-xs mb-2">
              <span className="mr-2">📅</span>{blogs[0].p}</h2>
              <h2 className="text-xl font-semibold">{blogs[0].title}</h2>
              <p className="text-gray-600 mt-2 text-md">{blogs[0].description}</p>
              <a href={blogs[0].link} className="text-[#6328A6] mt-4 inline-block">READ MORE &raquo;</a>
            </div>
          </div>
        )}
      </div>

      {/* Right side blogs (40%) */}
      <div className="w-full md:w-2/5 p-4">
        {blogs.slice(1).map((blog) => (
          <div key={blog.id} className="mb-4 overflow-hidden md:p-5" data-aos="flip-right">
            <img className="w-full h-48 object-cover rounded-lg border-l-2 border-[#D4B301]" src={blog.image} alt={blog.title} />
            <div className="p-4 border-l-2 border-[#D4B301] -mt-2">
              <h2 className="text-xs mb-2">
              <span className="mr-2">📅</span>{blog.p}</h2>
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-gray-600 mt-2 text-md">{blog.description}</p>
              <a href={blog.link} className="text-[#6328A6] mt-4 inline-block font-semibold">READ MORE &raquo;</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogLayout;
