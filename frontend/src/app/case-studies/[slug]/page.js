/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import axios from "axios";
import { Calendar, Tag } from "lucide-react";

const WORDPRESS_API = process.env.NEXT_PUBLIC_WORDPRESS_API;

export async function generateMetadata({params})  {
  const slug = params.slug;
  const res = await fetch(`${WORDPRESS_API}/case_study?slug=${slug}&_embed=true`);
  const case_study = (await res.json())[0];
  return {
    title: case_study?.title?.rendered || "Case Study Post", 
    description: case_study?.excerpt?.rendered?.replace(/<[^>]+>/g, "") || "Case Study Post Description",
  };
}

// ✅ Fetch all case study slugs for static generation
export async function generateStaticParams() {
  try {
    const response = await axios.get(
      `${WORDPRESS_API}/case_study?_embed=true&per_page=100`
    );

    const data = response.data;

    if (!Array.isArray(data) || data.length === 0) {
      console.error("No case studies found.");
      return [];
    }

    return data.map((caseStudy) => ({
      slug: caseStudy.slug, // ✅ Must match [slug] in the file name
    }));
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return [];
  }
}

const CaseStudyDetails = async ({ params }) => {
  const { slug } = params;
  console.log("Received slug:", params.slug);
  console.log("Fetching case study for slug:", slug);
  try {
    // ✅ Fetch case study details by slug
    const response = await axios.get(
      `${WORDPRESS_API}/case_study?slug=${slug}&_embed=true`
    );

    if (!response.data || response.data.length === 0) {
      return <p className="text-center mt-10 text-red-500">Case study not found.</p>;
    }

    const data = response.data[0];
    const caseStudy = {
      title: data.title?.rendered || "Untitled",
      date: new Date(data.date).toLocaleDateString(),
      category: data._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized",
      image: data._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/assets/placeholder.png",
      content: data.content?.rendered || "<p>No content available.</p>",
    };

    // ✅ Fetch related case studies
    const relatedResponse = await axios.get(
      `${WORDPRESS_API}/case_study?_embed=true&per_page=10`
    );

    let relatedCaseStudies = relatedResponse.data.filter((item) => item.slug !== slug);
    relatedCaseStudies.sort(() => 0.5 - Math.random());
    relatedCaseStudies = relatedCaseStudies.slice(0, 2).map((item) => ({
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
            src={caseStudy.image}
            alt={caseStudy.title}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="px-12 py-6">
          {/* ✅ Date & Category */}
          <div className="mt-6 text-md text-gray-500 flex items-center space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <p>{caseStudy.date}</p>
            </div>
            <div className="flex items-center px-3 py-1 rounded-md text-gray-700 bg-gray-200">
              <Tag className="w-4 h-4 mr-2" />
              <p>{caseStudy.category}</p>
            </div>
          </div>

          {/* ✅ Title */}
          <h1 className="text-4xl font-bold mt-4">{caseStudy.title}</h1>

          {/* ✅ Description */}
          <div
            className="mt-8 text-lg text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: caseStudy.content }}
          ></div>

          {/* ✅ Back Button */}
          <div className="mt-10 text-center">
            <a href="/case-studies"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
            >
              Back to Case Studies
            </a>
          </div>
        </div>

        {/* ✅ Related Case Studies */}
<div className="mt-12 px-4 md:px-12 py-8">
  <div className="flex flex-col md:flex-row md:items-start gap-6">
    
    {/* Column 1: Read More Button */}
    <div className="w-full md:w-1/5 px-24 md:px-2">
      <button className="w-full md:w-auto px-5 py-3 text-md border-2 border-brownColor rounded-full text-black shadow-sm transition-all duration-300 ease-in-out font-bold">
        Read More
      </button>
    </div>

    {/* Column 2: Heading */}
    <div className="w-full md:w-1/5 text-center md:text-left">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">You May Also Like</h2>
    </div>

    {/* Column 3: Related Case Studies */}
    <div className="w-full md:w-3/5 flex flex-col space-y-6">
      {relatedCaseStudies.length > 0 ? (
        relatedCaseStudies.map((study) => (
          <div key={study.slug} className="bg-white p-4 rounded-lg flex flex-col md:flex-row">
            
            {/* ✅ Image */}
            <div className="w-full md:w-1/3">
              <img
                className="w-full h-40 object-cover border-brownColor border-2 rounded-md"
                src={study.image}
                width={300}
                height={200}
                alt={study.title}
              />
            </div>

            {/* ✅ Text Content */}
            <div className="w-full md:w-2/3 pl-0 md:pl-4 mt-4 md:mt-0">
              <h3 className="text-xl font-semibold">{study.title}</h3>
              <a
                href={`/case-studies/${study.slug}`}
                className="text-blue-600 mt-2 inline-block hover:text-brownColor"
              >
                Read More
              </a>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No related case studies available.</p>
      )}
    </div>
  </div>
</div>

      </div>
    );
  } catch (error) {
    console.error("Error loading case study:", error);
    return <p className="text-center mt-10 text-red-500">Error loading case study.</p>;
  }
};

export default CaseStudyDetails;
