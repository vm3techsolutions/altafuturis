'use client';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import CaseStudy4btn from './CaseStudy4btn';



const BlogLayout = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration
  }, []);

  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/CaseStudy.json');
      const data = await res.json();

      const allCaseStudies = data.categories.flatMap(category =>
        category.caseStudy.map(blog => ({
          ...blog,
          category: category.category_slug
        }))
      );

      setBlogs(allCaseStudies);
    };

    fetchData();
  }, []);

  const displayedBlogs = filteredBlogs
    ? blogs.filter(blog => blog.category === filteredBlogs)
    : blogs;

  if (!blogs.length) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <CaseStudy4btn setFilteredBlogs={setFilteredBlogs} />

      <div className="flex flex-wrap py-4">
        {/* Left side blog (60%) */}
        <div className="w-full md:w-3/5 p-4 space-y-10">
          {displayedBlogs.slice(0, 1).map((blog) => (
            <div key={blog.id} className="overflow-hidden md:p-5" >
              <img className="w-full h-80 object-cover rounded-lg" src={blog.image} alt={blog.title} />
              <div className="p-4 space-y-5 border-l-2 border-[#D4B301] -mt-2">
              <h2 className="text-xs mb-2">
              <span className="mr-2">📅</span>{blog.p}</h2>
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-gray-600 mt-2">{blog.description}</p>

                {/* <h3 className="text-gray-600 mt-2 text-lg font-semibold">{blogs[0]?.topic2}</h3>
                <ul className="space-y-8 list-inside">
  <li className="text-gray-600 list-disc ">{blogs[0]?.p1}</li>
  <li className="text-gray-600 list-disc ">{blogs[0]?.p2}</li>
</ul> */}
                <a href={blog.link} className="text-[#6328A6] mt-4 inline-block font-semibold">
                  READ MORE <span className="text-3xl p-1">&raquo;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right side blogs (40%) */}
        <div className="w-full md:w-2/5 p-4">
          {displayedBlogs.slice(1).map((blog) => (
            <div key={blog.id} className="mb-4 overflow-hidden md:p-5" data-aos="flip-right">
              <img className="w-full h-48 object-cover rounded-lg border-l-2 border-[#D4B301]" src={blog.image} alt={blog.title} />
              <div className="p-4 border-l-2 border-[#D4B301] -mt-2">
              <h2 className="text-xs mb-2">
              <span className="mr-2">📅</span>{blog.p}</h2>
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-gray-600 mt-2">{blog.description}</p>
                <a href={blog.link} className="text-[#6328A6] mt-4 inline-block font-semibold">
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

export default BlogLayout;
