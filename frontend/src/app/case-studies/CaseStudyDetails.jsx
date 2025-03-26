"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import axios from "axios";

const CaseStudyDetails = () => {
  const { id } = useParams(); // Get case study ID from URL
  const [caseStudy, setCaseStudy] = useState(null);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      try {
        const response = await axios.get(`http://localhost/resources/wp-json/wp/v2/case_study/${id}?`);
        const data = response.data;
        setCaseStudy({
          title: data.title.rendered,
          date: new Date(data.date).toLocaleDateString(),
          image: data._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/assets/placeholder.png",
          content: data.content.rendered,
        });
      } catch (error) {
        console.error("Error fetching case study:", error);
      }
    };

    fetchCaseStudy();
  }, [id]);

  if (!caseStudy) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header Section */}
      <h1 className="text-3xl font-bold">{caseStudy.title}</h1>
      <p className="text-sm text-gray-500 mt-2">📅 {caseStudy.date}</p>
      <Image className="w-full h-96 object-cover rounded-lg mt-6" src={caseStudy.image} width={1000} height={500} alt={caseStudy.title} />

      {/* Content Section */}
      <div className="mt-8 text-lg text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: caseStudy.content }}></div>

      {/* Back Button */}
      <div className="mt-10 text-center">
        <a href="/" className="bg-blueColor text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-brownColor transition">
          Back to Case Studies
        </a>
      </div>
    </div>
  );
};

export default CaseStudyDetails;
