// /* eslint-disable @next/next/no-html-link-for-pages */
// import Image from "next/image";
// import axios from "axios";
// import { Calendar, Tag } from "lucide-react";

// const WORDPRESS_API = process.env.NEXT_PUBLIC_WORDPRESS_API;

// export async function generateMetadata({params})  {
//   const slug = params.slug;
//   const res = await fetch(`${WORDPRESS_API}/posts?slug=${slug}&_embed=true`);
//   const post = (await res.json())[0];
//   return {
//     title: post?.title?.rendered || "Blog Post", 
//     description: post?.excerpt?.rendered?.replace(/<[^>]+>/g, "") || "Blog Post Description",
//   };
// }


// // ✅ Fetch all blog post slugs for static generation
// export async function generateStaticParams() {
//   try {
//     const response = await axios.get(
//       `${WORDPRESS_API}/posts?_embed=true&per_page=100`
//     );

//     const data = response.data;

//     if (!Array.isArray(data) || data.length === 0) {
//       console.error("No blog posts found.");
//       return [];
//     }

//     return data.map((post) => ({
//       slug: post.slug, // ✅ Must match [slug] in the file name
//     }));
//   } catch (error) {
//     console.error("Error fetching blog posts:", error);
//     return [];
//   }
// }

// const BlogPostDetails = async ({ params }) => {
//   const { slug } = params;
//   console.log("Received slug:", params.slug);
//   console.log("Fetching blog post for slug:", slug);
//   try {
//     // ✅ Fetch blog post details by slug
//     const response = await axios.get(
//       `${WORDPRESS_API}/posts?slug=${slug}&_embed=true`
//     );

//     if (!response.data || response.data.length === 0) {
//       return <p className="text-center mt-10 text-red-500">Blog post not found.</p>;
//     }

//     const data = response.data[0];
//     const blogPost = {
//       title: data.title?.rendered || "Untitled",
//       date: new Date(data.date).toLocaleDateString(),
//       category: data._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized",
//       image:
//         data._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.full?.source_url ||
//         "/assets/placeholder.png",
//       content: data.content?.rendered || "<p>No content available.</p>",
//     };

//     // ✅ Fetch related blog posts
//     const relatedResponse = await axios.get(
//       `${WORDPRESS_API}/posts?_embed=true&per_page=10`
//     );

//     let relatedPosts = relatedResponse.data.filter((item) => item.slug !== slug);
//     relatedPosts.sort(() => 0.5 - Math.random());
//     relatedPosts = relatedPosts.slice(0, 2).map((item) => ({
//       slug: item.slug,
//       title: item.title.rendered,
//       image:
//         item._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.medium?.source_url ||
//         "/assets/placeholder.png",
//     }));

//     return (
//       <div className="mt-12 bg-white">
//         {/* ✅ Banner Image */}
//         <div className="w-full mt-20 h-[30vh] sm:h-[34vh] md:mt-22 lg:mt-32 md:h-[44vh] lg:h-[40vh] xl:h-[55vh] 2xl:h-[65vh] relative">
//           <Image
//             className="w-full h-full object-cover"
//             src={blogPost.image}
//             alt={blogPost.title}
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>

//         <div className="px-12 py-6">
//           {/* ✅ Date & Category */}
//           <div className="mt-6 text-md text-gray-500 flex items-center space-x-4">
//             <div className="flex items-center">
//               <Calendar className="w-4 h-4 mr-2" />
//               <p>{blogPost.date}</p>
//             </div>
//             <div className="flex items-center px-3 py-1 rounded-md text-gray-700 bg-gray-200">
//               <Tag className="w-4 h-4 mr-2" />
//               <p>{blogPost.category}</p>
//             </div>
//           </div>

//           {/* ✅ Title */}
//           <h1 className="text-4xl font-bold mt-4">{blogPost.title}</h1>

//           {/* ✅ Content */}
//           <div
//             className="mt-8 text-lg text-gray-700 leading-relaxed"
//             dangerouslySetInnerHTML={{ __html: blogPost.content }}
//           ></div>

//           {/* ✅ Back Button */}
//           <div className="mt-10 text-center">
//             <a href="/blog"
//               className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
//             >
//               Back to Blog
//             </a>
//           </div>
//         </div>

//         {/* ✅ Related Blog Posts */}
//         <div className="mt-12 px-12 py-8">
//           <div className="flex flex-col md:flex-row items-start gap-6">
//             {/* Column 1: Read More Button */}
//             <div className="w-full md:w-1/5 px-24 md:px-2">
//               <button className="w-full md:w-auto px-5 py-3 text-md border-2 border-brownColor rounded-full text-black shadow-sm transition-all duration-300 ease-in-out font-bold">
//                 Read More
//               </button>
//             </div>

//             {/* Column 2: Heading */}
//             <div className="w-full md:w-1/5 text-center md:text-left">
//               <h2 className="text-3xl font-bold text-gray-800">You May Also Like</h2>
//             </div>

//             {/* Column 3: Related Blog Posts */}
//             <div className="w-full md:w-3/5 flex flex-col space-y-6">
//               {relatedPosts.length > 0 ? (
//                 relatedPosts.map((post) => (
//                   <div key={post.slug} className="bg-white p-4 rounded-lg flex flex-col md:flex-row">
//                     {/* ✅ Image */}
//                     <div className="w-full md:w-1/3">
//                       <img
//                         className="w-full h-40 object-cover border-brownColor border-2 rounded-md"
//                         src={post.image}
//                         width={300}
//                         height={200}
//                         alt={post.title}
//                       />
//                     </div>

//                     {/* ✅ Text Content */}
//                     <div className="w-full md:w-2/3 pl-4 mt-2">
//                       <h3 className="text-xl font-semibold">{post.title}</h3>
//                       <a
//                         href={`/blog/${post.slug}`}
//                         className="text-blue-600 mt-2 inline-block hover:text-brownColor"
//                       >
//                         Read More
//                       </a>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-500">No related blog posts available.</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   } catch (error) {
//     console.error("Error loading blog post:", error);
//     return <p className="text-center mt-10 text-red-500">Error loading blog post.</p>;
//   }
// };


// import Image from "next/image";
// import Link from "next/link";

// export default async function BlogPage({ params }) {
//   const { slug } = params;

//   // ✅ Dynamically import JSON to get correct array
//   const blogsModule = await import("../../../../public/Blog.json");
//   const blogsData = blogsModule.default;

//   // 🔹 Make sure blogsData is an array
//   const blogs = Array.isArray(blogsData) ? blogsData : [];

//   // Flatten all blogs and attach category
//   const allBlogs = blogs.flatMap((cat) =>
//     (cat.caseStudy || []).map((item) => ({
//       ...item,
//       category: cat.category_name,
//       slug: item.title
//         .toLowerCase()
//         .replace(/[^a-z0-9]+/g, "-")
//         .replace(/(^-|-$)/g, ""),
//     }))
//   );

//   // Find current blog
//   const blog = allBlogs.find((b) => b.slug === slug);

//   if (!blog)
//     return (
//       <p className="mt-16 text-center text-red-600 text-xl">
//         ❌ Blog Not Found
//       </p>
//     );

//   // Related posts (first 2 others)
//   const related = allBlogs.filter((b) => b.slug !== slug).slice(0, 2);

//   return (
//     <div className="mt-20 p-6 max-w-5xl mx-auto">
//       {/* Banner */}
//       <div className="w-full h-[300px] relative mb-6">
//         <Image
//           src={blog.image}
//           fill
//           className="object-cover rounded-lg"
//           alt={blog.title}
//         />
//       </div>

//       <h1 className="text-4xl font-bold">{blog.title}</h1>
//       <p className="text-gray-500 mt-2">{blog.p}</p>

//       <p className="mt-5 text-lg text-gray-700">{blog.topic}</p>
//       <p className="mt-3 text-gray-700">{blog.description}</p>

//       {blog.topic2 && (
//         <>
//           <h2 className="text-2xl font-semibold mt-6">{blog.topic2}</h2>
//           {blog.p1 && <p className="mt-2 text-gray-700">{blog.p1}</p>}
//           {blog.p2 && <p className="mt-2 text-gray-700">{blog.p2}</p>}
//           {blog.p3 && <p className="mt-2 text-gray-700">{blog.p3}</p>}
//         </>
//       )}

//       <div className="mt-6 text-center">
//         <Link
//           href="/blog"
//           className="px-6 py-3 bg-purple-600 text-white rounded-lg font-bold"
//         >
//           Back to Blog
//         </Link>
//       </div>

//       {/* Related Posts */}
//       <h2 className="text-2xl font-semibold mt-10">Related Posts</h2>
//       <div className="grid md:grid-cols-2 gap-6 mt-4">
//         {related.map((r) => (
//           <Link
//             key={r.id}
//             href={`/blog/${r.slug}`}
//             className="block border p-4 rounded-lg"
//           >
//             <Image
//               src={r.image}
//               width={500}
//               height={300}
//               className="rounded-lg"
//               alt={r.title}
//             />
//             <h3 className="text-lg font-semibold mt-2">{r.title}</h3>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
