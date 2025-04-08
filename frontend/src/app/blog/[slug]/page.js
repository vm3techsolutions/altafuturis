/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import axios from "axios";
import { Calendar, Tag } from "lucide-react";

const WORDPRESS_API = process.env.NEXT_PUBLIC_WORDPRESS_API;

export async function generateMetadata({params})  {
  const slug = params.slug;
  const res = await fetch(`${WORDPRESS_API}/posts?slug=${slug}&_embed=true`);
  const post = (await res.json())[0];
  return {
    title: post?.title?.rendered || "Blog Post", 
    description: post?.excerpt?.rendered?.replace(/<[^>]+>/g, "") || "Blog Post Description",
  };
}


// ✅ Fetch all blog post slugs for static generation
export async function generateStaticParams() {
  try {
    const response = await axios.get(
      `${WORDPRESS_API}/posts?_embed=true&per_page=100`
    );

    const data = response.data;

    if (!Array.isArray(data) || data.length === 0) {
      console.error("No blog posts found.");
      return [];
    }

    return data.map((post) => ({
      slug: post.slug, // ✅ Must match [slug] in the file name
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

const BlogPostDetails = async ({ params }) => {
  const { slug } = params;
  console.log("Received slug:", params.slug);
  console.log("Fetching blog post for slug:", slug);
  try {
    // ✅ Fetch blog post details by slug
    const response = await axios.get(
      `${WORDPRESS_API}/posts?slug=${slug}&_embed=true`
    );

    if (!response.data || response.data.length === 0) {
      return <p className="text-center mt-10 text-red-500">Blog post not found.</p>;
    }

    const data = response.data[0];
    const blogPost = {
      title: data.title?.rendered || "Untitled",
      date: new Date(data.date).toLocaleDateString(),
      category: data._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized",
      image:
        data._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.full?.source_url ||
        "/assets/placeholder.png",
      content: data.content?.rendered || "<p>No content available.</p>",
    };

    // ✅ Fetch related blog posts
    const relatedResponse = await axios.get(
      `${WORDPRESS_API}/posts?_embed=true&per_page=10`
    );

    let relatedPosts = relatedResponse.data.filter((item) => item.slug !== slug);
    relatedPosts.sort(() => 0.5 - Math.random());
    relatedPosts = relatedPosts.slice(0, 2).map((item) => ({
      slug: item.slug,
      title: item.title.rendered,
      image:
        item._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.medium?.source_url ||
        "/assets/placeholder.png",
    }));

    return (
      <div className="mt-12 bg-white">
        {/* ✅ Banner Image */}
        <div className="w-full h-[30vh] md:h-[75vh] lg:h-[75vh] 2xl:h-[75vh] relative">
          <Image
            className="w-full h-full object-cover"
            src={blogPost.image}
            alt={blogPost.title}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="px-12 py-6">
          {/* ✅ Date & Category */}
          <div className="mt-6 text-md text-gray-500 flex items-center space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <p>{blogPost.date}</p>
            </div>
            <div className="flex items-center px-3 py-1 rounded-md text-gray-700 bg-gray-200">
              <Tag className="w-4 h-4 mr-2" />
              <p>{blogPost.category}</p>
            </div>
          </div>

          {/* ✅ Title */}
          <h1 className="text-4xl font-bold mt-4">{blogPost.title}</h1>

          {/* ✅ Content */}
          <div
            className="mt-8 text-lg text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          ></div>

          {/* ✅ Back Button */}
          <div className="mt-10 text-center">
            <a href="/blog"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
            >
              Back to Blog
            </a>
          </div>
        </div>

        {/* ✅ Related Blog Posts */}
        <div className="mt-12 px-12 py-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Column 1: Read More Button */}
            <div className="w-full md:w-1/5 px-24 md:px-2">
              <button className="w-full md:w-auto px-5 py-3 text-md border-2 border-brownColor rounded-full text-black shadow-sm transition-all duration-300 ease-in-out font-bold">
                Read More
              </button>
            </div>

            {/* Column 2: Heading */}
            <div className="w-full md:w-1/5 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800">You May Also Like</h2>
            </div>

            {/* Column 3: Related Blog Posts */}
            <div className="w-full md:w-3/5 flex flex-col space-y-6">
              {relatedPosts.length > 0 ? (
                relatedPosts.map((post) => (
                  <div key={post.slug} className="bg-white p-4 rounded-lg flex flex-col md:flex-row">
                    {/* ✅ Image */}
                    <div className="w-full md:w-1/3">
                      <img
                        className="w-full h-40 object-cover border-brownColor border-2 rounded-md"
                        src={post.image}
                        width={300}
                        height={200}
                        alt={post.title}
                      />
                    </div>

                    {/* ✅ Text Content */}
                    <div className="w-full md:w-2/3 pl-4 mt-2">
                      <h3 className="text-xl font-semibold">{post.title}</h3>
                      <a
                        href={`/blog/${post.slug}`}
                        className="text-blue-600 mt-2 inline-block hover:text-brownColor"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No related blog posts available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading blog post:", error);
    return <p className="text-center mt-10 text-red-500">Error loading blog post.</p>;
  }
};

export default BlogPostDetails;
