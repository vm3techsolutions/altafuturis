"use client"

import { useEffect, useState } from 'react';

const BlogLayout = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/CaseStudy.json');
      const data = await res.json();
      setBlogs(data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap py- px-4 ">
      {/* Left side blog (60%) */}
      <div className="w-full md:w-3/5 p-4 ">
        <div className=" overflow-hidden md:p-5 ">
          <img className="w-full h-80 object-cover rounded-lg " src={blogs[0]?.image} alt="Blog 1" />
          <div className="p-4 space-y-5 border-l-2 border-[#D4B301] -mt-2">
            <h2 className="text-xl font-semibold">{blogs[0]?.title}</h2>
            <p className="text-gray-600 mt-2">{blogs[0]?.topic}</p>
            <p className="text-gray-600 mt-2">{blogs[0]?.description}</p>
            <h3 className="text-gray-600 mt-2 text-lg font-semibold">{blogs[0]?.topic2}</h3>

            <ul className="space-y-8 list-inside">
  <li className="text-gray-600 list-disc ">{blogs[0]?.p1}</li>
  <li className="text-gray-600 list-disc ">{blogs[0]?.p2}</li>
</ul>

            <a href={blogs[0]?.link} className="text-[#6328A6] mt-4 inline-block">READ MORE <span className='text-3xl p-1'>&raquo;</span></a>
          </div>
        </div>
      </div>

      {/* Right side blogs (40%) */}
      <div className="w-full md:w-2/5 p-4 ">
      
        {blogs.slice(1).map((blog) => (
          <div key={blog.id} className="mb-4 overflow-hidden   md:p-5">
            <img className="w-full h-48 object-cover rounded-lg border-l-2 border-[#D4B301]" src={blog.image} alt={blog.title} />
            <div className="p-4 border-l-2 border-[#D4B301] -mt-2">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-gray-600 mt-2">{blog.description}</p>
              <a href={blog.link} className="text-[#6328A6] mt-4 inline-block font-semibold">READ MORE <span className='text-3xl p-1'>&raquo;</span></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogLayout;
