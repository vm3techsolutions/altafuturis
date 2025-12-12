"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogDetails({ params }) {
  const { slug } = params;

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("/data/Blog.json")
      .then((res) => res.json())
      .then((json) => {
        const allBlogs = json.categories.flatMap((cat) =>
          cat.caseStudy.map((b) => ({
            ...b,
            categoryId: cat.category_name,
            slug: b.title
              .toLowerCase()
              .replace(/ /g, "-")
              .replace(/[^a-zA-Z0-9-]/g, "")
          }))
        );

        const found = allBlogs.find((b) => b.slug === slug);
        setBlog(found);
      });
  }, [slug]);

  if (!blog) return <p className="p-20 text-center">Loading...</p>;

  return (
    <div className=" mx-auto py-12 px-10">

      

      {/* Banner Image */}
      <Image
        src={blog.image}
        width={1200}
        height={600}
        className="w-full h-96 object-cover rounded-lg mt-5"
        alt={blog.title}
      />

      {/* Date */}
      <p className="mt-4 text-gray-500">{blog.p}</p>

      {/* Title */}
      <h1 className="text-4xl font-bold mt-4">{blog.title}</h1>

      {/* topic */}
      {blog.topic && (
        <p className="mt-6 text-lg text-gray-700 leading-8">{blog.topic}</p>
      )}

      {/* description */}
      {blog.description && (
        <p className="mt-6 text-gray-700 leading-8">{blog.description}</p>
      )}

      {/* topic2 */}
      {blog.topic2 && (
        <h2 className="text-2xl font-semibold mt-10">{blog.topic2}</h2>
      )}

      {/* Additional paragraphs p1, p2, p3 */}
      {["p1", "p2", "p3", "p4", "p5"].map(
        (key) =>
          blog[key] && (
            <p key={key} className="mt-4 text-gray-700 leading-7">
              {blog[key]}
            </p>
          )
      )}

{/* Back Button */}
      <Link
        href="/blog"
        className="inline-block mb-6 px-5 py-2 bg-[#6328A6] mt-10 text-white rounded-md hover:bg-brownColor transition"
      >
        ← Back to Blogs
      </Link>
    </div>
  );
}
